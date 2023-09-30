//reduce메서드를 사용하여 새로운 배열에 특정 조건에 맞는 배열 요소 값만 반환하는 코드를 작성하시오.
//특정 조건에 맞는 
//	--> 짝수, 홀수 구하기, 특정 수 보다 큰(작은) 수만 저장하기...

//1. 실습
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = numbers.reduce((acc, cur) => {

	//할 일 처리	--> return
	//짝수(홀수) 구하기
	//if (cur % 2 != 0) {		//홀수
	//if (cur % 2 == 0) {		//짝수
	if (cur > 5) {				//5 보다 큰 수
		acc.push(cur)
	}
	return acc

}, [])

console.log(result)	//[1,3,5,7,9]