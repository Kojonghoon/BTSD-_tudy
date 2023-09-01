//객체(Object) - 값의 복사와 참조

//1. 원시 타입 (Primitive Type) vs 객체 타입(Object Type)
//원시타입
//	--> 오직 하나의 값만 할당
//	--> 변수끼리 할당(대입)
//	--> 값을 복사
//	--> 원본이 전혀 영향X

//객체타입
//	-->객체끼리 할당(대입)하면
//	-->같은 객체를 가리키기 때문에
//	-->원본도 영향 O


//2. 실습 1 --> 원시타입
let a = 100

let b = a
b = 200
console.log(`a의 값은 =${a}`)	//100
console.log(`b의 값은 =${b}`)	//200

//3. 실습 2 --> 객체타입
let person = {
	name: "홍길동",
	age: "20",
}

let person2 = person

console.log(`person이 출력하는 나이는 = ${person.age}`)		//20
console.log(`person2가 출력하는 나이는 = ${person2.age}`)	//20

//person2가 값을 변경
person2.age = 30
console.log(`person2.age값을 ${person2.age}으로 변경하였습니다`)

person2.name="을지문덕"
console.log(`person.name이 출력하는 이름은 = ${person.name}이고 ,person2.name이 출력하는 이름은 ${person2.name}이다`)

//4. 정리
//원시 타입과는 다르게 객체 타입은 객체끼리의 대입시 사본을 만드는 것이 아니라 같은 객체를 가리키는 것이다.
//즉, 같은 객체를 가리키는 또 다른 변수가 하나 더 만들어진 것 뿐이다.
//이러한 특징은 "객체-->함수의 인자로 전달시에도"-->마찬가지
//즉, 무거운 객체를 직접 전달하는 것이 아닌 함수에 참조로 전달한다.(매우 중요한 개념)