var fs = require('fs');
var path = require('path');

try {
    fs.rmdirSync(path.join(__dirname, 'dist'));
}
catch (e) {

}

fs.mkdirSync(path.join(__dirname, 'dist'));

// index.html
var content = fs.readFileSync(path.join(__dirname, 'index.html'));
fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), content);