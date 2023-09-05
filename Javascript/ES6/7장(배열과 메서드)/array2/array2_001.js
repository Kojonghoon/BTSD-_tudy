//배열 사용시 몰라서는 안되는 유용한 메서드


//1. 객체 vs 배열
//	--> 비슷하면서도 다르다.
//객체
//	--> 특성(특징)들을 묶어줄 수 있고, 해당 객체의 동작(메서드)도 정의해서 묶어줄 수 있다.
//배열
//	--> 일반적으로 같은 타입의 객체들을 묶는게 일반적
//	--> JS, Python등의 동턱 타입 언어들은
//	--> 타입의 상관없이 바구니(배열)에 담음


//2. 타입에 상관없이 여러 종류의 타입을 바구니(배열)에 담는게 유용한가?
//일반적으로 권장하지 않고, 속도가 느리다
//그럼에도 불구하고, 편리성 때문에 동적 타입 언어들에서는 이러한 식으로
//자유롭게 타입에 상관없이 담을 수 있도록 한다.
//속도를 중요시하는 연산에서는 예를 들면, 넘파이 같은데서는 
//파이썬의 이러한 특징 대신에 한 타입만을 담아서 처리한다.
//	--> 속도 때문에


//3. 실습
/* 
	let ar = new Array()
	ar=[1,2,3];
 */

/* 
	const ar = new Array()
	ar.push(1);
	ar.push(2);
	ar.push(3);
	ar.push('korea')
 */

/* 
	let ar=[]
	ar=['korea']
 */

const ar = []
ar.push('korea')
ar.push('usa')
ar.push('china')
console.log(ar)

const arr = [1, 2, 3, 4, 5]
console.log(arr)



//4. 처음과 끝
console.clear()
console.log("-----------------처음과 끝")
const animals = ['tiger', 'alligator', 'elephant', 'dog', 'cat', 'sheep', 'hippo']

console.log(animals[0])					//tiger
console.log(animals[4])					//hippo-->cat
console.log(animals.length)				//5-->7
console.log(animals.length - 1)			//4-->6
console.log(animals[animals.length - 1])	//hippo



//5. undefined값을 가지는 경우는??
//	--> 인덱스 범위를 벗어나는 경우
console.log(animals[5])					//sheep
console.log(animals[7])					//undefined
console.log(animals[0])					//tiger
console.log(animals['tiger'])			//undefined 



//6. 반복과 출력
// 1)전통적인 for 반복문
// 2)for...in, for...of 반복문
// 3)배열명.forEach()메서드
// 4)Spread Operator
console.clear()
console.log("-----------------for")

//	6-1. for
for (let i = 0; i < animals.length; i++) {
	console.log(animals[i])
}

//6-2. for...in
console.log("-----------------for...in")
for (let i in animals) {
	console.log(i)	//index --> 0,1,2,3,4,5,6
}

console.log("-----------------for...of")
for (let i of animals) {
	console.log(i)	//value --> 'tiger', 'alligator', 'elephant', 'dog', 'cat', 'sheep', 'hippo'
}

//6-3. forEach-->function
//const animals = ['tiger', 'alligator', 'elephant', 'dog', 'cat', 'sheep', 'hippo']
console.log("-----------------forEach()")

//function
animals.forEach(function (item, idx, oriarr) {
	console.log(item, idx, oriarr)
})

//Arrow Function(=>)
console.log("-----------------forEach() --> Arrow Function")
animals.forEach((item) => console.log(item))

//6-4. Spread Operator(펼침 연산자)
console.log("-----------------Spread Operator")
console.log(...animals)



//7. 삽입과 삭제
//push(), pop()
//	--> 뒤에서 삽입하고 삭제
//unshift(), shift()
//	--> 앞에서 삽입하고 삭제  
//	--> shift는 기본적으로 배열의 정렬
//	--> 옮기면서 수행
//	--> 속도가 느리가
//	--> 권장X
let testAr = [1, 2, 3, 4, 5]
testAr.push(6)
testAr.push(7)

console.clear()
console.log("-----------------push(), pop()")
console.log(testAr)			//1,2,3,4,5,6,7

