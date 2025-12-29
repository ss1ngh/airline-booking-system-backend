const CrudRepository = require('./crud-repository');
const prisma = require('../config/db');

class AirplaneRepository extends CrudRepository { 
    constructor() {
        super(prisma.airplane);
    }
}

module.exports = AirplaneRepository;