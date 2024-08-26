import express from "express";
import { getAllEmp, addEmp, updateEmp} from "../controller/userController.js";
const router=express.Router();

router.get("/getAll",getAllEmp);
router.post("/addEmp",addEmp);
router.put("/emp/:empid",updateEmp);

export default router;