testAr.pop()
testAr.pop()
console.log(testAr)			//1,2,3,4,5

testAr.unshift('a')
console.log(testAr)			//a,1,2,3,4,5

testAr.shift()
testAr.shift()
console.log(testAr)			//2,3,4,5



//8. split()메서드
//기능
//	--> 문자열을 배열로 리턴
//	--> 즉, 문자열에서 특정한 구분자를 기준으로 잘라내서 새로운 배열을 리턴.
//사용
//	-->문자열.split(separator,limit)
console.clear()
console.log("-----------------split() 1")
let someStr = "진도는 한국에서 제주도와 거제도 다음으로 큰 섬이다."
let splitted = someStr.split(" ", 3)
console.log(splitted)		//진도는, 한국에서, 제주도와

console.log("-----------------split() 2")
let someStr2 = "진도, 제주도, 거제도, 독도, 마라도"
let splitted2 = someStr2.split(", ", 4)
console.log(splitted2)

console.log("-----------------split() 3")
let someStr3 = "진도, 제주도, 거제도, 독도, 마라도"
let splitted3 = someStr3.split(", ")	//분할 갯수 옵션이 지정되지 않으면 문자열 전부를 잘라서 배열로 리턴
console.log(splitted3)
console.log(splitted3.length)					//5
console.log(splitted3[splitted3.length - 1])	//마라도



//9. slice()메서드
//	--> 비교하여 splice()메서드
//slice, splice
//	-->둘은 비슷하나 큰 차이점이 있다.
//	-->slice()메서드는 원본 배열을 수정하지 X
//	--> 즉, 새로운 배열을 리턴

//	-->splice()메서드는 원본 배열을 수정

//9-1. 기본 사용법
//slice(start[,end])
//end옵션이 중요한데
//	--> 지정한 end전까지를 잘라냄(이게 중요!)

console.clear()
let sliceAr = ['tiger', 'alligator', 'elephant', 'dog', 'cat', 'sheep', 'hippo']

//배열명.slice(1)
//	-->지정한 인덱스 1 포함해서 그 뒤로는 모두 잘라냄

//배열명.slice(1,1)
//	--> 지정한 인덱스 1 포함해서 1(end-1)개 까지 잘라냄
console.log("-----------------slice() 문자열")

let sliceAr1 = sliceAr.slice(1)
console.log(sliceAr1)	//'alligator', 'elephant', 'dog', 'cat', 'sheep', 'hippo'

let sliceAr2 = sliceAr.slice(1, 3)
console.log(sliceAr2)	//'alligator', 'elephant'

console.log("-----------------slice() 숫자")
const sliceArNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('원본 배열 = ' + sliceArNums)			//[1,2,3,4,5,6,7,8,9,10]

const sliceArNums1 = sliceArNums.slice(5)
console.log('새로운 배열 = ' + sliceArNums1)			//[6,7,8,9,10]

console.log('원본 배열 = ' + sliceArNums)			//[1,2,3,4,5,6,7,8,9,10]



//10. splice()메서드
//배열의 기존 요소를 삭제하거나 교체하고자 할 때
//	--> 새로운 요소를 추가
//	--> 배열의 값을 변경
//특징1
//	--> 원본을 수정
//특징2
//	-->잘라내고(삭제하고) 이어 붙이기 기능

//기본 사용법
//splice(___, ___, ___, ___)
//splice(start, count(del), 값(item), 값(item))
console.clear()
console.log("-----------------splice()")

//원본배열
const oriAr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log('원본 배열 : ' + oriAr10)

//10-1
// console.log("-----------------splice() 10-1")
// const spliceAr1 = oriAr10.splice(3)
// console.log(spliceAr1)	//4,5,6,7,8,9,10
// console.log("원본 배열 : " + oriAr10)	//1,2,3

//10-2
// console.log("-----------------splice() 10-2")
// const spliceAr2 = oriAr10.splice(4, 3)
// console.log(spliceAr2)	//5,6,7
// console.log("원본 배열 : " + oriAr10)				//1,2,3,4,8,9,10
//console.log("원본 배열 길이 : " + oriAr10.length)	//7

