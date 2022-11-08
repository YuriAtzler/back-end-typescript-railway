import { Router } from "express";
import UserService from "../controllers/UserController";
import QuadraService from "../controllers/QuadraController";
import ReservaService from "../controllers/ReservaController";

const routers = Router();

routers.use("/users", UserService);
routers.use("/quadras", QuadraService);
routers.use("/reservas", ReservaService);

export default routers;
