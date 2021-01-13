# Conver XML to JSON
+ Cài node JS
+ Cài package xml2js và fs
    + Cú pháp cài xml2js: npm install xml2js
    + Cú pháp cài fs: npm install fs
+ Đổi đường dẫn file xml tại dòng 3 `const xml = fs.readFileSync('D:/sieu du lieu thuoc tinh _22843.xml');`
+ Đổi đường dẫn file json tại dòng 9 `fs.writeFileSync('D:/data_sieudulieu_22843.json', json);`
+ Vào trang web: http://json2table.com/ , bỏ file json vào trong trang web rồi xem ở dạng bảng
