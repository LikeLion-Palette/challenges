// js file

//input으로 받은 text화면에 띄우기
const btn_res = document.querySelector('.btn-res')
const input_wannabe = document.getElementById("input_wannabe");
const txt_res = document.querySelector(".re-wanabe");
const write = () => { 
  txt_res.textContent = input_wannabe.value;
}
console.log(input_wannabe.value); //아무것도 안나와요ㅜㅜ
btn_res.addEventListener('click',write)

//버튼 누르면 모달창 나타나고 없어지기
const open = () =>{
  document.querySelector(" .cont-modal").style.display="block";
}
const close = () =>{
  document.querySelector(" .cont-modal").style.display="none";
}
document.querySelector('.btn-go').addEventListener('click',open);
document.querySelector('.cont-modal').addEventListener("click",close);


