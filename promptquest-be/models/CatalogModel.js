const fs = require("fs");
const path = require("path");

// Path to the catalog JSON file
const catalogFilePath = path.join(__dirname, "../../data/catalog.json");

// Helper function to read catalog data from JSON
function readCatalog() {
    const data = fs.readFileSync(catalogFilePath);
    return JSON.parse(data).catalog;
}

// Get all available catalog items
function getAllCatalogItems() {
    return readCatalog();
}

// Get catalog item by ID
function getCatalogItemById(itemId) {
    const catalog = readCatalog();
    return catalog.find((item) => item.item_id === itemId);
}

module.exports = {
    getAllCatalogItems,
    getCatalogItemById,
};
