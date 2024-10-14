import { OpenAI } from "openai";

export const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
async function getHints(level_desc) {
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
    let output = response.choices[0].message.content;
    output = output.replace(/```json|\n|```/g, "");

    const jsonArray = JSON.parse(output);

    return jsonArray;
}
getHints("The prompt is to write a story about a dragon who is afraid of fire.");
