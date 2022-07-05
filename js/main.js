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

document.getElementById('btnDem').onclick = () => {
  let num1 = document.getElementById('inputNum1').value;
  let num2 = document.getElementById('inputNum2').value;
  let num3 = document.getElementById('inputNum3').value;
  let count = 0;
  num1 % 2 == 0 ? count++ : count;
  num2 % 2 == 0 ? count++ : count;
  num3 % 2 == 0 ? count++ : count;

  document.getElementById('dem').innerHTML = `Có ${count} số chẵn và ${
    3 - count
  } số lẻ`;
};

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
