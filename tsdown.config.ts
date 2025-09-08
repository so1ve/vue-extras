import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  tsconfig: "../../tsconfig.json",
  clean: true,
  dts: true,
});
