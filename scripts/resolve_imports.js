const fs = require('fs-extra');
const path = require('path');

const jsdir = path.join(__dirname, '..', 'public', 'js');

const processDir = (dir) => {
    fs.readdirSync(dir).forEach((file) => {
        const filename = file;
        
        file = path.join(dir, file);
        fileStats = fs.lstatSync(file);

        if (fileStats.isFile() && path.extname(file) == '.js')
        {
            // import { path } from './Tauri';
            let content = fs.readFileSync(file, { encoding: 'utf8' });
            let fileImport, imports = [];
    
            do
            {
                fileImport = /import .+ from (["']{1}.+(?<!\.js)["']{1})/.exec(content);
    
                if (fileImport)
                {
                    const newFileImport = fileImport[1].substr(0, fileImport[1].length - 1) + '.js' + fileImport[1][0];
    
                    content = content.replaceAll(fileImport[0], fileImport[0].replaceAll(fileImport[1], newFileImport));
    
                    imports.push(`> import [${fileImport[1]}] -> [${newFileImport}]`);
                }
            }
    
            while (fileImport);
    
            fs.writeFileSync(file, content);
    
            if (imports.length > 0)
            {
                console.log(filename);
                imports.forEach((line) => console.log(line));
                console.log('');
            }
        }

        else if (fileStats.isDirectory())
            processDir(file);
    });
};

processDir(jsdir);
