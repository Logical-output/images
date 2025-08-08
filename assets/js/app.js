import { jpgModule, pngModule, webpModule } from "./data/images.js";
import { pathModule, svgModule } from "./data/svg.js";
import { jpg } from "./components/jpg.js";
import { png } from "./components/png.js";
import { webp } from "./components/webp.js";
import { svg } from "./components/svg.js";

// jpg
jpg(jpgModule);

// png
png(pngModule);

// webp
webp(webpModule);

// svg
svg(svgModule, pathModule);