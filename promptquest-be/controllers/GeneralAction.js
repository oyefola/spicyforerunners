import { response, text } from "express";
import { client } from "../openaiclient.js";
import path from "path";

import fs from "fs";
function readLoadingScreen() {
    const data = fs.readFileSync("./data/loading_screen.json");
    return JSON.parse(data);
}
export function getLoadingScreenData() {
    const loadingScreenList = readLoadingScreen();
    const randomIndex = Math.floor(Math.random() * loadingScreenList.length);
    return loadingScreenList[randomIndex];
}

export async function getLevel1Image(prompt) {
    const image = await client.images.generate({ prompt });
    const image_url = image.data[0].url;
    return image_url;
}

// get level2 info
async function getLevel2Info(prompt) {
    const response1 = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: [
                    {
                        type: "text",
                        text: `
                    You are a helpful solutions engineer,given a prompt,generate the output it in 30 words max(don't include any brands)
                    `,
                    },
                ],
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: "red vaccum that can vaccum walls",
                    },
                ],
            },
        ],
        n: 2,
    });
    return [response1.completions[0].content, response1.completions[1].content];
}

// scoreresponsetext
async function scoreResponseText(checklist, text) {
    const response1 = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content: [
                    {
                        type: "text",
                        text: `
                    You are a prompt engineering assessor, and given a checklist and piece of text, output how many items on the checklist were adressed
                    `,
                    },
                ],
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `checklist: ${checklist}, text :${text}`,
                    },
                ],
            },
        ],
    });
    return response.completions[0].content;
}

// score response image
export async function scoreResponseImage(checklist, image) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `You are a prompt engineering assessor, and an image, output how many items on this checklist:"${checklist}" were adressed`,
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: image,
                        },
                    },
                ],
            },
        ],
    });
    return response.completions[0].message.content;
}

// get solution impact
async function getSoluionImpact(problem, solution) {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            {
                role: "system",
                content: [
                    {
                        type: "text",
                        text: `You are a story teller, given a problem explain the outcome of the solution `,
                    },
                ],
            },
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `problem: ${problem}, solution: ${solution}`,
                    },
                ],
            },
        ],
    });
    return response.completions[0].content;
}
