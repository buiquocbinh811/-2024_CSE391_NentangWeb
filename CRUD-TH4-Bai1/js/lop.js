// ktra nhập ko bỏ trống
// tối da 3 vị trí
//loại bỏ dấu cách ở đầu và cuối 
// vị trí đầu là số tối đau 3 chữ số(0->9)
// vị trí 2 là chữ viết hoa(A-Z)
// vị trí thứ 3 là 1 chữ số từ 0-9

export function kiemtraLop(lop, errorLop){
    if(lop ==""){
        errorLop.innerText = "Vui lòng nhập đầy đủ tên lớp";
        return;
    }
    //hàm trim để loại bỏ các khoảng trắng ở đầu và cưới chuỗi
    let trimL = lop.trim();

    let regex = /^[0-9]{1,3}[A-Z]+[0-9]$/
    // kiểm tra chưỡi ký 
    if(!regex.test(trimL[i])){
            errorLop.innerText = "Vui lòng nhập đúng định dạng lớp";
            return;
        }
    errorLop.innerText = "";

}