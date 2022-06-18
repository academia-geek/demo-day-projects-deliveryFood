import { Router } from "express";
const routerDashboard = Router();


import {
    totalComercios,
    totalPedidosProceso,
    totalPedidosEntregados,
    totalDomiciliariosActivos,
    ordenesEntregadas
} from "../controllers/dashboard/dashboard.controller";
routerDashboard.get("/totalComercios", totalComercios);
routerDashboard.get("/totalPedidosProceso", totalPedidosProceso);
routerDashboard.get("/totalPedidosEntregados", totalPedidosEntregados);
routerDashboard.get("/totalDomiciliariosActivos", totalDomiciliariosActivos);
routerDashboard.get("/ordenesEntregadas", ordenesEntregadas);

export default routerDashboard;