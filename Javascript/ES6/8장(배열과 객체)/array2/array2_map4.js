//map()메서드와 reduce()메서드 동시 활용 - 특정 문자열을 배열과 객체로 변환

//1. 문자열 --> 배열로 --> 객체로 변환.
//이때 --> map()메서드와 reduce()메서드를 함께 사용이 가능(Method Chainig)

//2. 실습
//문자열
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 100"

//배열로 만들기
const frag = someStr.split(', ')
console.log(someStr)

//객체로 만들기
// const dataObj={}

//반복 --> map()-->reduce()
const result = frag.map(val => {

	//할 일 처리 --> return
	let [k, v] = val.split(' ')
	return { k, v: Number.isNaN(Number(v)) ? v : Number(v) }

})

const result2 = result.reduce((acc, obj) => {
	
	//할 일 처리 --> retuarn
	acc[obj.k]=obj.v
	return acc
	
},[])

console.log(result)		//배열
console.log('===================')
console.log(result2)	//객체