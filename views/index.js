const fs = require('fs')

const getAllView = function (dir) {
    const files = fs.readdirSync(dir)
    const filelist = []
    filelist.push(dir)
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist.push(...getAllView(dir + '/' + file));
        } 
    })
    return filelist
}


module.exports = {
    getAllView
}