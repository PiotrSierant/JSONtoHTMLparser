import * as VAR from '../common/variables.js';
import fs from 'fs';

export const getListTemplate = async (fileName = VAR.UL_BASIC_TEMPLATE) => {
    try {
        return await fs.promises.readFile(fileName, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

export const fillListTemplateWithDataBasic = (template, objectToFillData) => {
    let htmlListWithData = template;
    objectToFillData.forEach(({ id, data }) => {
        htmlListWithData = htmlListWithData.replace(`__data${id}__`, data);
    });
    return htmlListWithData;
};

export const fillListTemplateWithData = (template, objectToFillData) => {
    const nl = process.platform === 'win32' ? '\r\n' : '\n';
    const output = objectToFillData.map(({ data }) => {
        return `<li>${data}</li>$${nl}`;
    });
    return template.replace('__list__', output.join(''));
};