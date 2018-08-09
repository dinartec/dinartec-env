require('babel-register')(); //transpile before run

require.extensions['.css'] = function (){}; // ignore css files
