/* eslint-disable no-console*/ 

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import { red, green } from 'chalk';
import faker from 'faker';

jsf.extend("faker", function() {
  return faker
})

const outputFile = './src/api/db.json';

jsf.resolve(schema).then(function(result) {
    fs.writeFile(outputFile, JSON.stringify(result, null, 2), function(err){
        if (err) {
            console.log(red(err));
        } else {
            console.log(green(`Mock Data Generated Here: ${outputFile}`));
        }
    });
});
