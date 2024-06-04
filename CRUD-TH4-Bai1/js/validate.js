import { kiemtraHT } from "./hoten.js"
import { kiemtraMSV } from "./masv.js";
import { kiemtraNS } from "./ngaysinh.js";
import { kiemtraLop } from "./lop.js";
//lấy ra nút Thêm
let btnThem = document.querySelector("#btnThem");

//lấy ra các errorMesages 
let errorHoTen = document.querySelector("#errorHT");
let errorMaSV = document.querySelector("#errorMSV");
let errorNgaySinh = document.querySelector("#errorNS");
let errorLop = document.querySelector("#errorLop");

//hàm sự kiện click
btnThem.addEventListener("click", function(){
  //lấy ra giá trị của các phần tử mỗi lần click
    let hoTen = document.querySelector("#hoTen").value;
    // kiểm tra giá trị vừa nhập 
    kiemtraHT(hoTen, errorHoTen);

    let maSV = document.querySelector("#maSV").value;
    kiemtraMSV(maSV,errorMaSV);

    let ngaySinh = document.querySelector("#ngaySinh").value;
    kiemtraNS(ngaySinh, errorNgaySinh);

    let lop = document.querySelector("#lop").value;
    kiemtraLop(lop, errorLop);
})



