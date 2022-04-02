const scss = require('node-sass');
const path = require('path');
const fs = require('fs');
const folderContainSCSS =
  require('../views/index').getAllView('./views');

for (folder of folderContainSCSS) {
  let files = fs.readdirSync(folder);
  for (file of files) {
    if (!fs.statSync(folder + '/' + file).isDirectory())
      if (file.match(/^.+\.scss$/)) {
        // console.log(file)
        const result = scss.renderSync({
          file: folder + '/' + file,
        });
        fs.writeFile(
          folder + '/' + file.split('.')[0] + '.css',
          result.css,
          (err) => {},
        );
      }
  }
}
