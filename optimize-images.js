const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images');
const faviconPath = path.join(__dirname, 'public', 'favicon.jpg');

// Configuración de optimización
const config = {
    portfolio: {
        width: 1200,
        quality: 85,
        progressive: true
    },
    favicon: {
        width: 512,
        quality: 90,
        progressive: true
    }
};

async function optimizeImage(inputPath, outputPath, options) {
    try {
        const info = await sharp(inputPath)
            .resize(options.width, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({
                quality: options.quality,
                progressive: options.progressive,
                mozjpeg: true
            })
            .toFile(outputPath + '.tmp');

        // Get file sizes
        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = info.size;
        const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(2);

        // Replace original with optimized
        fs.renameSync(outputPath + '.tmp', outputPath);

        console.log(`✓ ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(optimizedSize / 1024).toFixed(0)}KB (${reduction}% reduction)`);
    } catch (error) {
        console.error(`✗ Error optimizing ${path.basename(inputPath)}:`, error.message);
    }
}

async function optimizeAllImages() {
    console.log('🔧 Starting image optimization...\n');

    // Optimize portfolio images
    const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg'));

    for (const file of files) {
        const inputPath = path.join(imagesDir, file);
        await optimizeImage(inputPath, inputPath, config.portfolio);
    }

    // Optimize favicon
    if (fs.existsSync(faviconPath)) {
        console.log('\n🔧 Optimizing favicon...\n');
        await optimizeImage(faviconPath, faviconPath, config.favicon);
    }

    console.log('\n✅ All images optimized successfully!');
}

optimizeAllImages().catch(console.error);
