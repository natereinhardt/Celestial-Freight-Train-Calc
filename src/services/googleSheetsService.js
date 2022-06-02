'use strict'; 

const sheetId = '18eSOZxxeYb5GPDpBSC37VbSiH40DMXoFHTuOl6Eo_Kg';
const accountKey = 'AIzaSyDoM0R5SS5Hb213c6cjeYMRDxFCv1o0kys';

export const getStations = async () => {
    let availableStations = []
  try {
    const tabName = 'Available-Stations';
    availableStations = await getSheetData(sheetId, tabName)
    return availableStations;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Finished getting Available Stations from Google Sheet', availableStations);
  }
};

export const getStaticData = async () => {
    let staticData = []
  try {
    const tabName = 'Static-Values';
    staticData = await getSheetData(sheetId, tabName)
    return staticData;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Finished getting Static-Values from Google Sheet', staticData);
  }
};

const getSheetData = async (id, tabName) =>{
    let sheetDataAsJson = []
    try {
        const url =
          'https://sheets.googleapis.com/v4/spreadsheets/' +
          id +
          '/values/' +
          tabName +
          '?key=' +
          accountKey;
        const response = await fetch(url);
        const sheetData = await response.json();
        sheetDataAsJson = await buildObject(sheetData)
        return sheetDataAsJson;
      } catch (error) {
        console.log(error);
      } finally {
        console.log(`Finished making call to google sheets to get data from Sheet: ${id} Tab: ${tabName}`, sheetDataAsJson);
      }
}
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

const GoogleSheetsService = {
    getStations,
    getStaticData,
  };

export default GoogleSheetsService;
