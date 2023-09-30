//ES6 set()자료 구조 - 반복

//!
let ar = ['a', 'b', 'c', 'd', 'e']

console.log('--------------------for')
//1. 전통적인 for반복문
for (let i = 0; i < ar.length; i++) {
	console.log(ar[i])
}
console.log('--------------------for')


//2. forEach()메서드를 사용한 반복
console.log('--------------------forEach()')
ar.forEach(function (e) {
	console.log(e)
})
console.log('--------------------forEach()')

console.log('--------------------ArrowFunction')
ar.forEach(val => console.log(val))
console.log('--------------------ArrowFunction')


console.clear()
//3. Set 자료구조의 다양한 메서드
//	--> keys(), values()
let testSet3 = new Set(["tiger", "lion", "dog", "cat"])
testSet3.add("hippo")

console.log(testSet3)	//{'tiger', 'lion', 'dog', 'cat', 'hippo'}

let arr = [...testSet3]
console.log(arr)		//['tiger', 'lion', 'dog', 'cat', 'hippo']
console.log(arr[0])		//tiger
console.log(arr[4])		//hippo

console.clear()

//keys() 메서드
//	-->Iterator(반복자) 객체를 반환
//	-->next(메서드)
console.log('--------------------keys()')

const key_itr = testSet3.keys()

console.log(key_itr.next().value)	//tiger
console.log(key_itr.next().value)	//lion
console.log(key_itr.next().value)	//dog


//values()메서드
//	-->Iterator(반복자) 객체를 반환
//	--> next()메서드
console.log('--------------------values()')

const val_itr = testSet3.values()

console.log(val_itr.next().value)	//tiger
console.log(val_itr.next().value)	//lion
console.log(val_itr.next().value)	//dog

console.clear()


//4. for..of 반복문으로 출력
for (let i of testSet3) {
	console.log(i)
}

console.clear()

//5. entries()메서드
let testSet5 = new Set()
testSet5.add('홍길동')
testSet5.add('이순신')
testSet5.add('강감찬')
console.log(testSet5)

const entries = testSet5.entries()
for(let i of entries){
	console.log(i)
}

//삽인 순으로 Set요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환

