import Ajv from "ajv";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { basename, join } from "node:path";

const schema = JSON.parse(readFileSync("schema.json", "utf-8"));
const ajv = new Ajv();
const validate = ajv.compile(schema);
let errors = 0;

function walk(dir: string): void {
	for (const entry of readdirSync(dir)) {
		if (entry.startsWith("_")) continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			walk(full);
			continue;
		}
		if (!entry.endsWith(".json")) continue;
		const data = JSON.parse(readFileSync(full, "utf-8"));
		if (!validate(data)) {
			console.error("FAIL:", full, validate.errors);
			errors++;
		} else if (data.name !== basename(entry, ".json")) {
			console.error(
				`FAIL: ${full} — name "${data.name}" does not match filename`,
			);
			errors++;
		} else {
			console.log("OK:", full);
		}
	}
}

for (const dir of readdirSync(".")) {
	if (dir.startsWith("_") || dir.startsWith(".")) continue;
	if (statSync(dir).isDirectory()) walk(dir);
}

if (errors > 0) {
	console.error(`\n${errors} error(s)`);
	process.exit(1);
}
console.log("\nAll sets valid");
