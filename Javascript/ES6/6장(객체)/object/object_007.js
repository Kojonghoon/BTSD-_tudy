//객체(Object) - 객체 내 객체 만들기

//1. 객체의 멤버는 다양한 타입을 가질 수 있다.
//따라서, 처음에 만든 객체에 또 다른객체를 만들어서 사용할 수 있다.
//	--> 중첩

//2. 실습
const person = {
	name: "홍길동",
	age: 20,

	credits: {
		english: 90,
		math: 50,
		philosophy: 100
	}
}

//3. 중첩된 객체를 참조할 때는 
//	--> 점(.)연산자를 두 번 연속해서 사용.
console.log(`반갑습니다. ${person.name}[${person.age}]회원님~ 성적은 다음과 같습니다.`)
console.log(`영어 점수는 ${person.credits.english}점 입니다.`)
console.log(`수학 점수는 ${person.credits.math}점 입니다.`)
console.log(`철학 점수는 ${person.credits.philosophy}점 입니다.`)