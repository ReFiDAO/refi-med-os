#!/usr/bin/env node

/**
 * validate-schemas.mjs — Sanity-check .well-known/ EIP-4824 schemas
 *
 * Confirms every .json file under .well-known/ parses, and that the core
 * dao.json includes the minimum identity fields. Exits non-zero on any failure.
 */

import { readdirSync, readFileSync, existsSync } from "fs";
import { join, resolve } from "path";

const rootDir = resolve(process.argv[2] || ".");
const wellKnown = join(rootDir, ".well-known");

let passed = 0;
let failed = 0;

function ok(msg) {
  console.log(`  ✓ ${msg}`);
  passed++;
}
function fail(msg) {
  console.log(`  ✗ ${msg}`);
  failed++;
}

if (!existsSync(wellKnown)) {
  console.log("✗ .well-known/ directory missing — run `npm run generate:schemas` first");
  process.exit(1);
}

const jsonFiles = readdirSync(wellKnown).filter((f) => f.endsWith(".json"));
console.log(`\nValidating ${jsonFiles.length} schema file(s) in .well-known/`);

for (const file of jsonFiles) {
  const fullPath = join(wellKnown, file);
  try {
    const parsed = JSON.parse(readFileSync(fullPath, "utf-8"));
    if (typeof parsed !== "object" || parsed === null) {
      fail(`${file} parses but is not an object`);
      continue;
    }
    ok(`${file} is valid JSON`);

    if (file === "dao.json") {
      const required = ["@context", "type", "name"];
      for (const key of required) {
        if (parsed[key] === undefined) {
          fail(`dao.json missing required field: ${key}`);
        } else {
          ok(`dao.json has ${key}`);
        }
      }
    }
  } catch (err) {
    fail(`${file} failed to parse: ${err.message}`);
  }
}

console.log("\n" + "=".repeat(50));
console.log(`Results: ${passed} passed, ${failed} failed`);

if (failed > 0) {
  console.log("\n✗ Schema validation failed");
  process.exit(1);
}
console.log("\n✓ All schemas validate");