//10-3
// console.log("-----------------splice() 10-3")
// const spliceAr3 = oriAr10.splice(3, 2, 'a', 'b', 'c')
// console.log(spliceAr3)	//4,5
// console.log("원본 배열 : " + oriAr10)				// 1,2,3,a,b,c,6,7,8,9,10
// console.log("원본 배열 길이 : " + oriAr10.length)	//10

//10-4
console.clear()
console.log("-----------------splice() 10-4")
const oriStrings = ['홍길동', '이순신', '강감찬', '김유신', '임꺽정']
console.log(oriStrings)

// //지정한 인덱스를 포함해서 2개를 삭제하고
// //	-->새로운 '세종대왕', '을지문덕'을 추가
// const oriStrings1 = oriStrings.splice(2, 2, '세종대왕', '을지문덕')
// console.log(oriStrings1)	//'강감찬', '이순신'
// console.log(oriStrings)		//'홍길동', '이순신', '세종대왕', '을지문덕', '임꺽정'

//마이너스 지정
// const oriStrings2 = oriStrings.splice(-2)
// console.log(oriStrings2)	//김유신, 임꺽정
// console.log(oriStrings)		//홍길동, 이순신, 강감찬

//0지정
const oriStrings3 = oriStrings.splice(3, 0, '광개토대왕')
console.log(oriStrings3)		//지정한 인덱스 자리에 삭제하는 것 없이 --> 새로운 요소를 삽입
console.log(oriStrings)			//'홍길동', '이순신', '강감찬', '광개토대왕', '김유신', '임꺽정'



//11. 배열 붙이기 concat() 메서드
//숫자
console.clear()
const myArr1 = [1, 2, 3, 4]
const myArr2 = [5, 6, 7, 8]

const myArr12 = myArr1.concat(myArr2)
console.log(myArr1)	//1,2,3,4
console.log(myArr2)	//5,6,7,8
console.log("-----------------concat() 숫자")
console.log(myArr12)	//1,2,3,4,5,6,7,8

//문자열
const str1 = "Hello"
const str2 = "JavaScript"
console.log("-----------------concat() 문자열")
console.log(str1.concat(' ', str2))		//Hello JavaScript
console.log(str1.concat(', ', str2))	//Hello, JavaScript
console.log("-----------------concat() 거꾸로")
console.log(str2.concat(' ', str1))		//JavaScript Hello
console.log(str2.concat(', ', str1))	//JavaScript, Hello

console.log("-----------------concat() 배열 요소를 이어 붙이기")
const someArList = ['안녕~', ' ', '난', ' ', '뽀로로야~', '!!']
console.log("".concat(...someArList))	//안녕~난뽀로로야~!!



//12. 인덱스 몇 번쨰에 있는지 찾기 -->indexOf()메서드
console.clear()
console.log("-----------------indexOf()")

const greatMan = ['홍길동', '이순신', '강감찬', '김유신', '임꺽정']
console.log(greatMan.indexOf('강감찬'))		//2
console.log(greatMan.indexOf('임꺽정'))		//4
console.log(greatMan.indexOf('임걱정'))		//-1	--> 없는 값을 indexOf()메서드로 찾으면 -1이 리턴. (중요!!)

//알파벳찾기
console.clear()
let abcAr1 = "ABCDEFGHIJKLMN"
console.log("-----------------H의 인덱스는?")
console.log(abcAr1.indexOf('H'))			//7

//역순으로 찾기 --> lastIndexof()
let abcAr2 = "ABCDEFGHIJKLHMN"
console.log("-----------------H의 인덱스는? 역순")
console.log(abcAr2.lastIndexOf('H'))		//12

//대소문자 구분 --> 한다.(디폴트)
let abcAr3 = "ABCDEFGHIJKLHMN"
console.log("-----------------H의 인덱스는? 대소문자 구분")
console.log(abcAr3.lastIndexOf('h'))		//-1

//대(소)문자 변환 후 --> indexOf 사용
let abcAr4 = "abcdABCD"
console.log("-----------------대소문자 변환")
console.log(abcAr4.lastIndexOf('A'))				//4
console.log(abcAr4.toUpperCase().indexOf('A'))		//0
console.log(abcAr4.toUpperCase().lastIndexOf('A'))	//4



