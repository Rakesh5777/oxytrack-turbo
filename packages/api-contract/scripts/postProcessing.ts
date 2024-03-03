import path from "path";
import fs from "fs";

// Specify the path to the TypeScript file generated by openapi-typescript
const filePath = path.join(__dirname, "./../dist/api.ts");

// Read the content of the TypeScript file
fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Regular expression to find properties with "@format date-time" and replace `string` type with `Date`
  const regex = /\/\*\*\n\s+\* Format: date-time\n\s+\* @description [^\n]+\n\s+\*\/\n\s+(\w+)?: string;/g;

  // Replace the matched string types with Date
  const result = data.replace(regex, function (match, p1) {
    return match.replace(": string;", ": Date;");
  });

  // Write the modified content back to the TypeScript file
  fs.writeFile(filePath, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
