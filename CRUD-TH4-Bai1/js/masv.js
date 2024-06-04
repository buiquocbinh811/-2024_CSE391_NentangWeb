//tao ra hàm ktra msv có trống không
// kiểm tra định dạng số, có chữ hay kí tự đb ko
export function kiemtraMSV(maSV, errorHoTen) {
    if(maSV =="")
        {
            errorHoTen.innerText = "Vui lòng nhập mã sinh viên";
            return;
        }
    // xoá dấu cách
    let trimMSV = maSV.trim();

    // chỉ dược phép nhập chưỡi sô nhập chữ số
    let regex = /^[0-9]+$/;
    
    for(let i =0; i< trimMSV.length; i++){
        if(!regex.test(trimMSV[i])){
            errorMSV.innerText= "Vui lòng nhập đúng định dạng số ";
            return;
        }
        
    }
    errorMSV.innerText = "";

}