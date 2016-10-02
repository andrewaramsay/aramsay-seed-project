const path = require('path');
const _root = path.resolve(__dirname, '..');

function root(...folders) {
    var pathsWithRoot = [_root, ...folders];
    return path.join(...pathsWithRoot);
}

module.exports = { root };
