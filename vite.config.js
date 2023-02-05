import {resolve} from 'path'
import dts from 'vite-plugin-dts'

const index = resolve(__dirname, 'index.ts')

export default {
  server: {
    port: 3000
  },
  build: {
    lib: {
      entry: index,
      name: 'xpell',
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
      external: ["three","cannon-es","three-to-cannon","nipplejs"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  },
  plugins: [dts({
    outputDir: ['dist', 'types'],
    include: ['index.ts'],
    exclude: ['src/ignore','public'],
    // aliasesExclude: [/^@components/],
    staticImport: true,
    skipDiagnostics: false,
    logDiagnostics: true,
    rollupTypes: true,
    insertTypesEntry: true
  })],
};


