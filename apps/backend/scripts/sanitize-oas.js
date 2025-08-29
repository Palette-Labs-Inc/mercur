#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');

function main() {
  const [,, inPath, outPath] = process.argv;
  if (!inPath || !outPath) {
    console.error('Usage: node scripts/sanitize-oas.js <input.json> <output.json>');
    process.exit(1);
  }
  const raw = fs.readFileSync(inPath, 'utf8');
  const oas = JSON.parse(raw);

  if (Array.isArray(oas.tags)) {
    for (const tag of oas.tags) {
      if (tag && tag['x-associatedSchema']) delete tag['x-associatedSchema'];
    }
  }

  // Ensure all $refs schemas referenced in paths/parameters/requestBodies stay
  // untouched; we only remove tag metadata that can point to pruned schemas.

  fs.writeFileSync(outPath, JSON.stringify(oas, null, 2));
}

main();


