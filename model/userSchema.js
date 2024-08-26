import { DataTypes } from "sequelize";

export const createUser=async(sequelize)=>{

    const User=sequelize.define('User',{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            isLowerCase: true,
            unique: true
        },
        designation:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        empid:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

    },
{
    tableName:'CRUD_Project',
    timestamps: false
});
    return User;

}