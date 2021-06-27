import { Router } from "express";
import { SettingsController } from "./controllers/Settings.controller";
import { UsersController } from "./controllers/Users.controller";

const settingController = new SettingsController();
const userController = new UsersController();

const router = Router();

// settings routes
router.post("/settings", settingController.create);

// users routes
router.post("/users", userController.create);

export { router };