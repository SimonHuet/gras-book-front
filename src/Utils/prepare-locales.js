const availableLocales = [ 'en', 'fr' ];
const glob = require('glob');
const minifyJson = require('minify-json');
const jsonConcat = require('json-concat');
const fs = require('fs');

module.exports = dir => 
    availableLocales.map( locale => 
        // eslint-disable-next-line consistent-return
        glob(`./src/**/locales/${locale}.json`, {}, (error, globFiles) => {
            // eslint-disable-next-line no-console
            if(error) return console.log(error);
            
            if(globFiles.length) {
                globFiles.map(file => {
                    const namespace = file.match(/[A-z]{1}[A-z]*(?=[/]locales)/g)[0];
                    const dirPath   = `./${dir}/locales/${namespace}`;
                    const output    = `${dirPath}/${locale}.json`;
                    
                    if(!fs.existsSync(dirPath)) { 
                        fs.mkdirSync(dirPath, {recursive: true});
                    }

                    return jsonConcat({ src: file , dest: output}, json => minifyJson(output));
                });
            }
        })
    );
