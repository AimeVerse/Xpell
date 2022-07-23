export default {
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    minify: true,
    outDir:"dist",
    root: "",
    base:"",
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
};


