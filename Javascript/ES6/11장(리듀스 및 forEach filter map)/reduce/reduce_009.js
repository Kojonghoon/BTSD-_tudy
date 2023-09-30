//배열 요소 내 중복된 문자열(숫자)의 빈도 수 체크하기

//1. 배열
//const someArr = ['Python', 'Python', 'HTML', 'CSS', 'JavaScript', 'Python', 'CSS', 'JavaScript', 'JAVA', 'JavaScript']
const someArr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,5,7,9,9]


//2. 실습
const result = someArr.reduce((acc, cur) => {

	//할 일 처리 --> 단어 빈도 수 체크 --> return
	//조건문
	if (acc[cur] != undefined) {
		acc[cur] += 1
	} else {
		acc[cur] = 1
	}
	return acc

}, {})

console.log(result)