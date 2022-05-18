var express = require('express');
var router = express.Router();
const {
    route: authRoute,
    URL,
} = require('./authModule/routes');
const sessionMiddleware =
    require('./authModule/middlewares').sessionMiddleware;
const fs = require('fs');

const walkSync = function (dir, filelist) {
    const files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function (file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            filelist.push('/' + file + '/routes.js');
        }
    });
    return filelist;
};

router.use(sessionMiddleware);

router.use('/' + URL, authRoute);
walkSync('./routes')
    .filter(file => {
        return file.split('/')[1] != 'authModule';
    })
    .map(file => {
        const route = require(`./${file}`);
        router.use(`/${route.URL}`, route.route);
    });

module.exports = router;
