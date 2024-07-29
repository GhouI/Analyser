import * as fs from 'fs'; 
import csv from 'csv-parser'


interface CSVRow {
  "Ad Name" : string, 
  "Ad Link": string,
  "Amount Spent": string, 
  "Hook Rate": string,
  "Average watch time" : string,
  "Outbound CTR" : string, 
  "Purchases" : string,
  "Revenue" : string,
  "ROAS" : string,
  '': string;
}

export async function GET(request: Request) { 
  
  try{
    const LoadCSV = await readCsv("./Utils/Data.csv")
    const GetAdName = await getDataFromCsv(LoadCSV, {})
    return Response.json(GetAdName)
  }catch(e){
    console.error(e)
    return Response.json({"Error" : "An Error has occured."+e})
  }
  
  
}

async function readCsv(path: string) : Promise<CSVRow[]>{
  return new Promise((resolve,reject) =>{
  const AllData : CSVRow[] = []
  fs.createReadStream(path).pipe(csv())
  .on('data', (data: CSVRow) =>{
    AllData.push(data)
  })
  .on('end', () =>{
    console.log("Sucessfully read the data")
    resolve(AllData)
  })
  return AllData;
  })
}

function getDataFromCsv(data: CSVRow[], options: {
  columns?: (keyof CSVRow)[];
  rows?: number[];
}): CSVRow[] {
  let result = data;

  if (options.rows) {
    result = options.rows.map(index => result[index]).filter((row): row is CSVRow => row !== undefined);
  }

  if (options.columns) {
    result = result.map(row => {
      const newRow: Partial<CSVRow> = {};
      options.columns!.forEach(column => {
        newRow[column] = row[column];
      });
      return newRow as CSVRow; // Type assertion
    });
  }

  return result;
}