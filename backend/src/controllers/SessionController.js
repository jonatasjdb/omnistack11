const connection = require('../database/connection');
module.exports = {
  async create(request,response){
    const { id } = request.body;
    const ongs = await connection('ongs')
      .select('name')
      .where('id',id)
      .first();

      if(!ongs) return response.status(400).json({error : "Essa Ong não existe!"})
      
      return response.json(ongs)
  }
}