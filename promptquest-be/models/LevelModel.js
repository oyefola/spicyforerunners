import { client } from "../openaiclient.js";
import path from "path";
import fs from "fs";
import { title } from "process";
// Path to the levels JSON file
const levelsFilePath = path.join(process.cwd(), "./data/levels.json");
// Helper function to read level data from JSON
function readLevels() {
    const data = fs.readFileSync(levelsFilePath);
    return JSON.parse(data).levels;
}

export function getLevels() {
    const levels = readLevels();

    return levels.map((level) => ({
        level_id: level.level_id,
        title: level.title,
        desc_image: level.image_url,
        short_desc: level.short_desc,
        open: level.open,
    }));
}
export async function getHints(level_desc) {
    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: [
                    {
                        type: "text",
                        text: `
                You are a helpful assistant that helps kids aged 8-12 learn prompt engineering,given a problem statement,generate three very short points(four words max) that the kid should consider when they are crafting thier prompt in a pure json list format. remember to use kid friendly language.
              `,
                    },
                ],
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `problem statement: ${level_desc}`,
                    },
                ],
            },
        ],
    });
    return response.completions[0].content;
}
export async function getLevelInfo(level_id) {
    const levels = readLevels();
    const level = levels[level_id];

    return {
        avatarImage: level.avatarImage,
        problemDesc: level.problemDesc,
        yourJob: level.yourJob,
        topTips: await getHints(level.problemDesc),
    };
}

export function openLevel(level_id) {
    const levels = readLevels();
    levels[level_id].open = true;
    fs.writeFileSync(levelsFilePath, JSON.stringify({ levels }));
}

export function scoreResponse(numberOfAddressedItems, checklist, level_id) {
    updateUserGems("playerOne", 10 * numberOfAddressedItems);
    if (numberOfAddressedItems == checklist.length - 2) {
        openLevel(level_id + 1);
    }
    return {
        passed: numberOfAddressedItems == checklist.length - 2,
        gems: 10 * numberOfAddressedItems,
    };
}
