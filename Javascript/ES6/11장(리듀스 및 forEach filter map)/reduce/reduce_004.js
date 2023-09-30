//예제3. 앞서 예제2의 코드를 화살표 함수를 사용하고 리턴을 한 줄로 작성해 보시오

//1. 실습
const number = [1, 2, 3, 4, 5, 6]
/* const result = number.reduce((acc, cur) => {
	//할 일 처리 -->return
	return (cur > 4 ? acc += cur : acc)
}, 0) */	//초깃값(Initial Value) 지정에 따라 결과가 달라질 수 있으므로 주의!

const result = number.reduce((acc, cur) => cur > 4 ? acc += cur : acc, 0)

console.log("--------------------result")
console.log(result)	//11
console.log("--------------------result")