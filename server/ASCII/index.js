const fs = require('mz/fs')

fs.readFile(`${__dirname}/fish.txt`)
  .then(fish => global.console.log(fish))
  .catch(err => global.console.log(err))

// mz is a modernize library that offers nicer versions of existing nodejs things like filesystem
