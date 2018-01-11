const fs = require('mz/fs')
const { console } = global

fs.readFile(`${__dirname}/joe.txt`, 'ascii')
  .then(joe => console.log(joe))
  .catch(err => console.log(err))

// http://www.glassgiant.com/ascii/ seems like a decent place for smallish ascii
// wow what a mess - found this after I'd already figured it out :( https://stackoverflow.com/questions/6456864/why-does-node-js-fs-readfile-return-a-buffer-instead-of-string
// OK I GOT IT I think it's because I was doing the readFile without any encoding.. adding utf8 meant i didnt need toString
// Object.keys(fish) = array with ~ 30000 indexes... Why is my text file this weird object??
// fish instanceof Object = true. that's weird
// Array.isArray(fish) = false. fish is not an array... but I did a forEach on it??
// here i am playing with buffers but all it wanted was .toString()....
// mz is a modernize library that offers nicer versions of existing nodejs things like filesystem

// const fush = Buffer.allocUnsafe(fish.length)
// const f = fush.toString('binary')
