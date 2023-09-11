//map() 메서드 활용 - 배열 내 객체를 원하는 형태로 바꾸기

//1. 주어진 형태
const testAr = [
	{ key: '홍길동', value: 80 },
	{ key: '이순신', value: 70 },
	{ key: '강감찬', value: 90 },
	{ key: '을지문덕', value: 50 }
]

//2. 바꾸기 --> {홍길동:80}
const changeNewAr = testAr.map(obj => {
	
	//할 일 처리 --> return
	let newObj = {}	//map()메서드 밖에다 선언하면 X --> 결과가 다름름
	newObj[obj.key] = obj.value
	return newObj

})
console.log(testAr)
console.log(changeNewAr)
console.log(changeNewAr[0].홍길동)















