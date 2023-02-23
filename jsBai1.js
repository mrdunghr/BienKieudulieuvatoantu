function Jsbai1(){
    let vatly = prompt('điểm vật lý');
    let diemVatly = parseInt(vatly);
    document.write('Điểm Vật Lý: ' + diemVatly);
    document.write('</br>');


    let hoahoc = prompt('điểm hóa học');
    let diemHoaHoc = parseInt(hoahoc);
    document.write('Điểm Hóa Học: ' + diemHoaHoc);
    document.write('</br>');


    let sinhhoc = prompt('điểm sinh học');
    let diemSinhHoc = parseInt(sinhhoc);
    document.write('Điểm Sinh Học: ' + diemSinhHoc);
    document.write('</br>');


    let diemtrungbinh = (diemVatly + diemHoaHoc + diemSinhHoc) / 3
    document.write('Điểm trung bình: '+diemtrungbinh);
}
function Jsbai2(){
    let DoC = prompt('Nhập ĐỘ C');
    let converDoc = parseInt(DoC);
    let ConverCtoF = 9 / 5 * converDoc + 32;
    document.write(converDoc + ' Độ C bằng: '+ConverCtoF+' Độ F');
}

function Jsbai3(){
    let R = prompt('Nhập Bán kính hình tròn');
    let cR = parseInt(R);
    let sTron = 3.14 * cR * cR;
    document.write('Diện tích hình tròn với bán kính '+cR+' là '+ sTron);

}
function Jsbai4(){
    let R = prompt('Nhập Bán kính hình tròn');
    let cR = parseInt(R);
    let cTron = cR * 2 * 3.14
    document.write('Chu vi hình tròn với bán kính '+cR+' là '+ cTron);

}