//특정 문자열을 배열과 객체로 변환하기 - Number.isNaN() 사용해서 숫자 판별


//1. 문자열 --> 배열로 --> 객체로 변환.
//이때
//	--> 최종 객체로 변환 시 배열 요소내의 값들 중에서
//	--> 숫자만 판별해서 변환.


//2. 실습
//문자열
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 100"

//배열로 만들기	--> split()
const frag = someStr.split(', ')
// console.log(frag)	//['홍길동 80', '이순신 50', '강감찬 75', '김유신 90', '을지문덕 100']

//객체로 만들기
const dataObj = {};

//반복	--> 전통적인 방식
for (var i = 0; i < frag.length; i++) {

	//각각의 피스로 쪼개기 	--> 역시 배열
	let piece = frag[i].split(' ')	 //['홍길동', '80']
	// console.log("이름 : " + piece[0] + " 타입 : " + typeof piece[0])	//홍길동, string
	// console.log("점수 : " + piece[1] + " 타입 : " + typeof piece[1])	//80, string

	//key, value	--> piece[0], piece[1]
	let key = piece[0]	 		//string	//홍길동
	// let value = piece[1]		//string	//80
	// console.log(typeof value)	//string

	//if조건문을 사용하여 piece[1]요소가 숫자인지를 판별하여 value 값에 세팅
	//	--> Number.isNaN()메서드 사용.
	/* 
	let value;
	if (!Number.isNaN(Number(piece[1]))) {
		value = Number(piece[1])
	} else {
		value = piece[1]
	}
	 */

	//if조건문 --> 한줄로 작성 --> 삼항연산자
	let value = Number.isNaN(Number(piece[1])) ? piece[1] : Number(piece[1])
	dataObj[key] = value
}

console.log(dataObj)
console.log(dataObj.강감찬)	//75
console.log(typeof dataObj.강감찬)	//number