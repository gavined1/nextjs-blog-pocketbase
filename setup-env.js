#!/usr/bin/env node

/**
 * Environment Setup Script
 * Helps users create their .env.local file from the template
 */

const fs = require("fs");
const path = require("path");

console.log("🔐 Setting up environment variables...\n");

// Check if .env.local already exists
const envLocalPath = path.join(process.cwd(), ".env.local");
const envExamplePath = path.join(process.cwd(), "env.example");

if (fs.existsSync(envLocalPath)) {
  console.log("⚠️  .env.local already exists!");
  console.log(
    "   If you want to recreate it, delete the existing file first.\n"
  );
  process.exit(0);
}

// Check if env.example exists
if (!fs.existsSync(envExamplePath)) {
  console.log("❌ env.example file not found!");
  console.log("   Please make sure env.example exists in your project root.\n");
  process.exit(1);
}

try {
  // Copy env.example to .env.local
  fs.copyFileSync(envExamplePath, envLocalPath);

  console.log("✅ Successfully created .env.local from env.example");
  console.log("📝 Next steps:");
  console.log("   1. Edit .env.local with your actual values");
  console.log("   2. Update POCKETBASE_URL if needed");
  console.log("   3. Set your NEXT_PUBLIC_SITE_URL");
  console.log("   4. Add your contact information");
  console.log("   5. Configure analytics (optional)");
  console.log('\n🚀 Run "pnpm run dev" to start development!');
} catch (error) {
  console.log("❌ Error creating .env.local:", error.message);
  process.exit(1);
}
