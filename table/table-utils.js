import * as VAR from '../common/variables.js';
import fs from 'fs';

const nl = process.platform === 'win32' ? '\r\n' : '\n';

export const getTableTemplate = async (fileName = VAR.TABLE_BASIC_TEMPLATE) => {
    try {
        return await fs.promises.readFile(fileName, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

const setMainHeader = (htmlTableWithData, data) => {
    return htmlTableWithData.replace('__tableHeader__', data.title);
};

const setHeadersBasic = (htmlTableWithData, data) => {
    let output = htmlTableWithData;
    for (let i = 0; i < Object.keys(data).length; i++) {
        output = output.replace(`__th${i + 1}__`, data[`column${i + 1}`]);
    }
    return output;
};

const setRowsBasic = (htmlTableWithData, data, type) => {
    const rowNo = type.replace('row', '');
    let output = htmlTableWithData;
    for (let i = 0; i < Object.keys(data).length; i++) {
        output = output.replace(`__td${rowNo}.${i + 1}__`, data[`column${i + 1}`]);
    }
    return output;
};

export const fillTableTemplateWithDataBasic = (template, objectToFillData) => {
    let htmlTableWithData = template;
    objectToFillData.forEach(({ type, ...data }) => {
        if (type === 'mainHeader') {
            htmlTableWithData = setMainHeader(htmlTableWithData, data);
        }
        if (type === 'header') {
            htmlTableWithData = setHeadersBasic(htmlTableWithData, data);
        }
        if (type.startsWith('row')) {
            htmlTableWithData = setRowsBasic(htmlTableWithData, data, type);
        }
    });
    return htmlTableWithData;
};

const setHeaders = (htmlTableWithData, data) => {
    let output = htmlTableWithData;
    return output.replace('__number__', Object.keys(data).length).replace(
        '__trHeader__',
        Object.keys(data)
            .map((key) => {
                return `<th>${data[key]}</th>${nl}`;
            })
            .join(''),
    );
};

const setRow = (htmlTableWithData, data) => {
    let output = htmlTableWithData;
    return output.replace(
        `__trBody__`,
        `<tr>${Object.keys(data)
            .map((key) => {
                return `<td>${data[key]}</td>${nl}`;
            })
            .join('')}</tr>${nl}__trBody__`,
    );
};

export const fillTableTemplateWithData = (template, objectToFillData) => {
    let htmlTableWithData = template;
    objectToFillData.forEach(({ type, ...data }) => {
        if (type === 'mainHeader') {
            htmlTableWithData = setMainHeader(htmlTableWithData, data);
        }
        if (type === 'header') {
            htmlTableWithData = setHeaders(htmlTableWithData, data);
        }
        if (type.startsWith('row')) {
            htmlTableWithData = setRow(htmlTableWithData, data);
        }
    });
    htmlTableWithData = htmlTableWithData.replace(`__trBody__`, '');
    return htmlTableWithData;
};