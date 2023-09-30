//예제2. 특정 숫자 이상의 값들만 더하시오?

//1. 실습
const number = [1, 2, 3, 4, 5, 6]
const result = number.reduce(function (acc, cur) {

	console.log("누적된 값 : " + acc, "현재 값 : " + cur)
	
	//할일 처리 --> return
	if (cur > 4) {
		acc = acc + cur
	}
	return acc

}, 0)	//초깃값(Initial Value) 지정에 따라 결과가 달라질 수 있으므로 주의!

console.log("--------------------result")
console.log(result)	//11
console.log("--------------------result")