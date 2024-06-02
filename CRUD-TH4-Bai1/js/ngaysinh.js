//kiểm tra xem có bỏ trống hay không
//kiểm tra xem có nhập đủ ngày-tháng - năm ko

export function kiemtraNS(ngaySinh, errorNgaySinh) {
  if (ngaySinh == "") {
    errorNgaySinh.innerText = "Vui lòng nhập đủ ngày, tháng năm sinh";
    return;
  }
  //kiểm tra xem người dùng có đủ 18 tuổi không
  let date = new Date(ngaySinh);
  let today = new Date();
  if (today.getFullYear() - date.getFullYear() < 18) {

    errorNgaySinh.innerText = "Vui lòng nhập năm sinh hợp lệ";
    return;
  }    
  errorNgaySinh.innerText= "";
}
