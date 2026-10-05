const fs = require("fs");
const path = require("path");

const files = [
  path.join(process.cwd(), "node_modules", "lucide-react", "dist", "cjs", "lucide-react.js"),
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, "utf8");
    if (content.includes("const LucideContext = react.createContext({});")) {
      content = content.replace(
        "const LucideContext = react.createContext({});",
        "const LucideContext = (typeof react.createContext === 'function' ? react.createContext({}) : { Provider: ({ children }) => children });"
      );
      fs.writeFileSync(file, content);
      console.log("Successfully patched:", file);
    } else {
      console.log("Pattern not found or already patched in:", file);
    }
  }
}
