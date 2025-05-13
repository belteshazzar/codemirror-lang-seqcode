

import {lezer} from "@lezer/generator/rollup"

export default {
  input: "src/index.js",
  output: 
    {dir: "./dist", format: "es",importAttributesKey: "assert"},
  plugins: [lezer()]
}
