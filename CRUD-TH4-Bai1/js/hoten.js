// kiểm tra xem có bỏ trống không
// kiểm tra định dạng không có số, ký tự đặc biệt hay không
export function kiemtraHT(hoTen, errorHoTen){
    if(hoTen == ""){
       errorHoTen.innerText = "Vui lòng nhập họ tên";
       return;
    }
//hàm trim để loại bỏ các khoảng trắng ở đầu và cuối chuỗi
    let trimHT = hoTen.trim();

// cắt ra các thành phần trong tên
    let catHT = trimHT.split(/\s+/);
// kiểm tra tên có ký tự dặc biệt hay ko
    let regex = /^[A-Z, Đ][a-z,ăâêôơưằắẳẵặầấẩẫậềếểễệồốổỗộờớởỡợừứửữựàáảãạèéẻẽẹìíỉĩịòóỏõọùúủũụ]*$/;
   
    for(let i = 0;i < catHT.length; i++){
        if(!regex.test(catHT[i])){
            errorHoTen.innerText = "Vui lòng nhập đúng định dạng";
            return; 
        }

    }
    // nếu nhập đúng định dạng tên rồi thì không hiện lỗi
    errorHoTen.innerText = "";



}