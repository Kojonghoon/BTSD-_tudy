//특정 문자열을 배열과 객체로 변환하기 - 화살표 함수 + 구조분해 할당


//1. 구조 분해 할당
//객체나 배열 사용시 구조를 분해하여 사용할 수 있다.
//	--> split()메서드와 함꼐 많이 사용
// let testAr = "홍 길동".split(' ')
// console.log(testAr)	//["홍", "길동"]
// let key = testAr[0]
// let value = testAr[1]

// let [key, value] = "홍 길동".split(' ')
// console.log(key)
// console.log(value)

//뭐가 좋치?
//구조 분해 할당을 이용하면 배열의 요소에 접근 시 인덱스를 사용하지 않고도 각각 쪼개서 저장을 시킬 수 있다.
//이것을 활용하여 앞에서 다루었던 에제들에 적용하면 보다 짧게, 손쉽게 코드를 작성할 수 있다.


//2. 실습
//문자열
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 100"

//배열로 만들기
const frag = someStr.split(', ')
// console.log(frag)

//객체로 만들기
const dataObj = {}

//반복 --> forEach() 메서드 사용 --> 화살표 함수 + 구조분해 할당
frag.forEach(val => {
	//할 일 처리 --> return
	//피스별로 각각 쪼개기 + key, value 변수에 담기
	let [key, value] = val.split(' ')

	//숫자 판별 -->Number.isNaN()
	//let 변수 선언해 줬으므로 let value하면 안됌
	value = Number.isNaN(value) ? value : Number(value)

	//객체의 key : value 세팅
	dataObj[key] = value
})

//출력
console.log(dataObj)
console.log(dataObj.강감찬)
console.log(typeof dataObj.강감찬)
