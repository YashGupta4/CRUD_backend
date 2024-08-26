import { connection, userModel } from "../postgres/postgres.js"

export const getAllEmp=async(req,res)=>{
    try{
        const users=await userModel.findAll();
        if(users.length==0){
            return res.status(200).json({"error": "users not found"});
        }
        return res.status(200).json({users});
    }catch(error){
        console.log(error);
        return res.status(200).json({"error": "Internal Server Error"});

    }

}

export const addEmp=async(req,res)=>{
    const {name,email,designation,empid}=req.body;
    if (!name || !email || !designation || !empid) {
        return res.status(400).json({ "error": "All fields are required" });
    }
    try{
        const emp=await userModel.findOne({where:{empid:empid}});
        if(emp==null){
            await userModel.create(req.body);
            return res.status(201).json({message:"User Added successfully"});
        }
        return res.status(200).json({message:"already found"});
        

    }catch(error){
        console.log(error);
        return res.status(500).json({"error": "Internal Server Error"});
    }
}

export const updateEmp=async(req,res)=>{
    let empId=req.params.empid;
    try{
        const emp=await userModel.update(req.body,{where:{empId}});
        if(emp[0]==0){
            return res.status(404).json({message: "No record found"});
        }
        else{
            return res.status(200).json({message: "updated successfully"});
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({"error": "Internal Server Error"});
    }
}


export const deleteEmp=async(req,res)=>{
    let empid=req.params.empid;
    try{
        const emp=await userModel.destroy({where:{empid}});
        if(emp==0){
            return res.status(404).json({message: "No record found"});
        }else{
            return res.status(200).json({message:"deleted successfully"});
        }

    }catch(error){
        console.log(error);
        return res.status(500).json({"error": "Internal Server Error"});
    }
}