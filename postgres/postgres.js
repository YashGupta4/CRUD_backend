import { Sequelize } from "sequelize";
import { createUser } from "../model/userSchema.js";

const sequelize = new Sequelize('world', 'postgres', 'yash', {
    host: 'localhost',
    dialect: 'postgres'
  });
  
  let userModel=null;

  const connection=async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        userModel=await createUser(sequelize)
        await sequelize.sync();
        console.log("Database Synced");
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }


  export {
    connection,
    userModel
  }