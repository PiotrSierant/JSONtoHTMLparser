import * as VAR from './variables.js';
import fs from 'fs';

export const getHTMLTemplate = async (fileName = VAR.BASIC_HTML_TEMPLATE) => {
    try {
        return await fs.promises.readFile(fileName, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

export const fillTemplateWithData = (template, title, body) => {
    return template.replace('__title__', title).replace('__body__', body);
};

export const saveOutputHTML = async (dataToSave, fileName = VAR.OUTPUT) => {
    try {
        await fs.promises.writeFile(fileName, dataToSave);
    } catch (err) {
        console.log(err);
    }
};

export const getInputData = async (fileName = VAR.LIST_BASIC_INPUT) => {
    try {
        return JSON.parse(await fs.promises.readFile(fileName, 'utf-8'));
    } catch (err) {
        console.log(err);
    }
};