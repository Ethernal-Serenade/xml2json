# Conver XML to JSON
+ Cài node JS
+ Cài package xml2js và fs
    + Cú pháp cài xml2js: npm install xml2js
    + Cú pháp cài fs: npm install fs

### Đổi XML sang JSON
+ Đổi đường dẫn file xml tại dòng 3 `const xml = fs.readFileSync('D:/sieu du lieu thuoc tinh _22843.xml');`
+ Đổi đường dẫn file json tại dòng 9 `fs.writeFileSync('D:/data_sieudulieu_22843.json', json);`
+ Chạy file `app.js` sinh ra file json
+ Vào trang web: http://json2table.com, chọn file json và view dạng bảng

### Split XML và đổi sang JSON
+ Chạy file `split_xml_to_json.js` để cắt file xml ra phần chúng ta muốn (ở đây là lấy bảng ranh thửa (Table 27)) sinh ra file json
+ Vào trang web: http://convertcsv.com/json-to-csv.htm , chọn file json và download file Excel về
