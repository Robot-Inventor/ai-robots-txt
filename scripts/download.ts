import fs from "fs/promises";

const JSON_URL = "https://raw.githubusercontent.com/ai-robots-txt/ai.robots.txt/refs/heads/main/robots.json";
const OUTPUT_PATH = "./src/robots.json";

const main = async (): Promise<void> => {
    try {
        const response = await fetch(JSON_URL);
        if (!response.ok) throw new Error(`Failed to fetch JSON: ${response.statusText}`);

        const data = await response.text();
        await fs.writeFile(OUTPUT_PATH, data.trim() + "\n");
        // eslint-disable-next-line no-console
        console.log(`Successfully downloaded and saved JSON to ${OUTPUT_PATH}`);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("Error downloading JSON:", error);
    }
};

await main();
