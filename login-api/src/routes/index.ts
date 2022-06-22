import { Router } from "express";
import authRouter from "./auth";
import guildRouter from "./guild";

const router = Router();

router.use("/auth", authRouter);
router.use("/guild", guildRouter);

export default router;