//13. indexOf옵션
//	--> indexOf("찾을 특정 값(value)", "시작할 위치(position")
console.clear()
console.log("-----------------시작 위치 옵션")

const nums = ['k', 'o', 'r', 'e', 'a', 'u', 's', 'a']
console.log(nums.indexOf('a'))		 //4
console.log(nums.indexOf('a', 2))
//	-->2번째 인덱스 이후의 a의 인덱스	//4
console.log(nums.indexOf('a', 6))
//	-->6번째 인덱스 이후의 a의 인덱스	//7

console.log("-----------------시작 위치 옵션-문자열")
const strs13 = "Hello, World~!!"
console.log(strs13.indexOf('o'))		   //4
console.log(strs13.indexOf('o', 5))
//	-->5번째 인덱스 이후의 o의 인덱스	     //8
console.log(strs13.indexOf('o', 9))
//	-->9번째 인덱스 이후의 o의 인덱스	     //-1



//14. 특정 번쨰에 있는 값의 인덱스 찾기 
//	--> 두번째 4 찾기 세번째 4찾기
console.clear()
console.log("-----------------특정 번째 인덱스 찾기")
const numbers = [2, 3, 4, 3, 5, 8, 5, 3, 4, 8, 4, 2, 1]
console.log(numbers)

console.log(numbers.indexOf(4))		//2
console.log(numbers.indexOf(4, 3))	//8
// console.log(numbers.indexOf(4,numbers.indexOf(4)+1))	//8
console.log(numbers.indexOf(4, 9))	//10
// console.log(numbers.indexOf(4, numbers.indexOf(4, numbers.indexOf(4) + 1)+1))	//10



//15. 반복문 사용하여 특정 번쨰 값의 인덱스 찾기
console.clear()
console.log("-----------------특정 번째 값의 인덱스 찾기(반복문)")
// const nums15 = [2, 3, 4, 3, 5, 1, 7, 5, 3, 2, 6, 4, 3, 3, 6, 2, 1, 5, 8]
// const nums15 =  ['홍길동', '이순신', '홍길동', '김유신', '홍길동']
// const nums15 = "Welcome, Hello World~"
const nums15 = "abcddakaabcdhejhjasgdtaawehabcdghsd"

// const searchNumber = "3"
// const searchNumber = "홍길동"
const searchNumber = "abcd"
let startPosition = 0
let lastResult = []

while (true) {
	let idxRst = nums15.indexOf(searchNumber, startPosition)
	//	있으면 인덱스 반환, 없으면 -1 반환

	//조건문 --> 반환된 인덱스가 -1이면 loop종료
	if (idxRst == -1) {
		break;
	}

	lastResult.push(idxRst)
	//찾은 인덱스는 결과 변수에 푸쉬

	startPosition = idxRst + 1
	//찾은 것 그 다음부터 순회를 이어가야 하니까 
	//	--> 찾은것에 1더해서 다시 순회
}
console.log(nums15)
console.log(`찾고자 하는 ${searchNumber}의 인덱스는 = ` + lastResult)
console.log(`출현 빈도수 = ` + lastResult.length)



//16. 배열에 특정 요소가 포함되어 있는지 없는지 알기
//	--> includes()메서드
console.clear()
console.log("-----------------includes()")
const testAr16 = ['korea', 'usa', 'china', 'japan', 'canada']
console.log(testAr16)

console.log(testAr16.includes('usa'))		//true
console.log(testAr16.includes('mexico'))	//false



//17. 배열내 요소들을 하나로 묶어주기
//	--> 그때, 문자열(String)타입으로 묶어주기
//	--> join()
console.clear()
console.log("-----------------join()")
const testAr17 = ['korea', 'usa', 'china', 'japan', 'canada']
console.log(testAr17)

console.log(testAr17.join())
//아무 옵션도 넣지 않고 호출하면 배열 요소 각각을 콤마(,)로 공백도 없이 묶어줌
console.log('결과 타입은 = ' + typeof testAr17.join())

console.log(testAr17.join('-'))
console.log(testAr17.join('+'))
console.log(testAr17.join('*'))
console.log(testAr17.join('/'))
console.log(testAr17.join(' '))
//넣어주는 구분자로 각각의 요소를 구분하여 하나의 문자열로 이어줌

