//ES6 Map 자료 구조 - 개념학습 및 사용법


//1. Map vs Set
//맵(Map)은 객체(Object)와 비슷
//	-->객체를 모델
//셋(Set)은 배열(Array)과 비슷
//	-->배열을 모델


//2. Map이란 무엇인가?
//Map()은 Key-value 쌍(pair)으로 이루어진 집합 또는 컬렉션
//데이터 자료구조의 한 형태
//	-->객체와 매우 유사하고 실제 객체를 모델로 파생된 자료구조 형태
//쉽게말해, 객체만으로는 데이터를 저장하고 다루기에 조금은 부족한 듯 하여
//	-->새로운 자료구조 형태를 하나 더 만든 것
//객체와 매우 유사하나 맵은 좀 더 다양한 자료형을 허용한다라는 점
//	-->차이점.


//3. 주요 메서드
//new Map()
//map.set(key, value)
//map.get(key)
//map.has(key)
//map.delete(key)
//map.clear()
//map.size


//4. 사용법
const map4 = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']])

//추가
map4.set('key4', 'value4')
console.log(map4)		//map객체라는 것을 기억
console.log(map4[0])	//key1, value1 --> undefined

//변환
const newMap4 = Array.from(map4)
console.log(newMap4)
console.log(newMap4[0])	//key1, value1 

//출력
// alert(map4.get('key3'))	//value3

//사이즈
// alert(map4.size)	//4

//가지고 있는지	
// alert(map4.has('key3'))	//ture
// alert(map4.has('key9'))	//false

//삭제
map4.delete('key4')
console.log(map4)

//삭제 --> All
//map4.clear()
//console.log(map4)