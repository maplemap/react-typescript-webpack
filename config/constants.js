const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '..');
const BUILD_PATH = path.join(PROJECT_PATH, 'build');
const PUBLIC_PATH = path.join(PROJECT_PATH, 'public');

module.exports = {
  PROJECT_PATH,
  BUILD_PATH,
  PUBLIC_PATH,
}
