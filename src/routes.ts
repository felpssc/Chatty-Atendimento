import { Router } from "express";
import { SettingsController } from "./controllers/Settings.controller";

const settingController = new SettingsController;

const router = Router();

router.post("/settings", settingController.create);

export { router };