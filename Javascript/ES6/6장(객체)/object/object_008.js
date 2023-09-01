//객체(Object) - 객체 내 함수 만들기

//1. 객체의 멤버는 다양한 타입을 가질 수 있다.
// 따라서, 처음에 만든 객체에 함수를 만들어 넣을 수도 있다.
//	-->이때, 객체내에 포함된 함수
//	-->메서드(Method)
//그럼 name, age??
//	-->속성(property)
//	-->헷갈리면 '특성', '특징' 정도로 생각하자

//2. 객체의 주요 구성요소
//속성
//	-->객체의 주요 특성(특징)을 정의.
//메서드
//	-->객체의 어떤 동작이나 처리를 구현 담당

//3.실습
let person = {
	name: "홍길동",
	age: 20,

	credits: {
		english: 90,
		math: 50,
		philosophy: 100
	},

	//함수추가
	showMessage: function () {
		console.log(`안녕하세요~ 제 이름은 ${this.name}입니다. 나이는 ${this.age}살 입니다.`)
	},
}

// person.showMessage()

console.log("1번째 호출")
person.showMessage()

//4. (문제)객체끼리 할당 후 person 객체를 null주면??
let mankind = person
console.log("2번째 호출")
mankind.showMessage()

person = null	//null-->값이 없다.
//person.showMessage()	//Err

console.log("3번째 호출")
mankind.showMessage()	

// let human = mankind
// mankind = null
// console.log("3번째 호출")
// human.showMessage()		//Err
