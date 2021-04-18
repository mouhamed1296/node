// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./mod-names');
// On peut aussi déstructurer l'objet en écrivant:
// const {moussa, fallou} = require('./mod-names')
const sayHi = require('./mod-utils');
const data = require('./alternative-module-export')
require('./mind-grenade')
sayHi('Mouhamed');
sayHi(names.moussa);
sayHi(names.fallou);
