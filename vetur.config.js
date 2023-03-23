module.exports = {
    projects: [
      {
        root: './src/frontend', // root of your vue project (should contain package.json)
        package: './package.json', // Relative to root property, don't change this.
        tsconfig: '../backend/tsconfig.json',  // Relative to root property, don't change this.
      }
    ]
  }