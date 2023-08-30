//함수 - 디폴트 매개변수 값
//매개변수(인자) 값을 받는 함수에서 매개변수 값이 없는 경우
//	--> 디폴트로 값을 지정할 수 있다.
//(문제) ID를 매개변수로 받는 함수에서 ID가 없는 경우 디폴트 값을 Guest로 지정하는 함수를 만들어 보시오

//1. or 연산자
// function testFunc(id) {
// 	let user_id = id ||'Guest'	
// 	//or연산자 특징 
// 	//	--> 피연산자 둘중 하나가 참이면 참
// 	let greeting =`반갑습니다. ${user_id} 회원님`
// 	alert(greeting)
// 	console.log(greeting)
// }
// testFunc("홍길동")
// testFunc()


//2. 매개변수 디폴트 값을 사용
function testFunc2(id='Guest') {
	let greeting =`반갑습니다. ${id} 회원님`
	alert(greeting)
	console.log(greeting)
}
testFunc2("홍길동")
testFunc2()
