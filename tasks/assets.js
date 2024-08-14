const path = require('path'),
    fs = require('fs/promises');

async function writeToFile(file, content) {
    const filePath = path.resolve(__dirname, file),
        dir = path.dirname(filePath);
    // create parent directory if it doesn't exist
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch {}
    // write data to file
    await fs.writeFile(filePath, content);
    console.log('wrote content to %O', filePath);
}

async function copyFile(src, dest) {
    const srcPath = path.resolve(__dirname, src),
        destPath = path.resolve(__dirname, dest);
    // create dest parent directory if it doesn't exist
    try {
        await fs.mkdir(path.dirname(destPath), { recursive: true });
    } catch {}
    // copy
    await fs.copyFile(srcPath, destPath);
    console.log('copied content from %O to %O', srcPath, destPath);
}

const svg = (
    "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='500' height='300'>"
    + "<rect x='5' y='5' width='490' height='290' stroke='#444444' fill='none'/>"
    + "<rect x='20%' y='20%' width='60%' height='60%' fill='#ff4400'/>"
    + "<rect x='40%' y='40%' width='20%' height='20%' fill='#0044ff'/>"
    + '</svg>'
);

(async () => {
    await writeToFile('../docs/assets/built-image.svg', svg);
    await copyFile('../website/static/img/window-icons.svg', '../docs/assets/built-window-icons.svg');
})();