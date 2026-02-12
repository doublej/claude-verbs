import Ajv from "ajv";
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

const SETS_DIR = "sets";
const schema = JSON.parse(readFileSync(join(SETS_DIR, "schema.json"), "utf-8"));
const ajv = new Ajv();
const validate = ajv.compile(schema);
let errors = 0;

const skip = new Set(["schema.json", "_template.json", "index.json"]);

for (const entry of readdirSync(SETS_DIR)) {
	if (entry.startsWith("_")) continue;
	if (!entry.endsWith(".json")) continue;
	if (skip.has(entry)) continue;
	const filePath = join(SETS_DIR, entry);
	const data = JSON.parse(readFileSync(filePath, "utf-8"));
	if (!validate(data)) {
		console.error("FAIL:", filePath, validate.errors);
		errors++;
	} else if (data.name !== basename(entry, ".json")) {
		console.error(
			`FAIL: ${filePath} — name "${data.name}" does not match filename`,
		);
		errors++;
	} else {
		const verbs: string[] = data.config?.spinnerVerbs?.verbs ?? [];
		const dupes = verbs.filter((v: string, i: number) => verbs.indexOf(v) !== i);
		if (verbs.length < 15 || verbs.length > 100) {
			console.error(`FAIL: ${filePath} — expected 15–100 verbs, got ${verbs.length}`);
			errors++;
		} else if (dupes.length > 0) {
			console.error(`FAIL: ${filePath} — duplicate verbs: ${dupes.join(", ")}`);
			errors++;
		} else {
			console.log("OK:", filePath);
		}
	}
}

if (errors > 0) {
	console.error(`\n${errors} error(s)`);
	process.exit(1);
}
console.log("\nAll sets valid");
