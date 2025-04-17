import { terser } from "rollup-plugin-terser";

export default {
    input: "index.js",
    output: {
        file: "dist/pseudocrypt.min.js",
        format: "umd",
        name: "PseudoCrypt",
        exports: "named",
        sourcemap: true
    },
    plugins: [terser()]
};
