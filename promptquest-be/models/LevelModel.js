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

module.exports = {
    getLevelById,
};
