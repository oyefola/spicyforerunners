const fs = require("fs");
const path = require("path");

// Path to the levels JSON file
const levelsFilePath = path.join(__dirname, "../../data/levels.json");

// Helper function to read level data from JSON
function readLevels() {
    const data = fs.readFileSync(levelsFilePath);
    return JSON.parse(data).levels;
}

// Get level by ID
function getLevelById(levelId) {
    const levels = readLevels();
    return levels.find((level) => level.level_id === levelId);
}

function getLevels() {
    const levels = readLevels();

    return levels.map((level) => ({
        level_id: level.level_id,
        desc_image: level.image_url,
        short_desc: level.short_desc,
        open: level.open,
    }));
}
function getLoadingScreenData() {
    const loadingScreenList = getLoadingScreenData();
    const randomIndex = Math.floor(Math.random() * levels.length);
    return loadingScreenList[randomIndex];
}
function getLevelInfo(level_id) {
    const levels = readLevels();
    const level = levels[level_id];
    return {
        avatarImage: level.avatarImage,
        problemDesc: level.problemDesc,
        yourJob: level.yourJob,
        topTips: level.hints,
    };
}


module.exports = {
    getLevelById,
};
