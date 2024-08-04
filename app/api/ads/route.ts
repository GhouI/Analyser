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
  
  return Response.json([
    {
      "Ad Name" : "Hi",
      "Amount Spent" : "Bye"
    }
  ])
  
}


