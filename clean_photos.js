const fs = require('fs');

const appJsPath = 'c:/Users/PC/portafolio-romppao-main/src/App.js';
let content = fs.readFileSync(appJsPath, 'utf8');

// 1. We need to parse portfolioItems. It's a JS array.
// To do this safely without parsing a full AST, we can find the start and end of portfolioItems.
const startIndex = content.indexOf('const portfolioItems = [');
const endIndex = content.indexOf('];', startIndex) + 2;

const arrayString = content.substring(startIndex, endIndex);

// It's just a JS string, not pure JSON. But wait, since we only need to keep specific categories,
// we can do a simple line-by-line or regex replacement, but the array is well-formatted.
// Actually, we can just replace the specific buttons:
let newContent = content.replace(
    `<button onClick={() => setPhotoSubFilter('Blanco y Negro')} className={\`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all \${photoSubFilter === 'Blanco y Negro' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}\`}>
                <Moon className="w-3 h-3 mr-1.5" /> B&N
              </button>
              <button onClick={() => setPhotoSubFilter('Retrato')} className={\`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all \${photoSubFilter === 'Retrato' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}\`}>
                <User className="w-3 h-3 mr-1.5" /> Retrato
              </button>
              <button onClick={() => setPhotoSubFilter('Paisaje')} className={\`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center transition-all \${photoSubFilter === 'Paisaje' ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-neutral-800 text-neutral-500 hover:border-neutral-600 hover:text-neutral-300'}\`}>
                <Mountain className="w-3 h-3 mr-1.5" /> Paisaje
              </button>`,
    ''
);

// To remove the photos, let's use a regex that matches object blocks: `{ id: ..., type: 'photo', category: '...', ... },`
// We want to delete ANY block where category is 'Retrato', 'Paisaje', or 'Blanco y Negro'
const regex = /\{\s*id:\s*\d+,\s*type:\s*'photo',\s*category:\s*'(Retrato|Paisaje|Blanco y Negro)',[\s\S]*?(?:\},|\}\s*\];)/g;

let previousLength = 0;
while(newContent.length !== previousLength) {
    previousLength = newContent.length;
    newContent = newContent.replace(regex, (match) => {
        // If it was the last element ending with ]; we should preserve ];
        if (match.endsWith('];')) return '];';
        // Otherwise just remove
        return '';
    });
}

// Clean up any double commas or empty spaces left by deleting array elements
newContent = newContent.replace(/,\s*,/g, ',');
newContent = newContent.replace(/\[\s*,/g, '[');

fs.writeFileSync(appJsPath, newContent, 'utf8');
console.log('App.js updated successfully!');
