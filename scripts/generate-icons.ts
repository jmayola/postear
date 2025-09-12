// scripts/generate-icons.js
import { favicons } from "favicons";
import fs from "fs";
import path from "path";

const source = "logo.png";
const outputDir = "public/icons";

const configuration = {
  path: "/icons", 
  appName: "Postear",
  appShortName: "Postear",
  appDescription: "Notas y temporizadores",
  developerName: "Julian Mayola",
  developerURL: "https://mayola.net.ar",
  background: "#ffffff",
  theme_color: "#ff66cc",
  display: "standalone",
  orientation: "portrait",
};

favicons(source, configuration)
  .then(response => {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    response.images.forEach(image => {
      fs.writeFileSync(path.join(outputDir, image.name), image.contents);
    });

    response.files.forEach(file => {
      fs.writeFileSync(path.join(outputDir, file.name), file.contents);
    });
    console.log(response.html.join("\n"));
  })
  .catch(console.error);
