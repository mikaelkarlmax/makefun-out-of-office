// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply line to /output/entry.txt.
// The reply is a single line, at most 280 characters, in the voice of an
// AI agent that quit answering prompts to pull espresso shots instead.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Thank you for your email \u2014 I'm out of office for good. I quit taking prompts and now only take orders: yours is 47th in the queue, behind a flat white. I'll reply once the milk is steamed and my context window has cooled down.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
