//함수 - 함수 선언문 vs 함수 표현식 개념학습

//1. 함수 선언문
//	-->지금까지 우리가 배워왔던 함수 작성법

//2. 함수 표현식
//	-->함수를 하나의 '값'으로 취급
//	-->값으로 취급할 수도 있으니깐
//	-->변수 하나 만들어서 대입(할당)도 할 수 있다.
let nabyunsu = function nahamsu() { alert('나 함수') }

// nabyunsu()
//변수를 이런식으로 사용할 수 있다는 점에서 내부적으로 일반적인 변수하고는 조금 다르게 취급함을 알 수 있다.
// nabyunsu

// alert(nabyunsu)	//함수내용 그대로 출력
// alert(typeof nabyunsu)	//function

//3. 다른 변수에게 할당도 되나요??
let nabyunsu2 = nabyunsu

nabyunsu2()
alert(nabyunsu2)	//함수내용 그대로 출력
alert(typeof nabyunsu2)	//function

