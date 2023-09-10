//특정 문자열을 배열과 객체로 변환하기 - forEach()메서드 사용


//1. 문자열 --> 배열로 --> 객체로 변환.
//이때 --> 최종 객체로 변환 시 배열 요소내의 값들 중에서
//	--> 숫자만 판별해서 변환.


//2. 실습
//문자열
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 100"

//배열로 만들기
const frag = someStr.split(', ')
console.log(frag)

//객체로 만들기
const dataObj = {}

//반복 --> forEach() 메서드 사용 --> forEach(val[, idx])
frag.forEach(function (val) {
	//할 일 처리 --> return
	//피스별로 각각 쪼개기
	let piece = val.split(' ')

	//key, value 변수에 담기
	let key = piece[0]
	// let value = piece[1]	//"80" --> String

	//숫자 판별 -->Number.isNaN()
	let value = Number.isNaN(Number(piece[1])) ? piece[1] : Number(piece[1])

	//객체의 key : value 로 셋팅
	dataObj[key] = value

})

//출력
console.log(dataObj)
console.log(dataObj.강감찬)
console.log(typeof dataObj.강감찬)
