//reduce메서드 사용 시 내부에서의 변화되는 값과 리턴값을 표로 나타내보시오.
//이때, 초깃값 설정은 없다라고 전재헌다.

//1. 실습
const someArr = [10, 11, 12, 13, 14]

const result = someArr.reduce(function (acc, cur, idx, oriarr) {

	console.log("acc : " + acc + ", cur :" + cur + ", idx : " + idx)
	//할 일 처리	--> return
	return acc + cur

}, 0)

console.log('--------------------')
console.log('최종적으로 리턴된 값은 = ', result)
console.log('--------------------')