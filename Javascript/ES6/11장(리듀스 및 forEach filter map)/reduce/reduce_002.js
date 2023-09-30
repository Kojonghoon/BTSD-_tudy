//예제1. 학생 5명의 성적이 있는데 각 학생의 점수를 모두 더한 총합을 계산하시오?

const members = [45, 32, 78, 66, 99]




const memTotlaSum = members.reduce(function (acc, cur) {

	//할 일 처리	--> return
	console.log("누적된 값 : "+acc, "현재 값 : "+cur)
	return acc + cur

},0)

console.log("--------------------학생들 점수 총합")
console.log(memTotlaSum)	//320
console.log("--------------------학생들 점수 총합")