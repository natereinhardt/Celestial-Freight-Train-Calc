'use strict'; // https://docs.google.com/spreadsheets/d/1mPT3gvByzQBe6uF8LFcMa0GfDMUVRYFAPC99gdt2WgM/edit?usp=sharing
//AIzaSyC6tp0HB8Cmy4xi8VVRf1AqRsSSaFbkurU
// import creds from '@/conf/ceca-freight-dacadcb743a5.json'; // the file saved above
// const doc = new GoogleSpreadsheet('1mPT3gvByzQBe6uF8LFcMa0GfDMUVRYFAPC99gdt2WgM');
// import { vueGsheets } from 'vue-gsheets'
// import sheets from '@googleapis/sheets';
//const {google} = require('googleapis');
// Initialize the sheet - doc ID is the long id in the sheets URL

// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
export const getStations = async () => {
  try {
    const sheetId = '18eSOZxxeYb5GPDpBSC37VbSiH40DMXoFHTuOl6Eo_Kg';
    const tabName = 'Available-Stations';
    const accountKey = 'AIzaSyDoM0R5SS5Hb213c6cjeYMRDxFCv1o0kys';
    const url =
      'https://sheets.googleapis.com/v4/spreadsheets/' +
      sheetId +
      '/values/' +
      tabName +
      '?key=' +
      accountKey;
    console.log(url);
    const response = await fetch(url);
    const sheetData = await response.json();
    const availableStations = await buildObject(sheetData)
    return availableStations;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally');
  }
};

const GoogleSheetsService = {
  getStations,
};


const buildObject = async (sheetData) => {
  let rows = [];
  const sheetValues = sheetData.values
  for (let value in sheetValues) {
    let rowObject = {};
    for (let values in sheetValues[value]) {
      rowObject[sheetValues[0][values]] = sheetValues[value][values];
    }
    rows.push(rowObject);
  }
  rows.shift()
  return rows
};

export default GoogleSheetsService;
