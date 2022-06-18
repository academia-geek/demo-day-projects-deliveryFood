import { Router } from "express";
const routerDashboard = Router();


import {
    totalComercios,
    totalPedidosProceso,
    totalPedidosEntregados
} from "../controllers/dashboard/dashboard.controller";
routerDashboard.get("/totalComercios", totalComercios);
routerDashboard.get("/totalPedidosProceso", totalPedidosProceso);
routerDashboard.get("/totalPedidosEntregados", totalPedidosEntregados);

export default routerDashboard;