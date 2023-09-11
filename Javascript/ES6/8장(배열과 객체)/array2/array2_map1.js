//map() 메서드

//1. map()메서드란 무엇인가?
//배열내 요소들을 반복하면서 1대1로 매핑지어 주는 것
//맵핑(mapping)	--> 하나의 값을 다른 값으로 1대1로 매핑시키는 것
//www.google.com --> IP주소



//2. 실습
//2-1. Function
// const testAr = [1, 2, 3, 4, 5]
// const testAr2 = testAr.map(function (val) {
// 	//할 일 처리-->return
// 	return val * 100

// })
// console.log(testAr)
// console.log(testAr2)	//100, 200, 300, 400, 500
// console.log(testAr)

//2-2. Arrow Function
// const testAr = [1, 2, 3, 4, 5]
// const testAr2 = testAr.map(v => v * 100)
// console.log(testAr)
// console.log(testAr2)	//100, 200, 300, 400, 500
// console.log(testAr)

//2-3. odd, even
const testAr = [1, 2, 3, 4, 5]
const testAr2 = testAr.map(val => {

	//할 일 처리 --> return
	if (val % 2) {	//val % 2=0 --> false
		return 'Odd Number'
	}
	return 'Even Number'
})

console.log(Boolean(0))	//false
console.log(Boolean(1))	//true
console.log('원본 배열 : '+testAr)
console.log('새로운 배열 : '+testAr2)	//100, 200, 300, 400, 500
console.log(testAr===testAr2)	//false --> map은 원본 배열을 건드리지 않고 새로운 배열을 생성
