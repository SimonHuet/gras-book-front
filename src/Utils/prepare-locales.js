const availableLocales = [ 'en', 'fr' ];
const glob = require('glob');
const minifyJson = require('minify-json');
const jsonConcat = require('json-concat');
const fs = require('fs');

module.exports = dir => 
    availableLocales.map( locale => 
        glob(`./src/**/locales/${locale}.json`, {}, (error, globFiles) => {
            if(error) console.log(error);
            
            if(globFiles.length) {
                globFiles.map(file => {
                    const namespace = file.match(/[A-z]{1}[A-z]*(?=[/]locales)/g)[0];
                    const dirPath   = `./${dir}/locales/${namespace}`;
                    const output    = `${dirPath}/${locale}.json`;

                    if(!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);

                    return jsonConcat({ src: file , dest: output}, json => minifyJson(output))
                })
            }

        })
    )
