//map() 메서드 활용 - 특정 문자열을 배열과 객체로 변환(구조 분해 할당)

//1. 문자열 --> 배열로 --> 객체로 변환
//이때 --> 최종 객체로 변환 시 배열 요소 내의 값들 중에서 --> 숫자만 판별해서 변환

//2. 실습
//문자열
const someStr = "홍길동 80, 이순신 50, 강감찬 75, 김유신 90, 을지문덕 100"

//배열로 만들기
const frag = someStr.split(', ')

//객체로 만들기
// const dataObj = {}

//반복 --> map() --> 콜백함수 내에서 처리한 결과를 1:1 매핑해서 배열로 리턴 --> 결과 변수를 만들어 받음
const result = frag.map(val => {
	let [k, v] = val.split(' ')
	return { k, v: Number.isNaN(Number(v)) ? v : Number(v) }
	//return { k, v: Number.isNaN(80) ? v : Number(v)}
	//dataObj[key]=value

})

//출력
console.log(result)
console.log(frag)


//문자열 
//	--> frag(원본배열) 
//	--> map()
//	--> 객체의 형채 
//	--> 우리가 원하는 형태X
//	--> 우리가 원하는 객체의 형태({홍길동 : 80})


//원하는 형태의 객체로 바꾸기 
const result2 = result.map(obj => {
	//할 일 처리 --> return
	let newObj = {}
	newObj[obj.k] = obj.v
	return newObj
})

console.log('==========================')
console.log(result2)








