# ai-robots-txt

This repository makes [ai.robots.txt](https://github.com/ai-robots-txt/ai.robots.txt) downloadable via npm. It currently supports JSON file.

## Usage

```bash
npm install @robot-inventor/ai-robots-txt
```

```ts
import { AiRobotsText } from "@robot-inventor/ai-robots-txt";

const respectfulBots = Object.entries(AiRobotsText).filter(([, bot]) => bot.respect === "Yes");

for (const [userAgent, bot] of respectfulBots) {
    console.log(`${userAgent} -> ${bot.operator}`);
}
```

## License

The script is provided under the [MIT License](./LICENSE), and files obtained from the ai.robots.txt project are subject to [that project's MIT License](https://github.com/ai-robots-txt/ai.robots.txt/blob/main/LICENSE).

Below is the ai.robots.txt license text.

```md
MIT License

Copyright (c) 2024 ai.robots.txt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