//요소가 undefined, null이 있을 때 join() 메서드를 사용하면?
//	--> 빈 문자열로 연결
console.log("-----------------join()-undefined, null")
const testAr17_1 = ['korea', 'usa', undefined, 'china', 'japan', null, 'canada']
console.log(testAr17_1)
console.log(testAr17_1.join(', '))

//빈 배열이면?
//	--> 빈 문자열로 반환
console.log("-----------------join()-empty")
const testAr17_2 = []
console.log(testAr17_2)

console.log(testAr17_2.join(','))
//구분자를 넣어봤자 상관없이 결과는
//	--> ""
console.log(typeof [].join(''))	//String



//18. 배열 내 요소들을 거꾸로 출력하기
//	--> reverse()
console.clear()
console.log("-----------------reverse()")
const testAr18 = ['a', 'b', 'c', 'd', 'e']
console.log(testAr18)

console.log(testAr18.reverse())	//e,d,c,b,a	
console.log(testAr18)
//원본 배열을 가지고 작업처리를 하기 때문에
//	--> 거꾸로 되어져 있음



//19. 조건에 맞는 첫번째 요소 찾기
// -->find()
// -->명세서
// -->콜백함수 사용
console.clear()
console.log("-----------------find()")
const testAr19 = [56, 34, 90, 89, 95]
console.log(testAr19)

//find()메서드는 조건에 마족하는 첫 번째 요소의 값을 반환
//	-->그런게 없다면 undefined 반환
const found = testAr19.find(function (ele) {

	//할 일 처리 --> return
	return ele >= 90
})
//const found = testAr19.find(ele => ele >= 90)
console.log(found)	//100 <--이거를 헷갈리지 않도록 주의


//find() vs filter() 비교(차이점)
//find()메서드
//	--> 찾는 즉시 첫 번째 요소의 값을 반환. 더 이상 순회하지 X
//filter()메서드
//	--> 계속 순회O
//	--> 조건에 맞는 값을 다 찾아줌
console.log("-----------------find() vs filter()")
const arData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3]
let arData_loop_count = 0

/* 
//반복 횟수
const rst1 = arData.filter(ele => {
	//할 일 처리 return
	arData_loop_count++
	return ele === 3
})
console.log(`해당 메서드의 반복 횟수는 = ` + arData_loop_count)	//11
console.log(rst1)	//배열로 리턴 [3, 3]
console.log(typeof rst1)	//object(array)
 */

const rst2 = arData.find(ele => {
	//할 일 처리 return
	arData_loop_count++
	return ele === 3
})
console.log(`해당 메서드의 반복 횟수는 = ` + arData_loop_count)	//11
console.log(rst2)											  //값으로 리턴 3
console.log(typeof rst2)									  //number



//20. 객체를 담고 있는 배열에서 특정 객체 찾기
//	--> find()
console.clear()
console.log("-----------------find() - 객체찾기")
const cars = [
	{ name: '테슬라', price: 25000 },
	{ name: '벤츠', price: 35000 },
	{ name: '테슬라', price: 55000 },
	{ name: '벤츠', price: 66000 },
	{ name: '아우디', price: 45000 },
]

//화살표 함수 (=>)
console.log("-----------------find() - 화살표 함수")
const searchValue3 = cars.find(ele => ele.name === '벤츠')
console.log(searchValue3)
const searchValue4 = cars.filter(ele => ele.name === '벤츠')
console.log(searchValue4)
const searchValue5 = cars.filter(ele => ele.price >40000)
console.log(searchValue5)


//콜백함수 내부에
console.log("-----------------find() - 콜백 함수 내부에")
const searchValue2 = cars.find(function (ele) {
	//할 일 처리	--> return
	return ele.name === '아우디'
})
console.log(searchValue2)


//콜백함수 외부에
function searchValue1(car) {
	return car.name === "테슬라"
}
console.log("-----------------find() - 콜백함수 외부에")
console.log(cars.find(searchValue1))	//테슬라, 25000
console.log(cars.filter(searchValue1))	//테슬라, 25000 / 테슬라, 25000






