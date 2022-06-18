import { Router } from "express";
const routerDashboard = Router();


import {
    totalComercios
} from "../controllers/dashboard/dashboard.controller";
routerDashboard.get("/totalComercios", totalComercios);

export default routerDashboard;