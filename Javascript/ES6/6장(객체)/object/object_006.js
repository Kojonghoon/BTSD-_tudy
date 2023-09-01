//객체(Object) - 함수에 객체 전달하기

//1. 앞서 배운 것 정리
//원시 타입과는 다르게 객체 타입은 객체끼리의 대입시 사본을 만드는 것이 아니라 같은 객체를 가리키는 것이다.
//즉, 같은 객체를 가리키는 또 다른 변수가 하나 더 만들어진 것 뿐이다.
//이러한 특징은 "객체-->함수의 인자로 전달시에도"-->마찬가지
//즉, 무거운 객체를 직접 전달하는 것이 아닌 함수에 참조로 전달한다.(매우 중요한 개념)


//2. 실습 1
//	--> 객체를 함수의 인자로 전달(참조)
// let person = {
// 	name: "홍길동",
// 	age: 20,
// }

// function replaceName(obj) {
// 	obj.name = "을지문덕"
// }

// alert(`replaceName 함수 호출 전 = ${person.name}`)	//홍길동
// replaceName(person)
// alert(`replaceName 함수 호출 후 = ${person.name}`)	//홍길동

//3. 실습 2
//	--> 문자열을 함수의 인자로 전달(사본)
// let person = "홍길동"

// function replaceName(str) {
// 	str = "을지문덕"
// 	console.log(str)
// }

// replaceName(person)		//을지문덕
// console.log(person)		//홍길동


//4. 실습 3
//	--> 숫자형을 함수의 인자로 전달(사본)
let primitiveNum = 10

function multiplyNum(num) {
	num *= 5
	console.log(`함수로 전달된 primitiveNum의 값은 = ${num}`)	//50
}

//함수호출
multiplyNum(primitiveNum)	//50
console.log(`다시확인 --> 현재 primitiveNum의 값은 =${primitiveNum}`)	//10