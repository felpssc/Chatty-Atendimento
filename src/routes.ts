import { Router } from "express";
import { MessagesController } from "./controllers/Messages.controller";
import { SettingsController } from "./controllers/Settings.controller";
import { UsersController } from "./controllers/Users.controller";

const settingController = new SettingsController();
const userController = new UsersController();
const messageController = new MessagesController();

const router = Router();

// settings routes
router.post("/settings", settingController.create);
router.get("/settings/:username", settingController.findByUsername); 
router.put("/settings/:username", settingController.update); 

// users routes
router.post("/users", userController.create);

// messages routes
router.post("/messages", messageController.create);
router.get("/messages/:user_id", messageController.showByUser);

export { router };