import {resolve,dirname} from 'path'
import dts from 'vite-plugin-dts'
import { fileURLToPath } from 'url';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const index = resolve(__dirname, 'index.ts')

export default {
  server: {
    port: 3001
  },
  build: {
    lib: {
      entry: index,
      name: 'xpell',

      //exclude public folder
      exclude: ['public'],
      // the proper extensions will be added
      fileName: format => `xpell.${format}.js`
    },
    target: 'modules',
    minify: true,
    // outDir:"dist",
    // root: "",
    // base:"",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: ["three","cannon-es","three-to-cannon"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          three: "THREE",
          "cannon-es": "CANNON",
          "three-to-cannon": "THREE_TO_CANNON",
          
        }
      }
    }
  },
  plugins: [dts({
    outputDir: ['dist'],
    // include: ['index.ts',"xpell-core"],
    exclude: ['src/ignore','public'],
    // aliasesExclude: [/^@components/],
    staticImport: true,
    skipDiagnostics: false,
    logDiagnostics: true,
    rollupTypes: true,
    insertTypesEntry: true
  })],
};


