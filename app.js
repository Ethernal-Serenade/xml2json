const xml2js = require('xml2js');
const fs = require('fs');
const xml = fs.readFileSync('D:/sieu du lieu thuoc tinh _22843.xml');
xml2js.parseString(xml, { mergeAttrs: true }, (err, result) => {
    if (err) {
        throw err;
    }
    const json = JSON.stringify(result, null, 4);
    fs.writeFileSync('D:/data_sieudulieu_22843.json', json);
});
