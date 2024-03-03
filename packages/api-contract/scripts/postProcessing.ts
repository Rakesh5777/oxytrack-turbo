import path from "path";
import fs from "fs/promises"; // Use the promise-based version of the fs module

/**
 * Updates TypeScript types from `string` to `Date` for properties annotated with `@format date-time`.
 */
async function updateDateTypesInGeneratedTypescript() {
  try {
    const filePath = path.join(__dirname, "./../dist/api.ts");

    // Read the TypeScript file content
    let data = await fs.readFile(filePath, "utf8");

    // Combined regular expression to match properties annotated with "@format date-time"
    const regex = /\/\*\*\n\s+\* Format: date-time\n\s+\* @description [^\n]+\n\s+\*\/\n\s+(\w+)(?:\s*\?)?\s*:\s*string;/g;

    // Replace matched string types with Date
    const result = data.replace(regex, (match, p1) => {
      return match.replace(": string;", ": Date;");
    });

    // Write the modified content back to the TypeScript file
    await fs.writeFile(filePath, result, "utf8");
    console.log("TypeScript file has been updated successfully.");
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

// Execute the function
updateDateTypesInGeneratedTypescript();
