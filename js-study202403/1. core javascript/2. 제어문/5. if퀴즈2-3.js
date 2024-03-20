// 정수 3개 입력하고 최소값 구하기

var num1 = +prompt(`정수 A`);
var num2 = +prompt(`정수 B`);
var num3 = +prompt(`정수 C`);



if(num1>==num2){
  if(num2>num3){
    alert(`최소값 : ${num3}`);
  }else(num2<num3){
    alert(`최소값 : ${num2}`);
  }
}else if(num1<==num2){
  if(num1>num3){
    alert(`최소값 : ${num3}`);
  }else(num1<num3){
    alert(`최소값 : ${num1}`);
  }
}else(num1===num2===num3){
  alert(`값이 모두 같습니다.`);
}
