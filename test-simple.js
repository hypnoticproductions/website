const path = require('path');
const dataPath = path.resolve('./src/lib/data');
console.log('Looking for:', dataPath);
const fs = require('fs');
console.log('Exists:', fs.existsSync(dataPath + '.ts'));
console.log('Files in lib:', require('fs').readdirSync('./src/lib'));
