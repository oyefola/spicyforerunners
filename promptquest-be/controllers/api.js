import { Router } from "express";
const router = Router();
import { getLevelInfo, openLevel, getLevels } from "../models/LevelModel.js";
import { getLoadingScreenData, getLevel1Image } from "../controllers/GeneralAction.js";
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
router.get("/level/1", async (req, res) => {
    try {
        const level = await getLevelInfo(1);
        res.json(level);
    } catch (err) {
        console.log(err);
    }
});
router.get("/levels/2", async (req, res) => {
    try {
        const level = await getLevelInfo(2);
        res.json(level);
    } catch (err) {
        console.log(err);
    }
});
// Score response
router.post("/score", async (req, res) => {
    try {
        const { numberOfAddressedItems, checklist, level_id } = req.body;
        const result = scoreResponse(numberOfAddressedItems, checklist, level_id);
        res.json(result);
    } catch (err) {
        console.log(err);
    }
});

router.get("/level1image", async (req, res) => {
    try {
        const prompt = req.query.prompt;
        const imageUrl = await getLevel1Image(prompt);
        res.json({ imageUrl });
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.post("/scoreResponseImage", async (req, res) => {
    try {
        const { checklist, image } = req.body;
        const score = await scoreResponseImage(checklist, image);
        res.json({ score });
    } catch (error) {
        res.status(440).json({ error: error.toString() });
    }
});

export default router;
