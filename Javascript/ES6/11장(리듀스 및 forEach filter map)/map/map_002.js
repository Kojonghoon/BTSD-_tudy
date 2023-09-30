//ES6 Map 자료 구조 - 다양한 메서드

//1. 객체와 맵의 차이점
//	-->다양한 자료형 허용(map)
//객체는 기본적으로 키(key)에 문자형이나 심볼형에 속하지 않는 값을 사용하게 되면
//	-->문자열로 자동 형 변환
//그러나 맵은 그러지 않는다.

const testObj = { 1: '홍길동', 2: '이순신' }

console.log(testObj[1])		//홍길동
console.log(testObj["1"])	//홍길동


//2. entries()
//	-->Iterator(반복자) 객체를 반환
//	-->next()메서드 사용
const map2 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']])

const iterator = map2.entries()

//next()메서드 사용이 가능
console.log('--------------------entries()')
console.log(iterator.next().value)	//key1, value1
console.log(iterator.next().value)	//key2, value2
console.log(iterator.next().value)	//key3, value3
console.log(iterator.next().value)	//key4, value4


//3. key()
//	-->Iterator(반복자) 객체를 반환
//	-->next()메서드 사용
const iterator_key = map2.keys()

console.log('--------------------iterator_key')
console.log(iterator_key.next().value)	//key1
console.log(iterator_key.next().value)	//key2
console.log(iterator_key.next().value)	//key3


//4. values()
//	-->Iterator(반복자) 객체를 반환
//	-->next()메서드 사용
const iterator_val = map2.values()

console.log('--------------------iterator_val')
console.log(iterator_val.next().value)	//value1
console.log(iterator_val.next().value)	//value2
console.log(iterator_val.next().value)	//value3


//위에서 본 것처럼 map은 반복이 가능한 객체로서 for..of반복문과 Spread연산자 등을 사용하여 순회가 가능
//즉, for..of와 Spread Operator
//	-->피연산자가 되어질 수 있다.


//5. for..of 반복 출력
console.log('--------------------for..of')
for (let i of map2) {
	console.log(i)
}


//Spread Operator
console.log('--------------------Spread Operator')
const a = [...map2]
console.log(a)


//객체(Object)
const man = { 1: '홍길동', 2: '이순신', 3: '강감찬' }
console.log('--------------------man Object')
for (let i in man) {
	console.log(i)
}