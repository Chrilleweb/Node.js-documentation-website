module.exports = {
  content: [
    "./src/views/*.{js,html,ejs}",
    "./src/public/**/*.{js,html,ejs}",
    "./src/components/**/*.{js,html,ejs}",
  ],
  theme: {
    extend: {
      colors: {
        codeVariable: "#66D9EF",
        codeString: "#99CC7D",
        codeBG: "#2C3437",
        codeText: "#E9EDF0",
      },
    },
  },
  plugins: [],
};


