//함수 - 전역변수 vs 지역변수
//변수는 변수의 스코프(scope)에 따라 전역변수와 지역변수로 나뉜다.

//1. 전역변수 (Global Variable)
//함수 외부에서 선언된 변수로, 프로그램 전체 코드(함수)에서 자유롭게 접근 할 수 있다.

//2. 지역변수(Local Variable)
//함수 내부에서 선언된 변수로, 프로그램 전체 코드(함수)에서 자유롭게 접근 할 수 없다.
//함수 호출 시 함수 내부 에서만 사용되고, 함수가 종료 시 소멸된다.
//가장 핵심
//	--> 함수 외부에서 엑세스가 안된다.

//3. 실습 1
let name = "홍길동"
function testFunc() {
	
	//let은 블록 단위로 저장
	//let을 지우면 name은 전역변수 name을 가르킨다.
	let name = "강감찬"

	alert(name)
}
alert(name)	//홍길동
testFunc()	//강감찬
alert(name)

//4. 실습 2
// var a = 123
// function testFunc2() {
// 	var a = 456
// }
// alert(a)	//123
