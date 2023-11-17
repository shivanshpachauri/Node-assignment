
const {sequelize}=require('./database');
const { DataTypes } = require("sequelize");
const Books = sequelize.define("book", {
    bookid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    bookname: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
   
}, { timestamps: false });

module.exports = { Books };