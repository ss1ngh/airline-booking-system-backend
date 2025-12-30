const {Logger} = require('../config'); 

class CrudRepository {
    constructor(model) { 
        this.model = model
    }

    async create(data) {
        try{
            const response = await this.model.create({
                data : data
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the crud repo : create')
            throw error;
        }
    }

    async destroy(id) {
        try{
            const response = await this.model.destroy({
                where : {
                    id : id
                }
            })
            return response;
        } catch(error) {
            Logger.error('Something went wrong with crud repo : destroy');
            throw error;
        }
    }

    async get(id) {
        try{
            const reponse = await this.model.findUnique({
                where: {
                    id : id
                }
            });
            return reponse;
        } catch(error) {
            Logger.error('Something went wrong with crud repo : get')
            throw error;
        }
    }

    async getAll() { 
        try{
            const response = await this.model.findMany();
            return response;
        } catch(error) {
            Logger.error('Something went wrong with crud repo : getAll')
            throw error;
        }
    }

    async update(id, data) { 
        try{
            const response = await this.model.update({
                where : {
                    id : id
                },
                data : data
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong with crud repo : getAll')
            throw error;
        }
    }
}


module.exports = CrudRepository;