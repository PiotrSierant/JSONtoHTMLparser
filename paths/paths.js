import {
    getInputData,
    getHTMLTemplate,
    fillTemplateWithData,
    saveOutputHTML,
} from '../common/utils.js';
import {
    getListTemplate,
    fillListTemplateWithDataBasic,
    fillListTemplateWithData,
} from '../list/list-utils.js';

import {
    getTableTemplate,
    fillTableTemplateWithData,
    fillTableTemplateWithDataBasic,
} from '../table/table-utils.js';

import * as VAR from '../common/variables.js';

export const basicListPath = async (
    listTemplateFile,
    title = 'Default title',
) => {
    try {
        const inputData = await getInputData();
        const listTemplate = await getListTemplate(listTemplateFile);
        const listWithData = fillListTemplateWithDataBasic(listTemplate, inputData);
        const htmlTemplate = await getHTMLTemplate();
        const htmlWithData = fillTemplateWithData(
            htmlTemplate,
            title,
            listWithData,
        );
        await saveOutputHTML(htmlWithData);
    } catch (err) {
        console.log(err);
    }
};

export const listPath = async (listTemplateFile, title = 'Default title') => {
    try {
        const inputData = await getInputData();
        const listTemplate = await getListTemplate(listTemplateFile);
        const listWithData = fillListTemplateWithData(listTemplate, inputData);
        const htmlTemplate = await getHTMLTemplate();
        const htmlWithData = fillTemplateWithData(
            htmlTemplate,
            title,
            listWithData,
        );
        await saveOutputHTML(htmlWithData);
    } catch (err) {
        console.log(err);
    }
};

export const basicTablePath = async (
    tableTemplateFile = VAR.TABLE_BASIC_TEMPLATE,
    title = 'Default title',
) => {
    try {
        const inputData = await getInputData(VAR.TABLE_BASIC_INPUT);
        const tableTemplate = await getTableTemplate(tableTemplateFile);
        const tableWithData = fillTableTemplateWithDataBasic(
            tableTemplate,
            inputData,
        );
        const htmlTemplate = await getHTMLTemplate();
        const htmlWithData = fillTemplateWithData(
            htmlTemplate,
            title,
            tableWithData,
        );
        await saveOutputHTML(htmlWithData);
    } catch (err) {
        console.log(err);
    }
};

export const tablePath = async (
    tableTemplateFile = VAR.TABLE_TEMPLATE,
    title = 'Default title',
) => {
    try {
        const inputData = await getInputData(VAR.TABLE_INPUT);
        const tableTemplate = await getTableTemplate(tableTemplateFile);
        const tableWithData = fillTableTemplateWithData(tableTemplate, inputData);
        const htmlTemplate = await getHTMLTemplate();
        const htmlWithData = fillTemplateWithData(
            htmlTemplate,
            title,
            tableWithData,
        );
        await saveOutputHTML(htmlWithData);
    } catch (err) {
        console.log(err);
    }
};