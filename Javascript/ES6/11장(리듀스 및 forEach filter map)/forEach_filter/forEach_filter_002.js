///filter()메서드를 이용한 조건검색
//1. filter() 메서드를 사용하면 상황에 따라서는 forEach구문으로 순회하면서 조건 검색을 할 필요가 없는 경우가 있다.
//2. (문제)이번년도 3월달의 범죄 발생일과 직전년도 3월달의 범죄 발생일이 주어졌을 때 공통 일(day)과 다른 일(day)을 나타내 보시오


//1. 이번년도 3월달 범죄 발생일
const currentDays = [2, 13, 18, 23, 30]


//2. 직전년도 3월달 범죄 발생일
const lastCrimeDays = [
	'3-13-2020',
	'3-15-2020',
	'3-18-2020',
	'3-21-2020',
	'3-22-2020',
	'3-24-2020',
	'3-27-2020',
	'3-29-2020',
	'3-30-2020',
	'3-31-2020'
]
//alert(new Date('3-13-2020').getDate())	//13


//3. 
//console.log(currentDays.includes(13))	//true
const commonCrimeDays = lastCrimeDays.filter(function (ele) {

	//return
	return currentDays.includes(new Date(ele).getDate())	//  겹치는 일
	//return !currentDays.includes(new Date(ele).getDate())	//안겹치는 일

})


//4. 출력
console.log(commonCrimeDays)