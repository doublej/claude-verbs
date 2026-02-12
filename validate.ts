import Ajv from "ajv";
import { readFileSync, readdirSync } from "node:fs";
import { basename } from "node:path";

const schema = JSON.parse(readFileSync("schema.json", "utf-8"));
const ajv = new Ajv();
const validate = ajv.compile(schema);
let errors = 0;

const skip = new Set(["schema.json", "_template.json", "index.json"]);

for (const entry of readdirSync(".")) {
	if (entry.startsWith("_")) continue;
	if (!entry.endsWith(".json")) continue;
	if (skip.has(entry)) continue;
	const data = JSON.parse(readFileSync(entry, "utf-8"));
	if (!validate(data)) {
		console.error("FAIL:", entry, validate.errors);
		errors++;
	} else if (data.name !== basename(entry, ".json")) {
		console.error(
			`FAIL: ${entry} — name "${data.name}" does not match filename`,
		);
		errors++;
	} else {
		console.log("OK:", entry);
	}
}

if (errors > 0) {
	console.error(`\n${errors} error(s)`);
	process.exit(1);
}
console.log("\nAll sets valid");
