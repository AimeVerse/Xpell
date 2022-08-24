import {resolve} from 'path'

export default {
  server: {
    port: 3000
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'XLib.ts'),
      name: 'xpell',
      // the proper extensions will be added
      fileName: format => `xpell.${format}.js`
    },
    target: 'esnext',
    minify: true,
    outDir:"dist",
    root: "",
    base:"",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [/public/],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      }
    }
  }
};


