const Sequelize = require('sequelize')
const connectDB  = require('../utils/dataBase')
const model =connectDB.define('Todo',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
        type:Sequelize.INTEGER
    },
    done:{
        type:Sequelize.BOOLEAN,
        allowNull: false
    },
    title:{
        type: Sequelize.STRING,
        allowNull:false
    }
})
module.exports = model