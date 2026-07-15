import gulp from "gulp";
import uswds from "@uswds/compile";

/*
----------------------------------------
PATHS
----------------------------------------
- All paths are relative to the
  project root
- Don't use a trailing `/` for path
  names
----------------------------------------
*/

uswds.settings.version = 3;

// Project Sass source directory
uswds.paths.dist.theme = "./src/_styles";

// Images destination
uswds.paths.dist.img = "./src/assets/img";

// Fonts destination
uswds.paths.dist.fonts = "./src/assets/fonts";

// Javascript destination
uswds.paths.dist.js = "./src/assets/js";

// Compiled CSS destination
uswds.paths.dist.css = "./_site/assets/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

export const compileIcons = uswds.compileIcons;
export const copyFonts = uswds.copyFonts;
export const copyImages = uswds.copyImages;
export const copyJS = uswds.copyJS;
export const copyAssets = uswds.copyAssets;
export const updateUswds = uswds.updateUswds;
export const buildSass = uswds.compileSass;
export const watchSass = uswds.watch;
export default uswds.watch;