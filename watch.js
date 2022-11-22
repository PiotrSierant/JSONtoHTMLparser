import fs from 'fs';

fs.watchFile('./output/result.html', async () => {
    console.log('Change file');
    try {
        await fs.promises.mkdir('./tmp', { recursive: true });
        const data = await fs.promises.readFile('./output/result.html', 'utf-8');
        const fileName = `./tmp/result_${Math.floor(
            Math.random() * 1000000000,
        )}.html`;
        await fs.promises.writeFile(fileName, data);
    } catch (err) {
        console.log(err);
    }
});

process.on('SIGINT', async () => {
    console.log('exiting');
    try {
        await fs.promises.rmdir('./tmp', { recursive: true });
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
});