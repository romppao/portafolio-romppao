const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Get image path from command line argument
const imageName = process.argv[2];

if (!imageName) {
    console.error('❌ Please provide an image name as argument');
    console.error('Usage: node optimize-single-image.js <image-name.jpg>');
    process.exit(1);
}

const inputPath = path.join(__dirname, 'public', 'images', imageName);

if (!fs.existsSync(inputPath)) {
    console.error(`❌ Image not found: ${inputPath}`);
    process.exit(1);
}

async function optimizeImage() {
    try {
        console.log(`🔧 Optimizing ${imageName}...`);

        const info = await sharp(inputPath)
            .rotate() // Auto-rotate based on EXIF orientation
            .resize(1200, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({
                quality: 85,
                progressive: true,
                mozjpeg: true
            })
            .toFile(inputPath + '.tmp');

        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = info.size;
        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

        fs.renameSync(inputPath + '.tmp', inputPath);

        console.log(`✓ ${imageName}: ${(originalSize / 1024).toFixed(0)}KB → ${(optimizedSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
        console.log('✅ Image optimized successfully!');
    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    }
}

optimizeImage();
