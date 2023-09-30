//Object.entries() 메서드 -Map객체로 변환

//1. Data
const someData = {
	1: { "name": "홍길동", "age": 20, "nationality": "korea" },
	2: { "name": "이순신", "age": 20, "nationality": "usa" },
	3: { "name": "을지문덕", "age": 20, "nationality": "canada" }
}
console.log(someData)	//Object

//2. 데이터를 Map객체로 변환
//	--> entries()사용
const entries = Object.entries(someData)
console.log(entries)	//Array
// console.log(typeof entries)	//object

const jsonMap = new Map(entries)
console.log(jsonMap)


//3. 맵 객체
//	--> 반복이 가능한 객체
//	--> 내장된 Iteraotr(반복자)덕분
//	--> for..of반복문 사용이 가능
console.log('--------------------for .. of')
for (let i of jsonMap) {
	console.log(i)
}


//4. forEach()
console.log('--------------------forEach()')
jsonMap.forEach(function (value, key) {
	console.log(`${key}:${value.name} - ${value.age} - ${value.nationality}`)
})


//2-2
console.log("--------------------test")
Object.entries(someData).forEach(([key, value])=>console.log(`${key}:${value.name}`))