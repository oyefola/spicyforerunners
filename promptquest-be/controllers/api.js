import { Router } from "express";
const router = Router();
import { getLevelInfo, openLevel, getLevels } from "../models/LevelModel.js";
import { getLoadingScreenData } from "../controllers/GeneralAction.js";
// Get level info
router.get("/levels", async (req, res) => {
    try {
        const levels = await getLevels(); // Ensure getLevels() returns the data you want.
        res.json(levels); // Send the levels data as a JSON response.
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" }); // Send an error response if something goes wrong.
    }
});

router.get("/loadingscreen", (req, res) => {
    try {
       
        const result = getLoadingScreenData();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

// Open level
router.put("/levels/:id/open", (req, res) => {
    try {
        openLevel(req.params.id);
        res.json({ message: "Level opened successfully" });
    } catch (err) {
        console.log(err);
    }
});
// Get level info
router.get("/levels/:id", async (req, res) => {
    try {
        const level = await LevelModel.getLevelInfo(req.params.id);
        res.json(level);
    } catch (err) {
        console.log(err);
    }
});

// Score response
router.post("/score", async (req, res) => {
    try {
        const { numberOfAddressedItems, checklist, level_id } = req.body;
        const result = LevelModel.scoreResponse(numberOfAddressedItems, checklist, level_id);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

export default router;
