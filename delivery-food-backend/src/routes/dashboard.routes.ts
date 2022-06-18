import { Router } from "express";
const routerDashboard = Router();


import {
    totalComercios,
    totalPedidosProceso
} from "../controllers/dashboard/dashboard.controller";
routerDashboard.get("/totalComercios", totalComercios);
routerDashboard.get("/totalPedidosProceso", totalPedidosProceso);

export default routerDashboard;