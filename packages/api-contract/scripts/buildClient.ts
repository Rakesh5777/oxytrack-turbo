import { exec } from "child_process";

// Function to execute shell commands with proper typing
function executeCommand(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

// Async function to check for changes and run build commands
async function buildIfChanged(): Promise<void> {
  try {
    // Check for changes in /src directory
    const changes = await executeCommand("git status --porcelain ./src");
    if (changes.trim()) {
      console.log("Changes detected in packages/api-contract/src. Running build-api-contract...");
      // List of build commands to run
      const commands = ["pnpm run build-api-contract"];
      // Execute each build command sequentially
      for (const command of commands) {
        console.log(`Executing: ${command}`);
        const output = await executeCommand(command);
        console.log(output);
      }
      console.log("Build process completed.");
    } else {
      console.log("No changes in packages/api-contract/src. Skipping build-api-contract...");
    }
  } catch (error) {
    console.error("Error during build process:", error);
  }
}

// Run the build if changes are detected
buildIfChanged();
