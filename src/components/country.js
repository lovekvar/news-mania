const fs = require("fs");
const buffer = fs.readFileSync("country ISO code.txt");
const fileContent = buffer.toString();
let countryMapList = fileContent.split("\n");
let Countries = [];
countryMapList.forEach((countryMap)=> {
    let arr = countryMap.split(",");
    let item = { "country" : arr[0], "code" : arr[1]}; 
    Countries.push(item);
});
export default Countries;