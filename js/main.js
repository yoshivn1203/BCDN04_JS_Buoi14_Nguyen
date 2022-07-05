// Yêu cầu: sắp xếp 3 số theo thứ tự từ nhỏ đến lớn

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * 3 số dương (num1, num2, num3)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến num1, num2, num3
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - So sanh num1, num2 và num3 theo từng cặp, chia nhỏ từng trường
 *       hợp cho ra các dãy số từ nhỏ đến lớn
 *     - Nếu num1 > num2 > num 3 => dãy số là num3, num2, num1
 *     - Tương tự cho các trường hợp còn lại
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('sapXep').innerHTML
 */

document.getElementById('btnSapXep').onclick = () => {
  let num1 = Number(document.getElementById('inputNum1').value);
  let num2 = Number(document.getElementById('inputNum2').value);
  let num3 = Number(document.getElementById('inputNum3').value);
  document.getElementById('sapXep').innerHTML =
    num1 > num2
      ? num2 > num3
        ? `${num3}, ${num2}, ${num1}`
        : num1 > num3
        ? `${num2}, ${num3}, ${num1}`
        : `${num2}, ${num1}, ${num3}`
      : num2 > num3
      ? num1 > num3
        ? `${num3}, ${num1}, ${num2}`
        : `${num1}, ${num3}, ${num2}`
      : `${num1}, ${num2}, ${num3}`;
};

// Yêu cầu: Chào hỏi thành viên trong gia đình tùy theo đối tượng

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * tên đối tượng (selectValue, được lấy ra từ form)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến selectValue
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu value = 'Bo' thì kết quả là 'Xin chào Bố!'
 *     - Nếu value = 'Me' thì kết quả là 'Xin chào Mẹ!'
 *     - Tương tự cho các trường hợp còn lại
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 * document.getElementById('chaoHoi').innerHTML
 */

document.getElementById('btnChaoHoi').onclick = () => {
  let selectValue = document.getElementById('selectList').value;
  document.getElementById('chaoHoi').innerHTML =
    'Bo' == selectValue
      ? 'Xin chào Bố!'
      : 'Me' == selectValue
      ? 'Xin chào Mẹ!'
      : 'Anh' == selectValue
      ? 'Xin chào Anh Trai!'
      : 'Em' == selectValue
      ? 'Xin chào Em gái!'
      : 'Xin chào Người lạ!';
};

// Yêu cầu: Đếm số lượng số chẵn và lẻ trong 3 số nguyên cho sẵn

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * 3 số dương (num1, num2, num3, được lấy ra từ form)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến num1, num2, num3 và biến count để đếm số chẵn
 * B2: Gan giá trị cho biến count = 0, các biến còn lại lấy từ form
 * B3: Lập công thức tính toán
 *     - Nếu num1 % 2 ==0 thì num1 là số chắn count++
 *     - lặp lại với 2 số còn lại
 *     - số lượng số lẻ = 3- count
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  document.getElementById('dem').innerHTML
 */

document.getElementById('btnDem').onclick = () => {
  let num1 = document.getElementById('inputSo1').value;
  let num2 = document.getElementById('inputSo2').value;
  let num3 = document.getElementById('inputSo3').value;
  let count = 0;

  num1 % 2 == 0 ? count++ : count;
  num2 % 2 == 0 ? count++ : count;
  num3 % 2 == 0 ? count++ : count;

  document.getElementById('dem').innerHTML = `Có ${count} số chẵn và ${
    3 - count
  } số lẻ`;
};

// Yêu cầu: Xác định loại tam giác dựa trên chiều dài 3 cạnh

/**
 *Khối 1: Dữ liệu đang có sẵn (Input)
 * Chiều dài 3 cạnh (canh1, canh2 ,canh3 , được lấy ra từ form)
 *
 *Khối 2:Các bước xử lý code
 * B1: Tạo biến canh1, canh2 ,canh3
 * B2: Gan giá trị cho biến
 * B3: Lập công thức tính toán
 *     - Nếu canh1 == canh2 && canh2 == canh3 thì đó là tam giác đều
 *     - Nếu canh1 == canh2 || canh2 == canh3 || canh1 == canh3
 *       thì đó là tam giác cân
 *     - Nếu có 1 cạnh bằng căn bậc 2 của tổng bình phương 2 cạnh còn lại
 *       thì đó là tam giác vuông
 *     - cả 3 trường hợp đều sai thì đó là loại tam giác khác
 *
 * B4: Thông báo kết quả ở website
 *
 *Khối 3:Kết quả (Output)
 *  document.getElementById('ketQua').innerHTML
 */

document.getElementById('btnKetqua').onclick = () => {
  let canh1 = document.getElementById('inputCanh1').value;
  let canh2 = document.getElementById('inputCanh2').value;
  let canh3 = document.getElementById('inputCanh3').value;
  document.getElementById('ketQua').innerHTML =
    canh1 == canh2 && canh2 == canh3
      ? 'Hình tam giác đều'
      : canh1 == canh2 || canh2 == canh3 || canh1 == canh3
      ? 'Hình tam giác cân'
      : canh1 == Math.sqrt(Math.pow(canh2, 2) + Math.pow(canh3, 2)) ||
        canh2 == Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh3, 2)) ||
        canh3 == Math.sqrt(Math.pow(canh1, 2) + Math.pow(canh2, 2))
      ? 'Hình tam giác vuông'
      : 'Một loại tam giác nào đó';
};
