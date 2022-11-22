import program from 'commander';

import { listPath, tablePath } from './paths/paths.js';
import * as VAR from './common/variables.js';

program.version('1.0.0').description('Our first awesome CLI');

program
    .command('list')
    .alias('l')
    .option(
        '-lt, --type [type]',
        'ordered or unordered list (ol/ul), default is ul',
    )
    .option('-t, --title [title]', 'title of your html')
    .action(async ({ type, title }) => {
        try {
            const listTemplateFile =
                type === 'ol' ? VAR.OL_TEMPLATE : VAR.UL_TEMPLATE;

            await listPath(listTemplateFile, title);
        } catch (err) {
            console.log(err);
        }
    });

program
    .command('table')
    .alias('t')
    .option('-t, --title [title]', 'title of your html')
    .action(async ({ title }) => {
        try {
            await tablePath(VAR.TABLE_TEMPLATE, title);
        } catch (err) {
            console.log(err);
        }
    });

program.parse(process.argv);