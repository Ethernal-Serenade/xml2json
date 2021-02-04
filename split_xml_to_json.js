const XMLSplitter = require('xml-splitter')
const fs = require('fs');

xs = new XMLSplitter('/NewDataSet/Table27')
var arr = [];
xs.on('data', function(data) {
    arr.push(data)
})
const xml = fs.readFileSync('D:/22762.xml');
xs.parseString(xml)

var result = arr.map(function(obj) {
    return {
        /* Tạm thời kiểm tra các dữ liệu không có, sau này sẽ cập nhật kiểm tra toàn bộ */
        thuaDatId: obj["thuaDatId"]['$t'],
        xaId: obj["xaId"]['$t'],
        taiLieuDoDacId: obj["taiLieuDoDacId"]['$t'],
        maThua: obj["maThua"]['$t'],
        soHieuToBanDo: obj["soHieuToBanDo"]['$t'],
        soThuTuThua: obj["soThuTuThua"]['$t'],
        soHieuToBanDoCu: typeof obj["soHieuToBanDoCu"] == 'undefined' ? "" : obj["soHieuToBanDoCu"]['$t'],
        soThuTuThuaCu: typeof obj["soThuTuThuaCu"] == 'undefined' ? "" : obj["soThuTuThuaCu"]['$t'],
        inSoLieuCu: obj["inSoLieuCu"]['$t'],
        mucDichSuDungGhep: obj["mucDichSuDungGhep"]['$t'],
        dienTich: obj["dienTich"]['$t'],
        dienTichPhapLy: typeof obj["dienTichPhapLy"] == 'undefined' ? "" : obj["dienTichPhapLy"]['$t'],
        khuDanCu: obj["khuDanCu"]['$t'],
        datDoThi: obj["datDoThi"]['$t'],
        diaChi: typeof obj["diaChi"] == 'undefined' ? "" : obj["diaChi"]['$t'],
        nguonGocHinhThanh: obj["nguonGocHinhThanh"]['$t'],
        chuaGiaoDat: obj["chuaGiaoDat"]['$t'],
        uid: obj["uid"]['$t'],
        ngayChinhSua: obj["ngayChinhSua"]['$t'],
        trangThai: obj["trangThai"]['$t'],
        donViChinhSua: obj["donViChinhSua"]['$t']
    };
});

const json = JSON.stringify(result, null, 4);
fs.writeFileSync('D:/table27_22762.json', json);
