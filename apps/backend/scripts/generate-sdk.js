/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/*
  Programmatic SDK generation to avoid shelling out to a potentially conflicting `openapi` CLI.
  - Generates TypeScript SDK into ../../packages/marketplace-sdk/src
  - Uses fetch client and union types
*/

const fs = require('fs');
const path = require('path');
const { generate } = require('openapi-typescript-codegen');

async function main() {
  const backendRoot = process.cwd();
  const inputPath = path.resolve(backendRoot, './oas/store.pruned.sanitized.oas.json');
  const sdkOutDir = path.resolve(backendRoot, '../../packages/marketplace-sdk/src');

  // Clean previous generated sources
  try {
    fs.rmSync(sdkOutDir, { recursive: true, force: true });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    // ignore
  }

  if (!fs.existsSync(inputPath)) {
    console.error(`Input OAS not found at: ${inputPath}`);
    process.exit(1);
  }

  console.log('🔧 Generating Marketplace SDK from OAS...');

  await generate({
    input: inputPath,
    output: sdkOutDir,
    httpClient: 'fetch',
    useUnionTypes: true,
    exportCore: true,
    exportServices: true,
    exportModels: true,
    exportSchemas: false,
  });

  console.log(`✅ SDK generated at ${sdkOutDir}`);
}

main().catch((err) => {
  console.error('Failed to generate SDK:', err);
  process.exit(1);
});


