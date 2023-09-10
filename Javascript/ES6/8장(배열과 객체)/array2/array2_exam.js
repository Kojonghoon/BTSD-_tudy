//isNaN() vs Number.isNaN()비교
//생각보다 헷갈리는 영역
//	--> 한 번은 넘어가야 하는 산

//[!] : 이건 꼭 기억하자!
//isNaN()
//어떤 값이 숫자인지 아닌지를 판별한 경우 많이 사용
//예를 들어, 숫자 계산시 문자가 삽입되면 NaN상태가 됨, 출력 전에 NaN인지 아닌지를 확인
//숫자면 false를 반환
//	--> 숫자가 아니면 (예를 들면 문자열) true
//	--> 조금 직관적이지 못함
//	--> ! 붙여서 사용하는게 더 직관적.
//NaN(Not a Number)도 타입이다.
//	--> Number
console.log('-----------------------------------NaN의 타입')
console.log('NaN의 타입 = ' + typeof NaN)	//number


//Number.isNaN()
//ES6에 추가
//	--> 기존(isNaN or global isNaN)의 문제점을 해결하고자 추가.
//전역은 아님. 오래된 구 브라우저(IE) 등에서는 지원이 안됨
//	--> 필요한 경우 폴리필을 상용해서 지원하는 것은 가능
//기능
//	--> 주어진 인자가 NaN인지만을 판별
//	--> Only숫자형에서만.
//즉, 
//isNaN()
//	--> 인자가 숫자인지 아닌지의 여부를 불리언 값으로 반환
//Number.isNaN()
//	--> 인자가 NaN인지 아닌지의 여부만을 불리언 값으로 반환
console.log('-----------------------------------간략 테스트')
let a = "NaN"
let b = NaN
let c = "홍길동"
let d = "20"
let e = null

//숫자와 null false
console.log(isNaN(a))	//true
console.log(isNaN(b))	//true
console.log(isNaN(c))	//true
console.log(isNaN(d))	//false
console.log(isNaN(e))	//true --> false

console.log('-----------------------------------')
//인자가 NaN인지만을 판별
console.log(Number.isNaN(a))	//false
console.log(Number.isNaN(b))	//true
console.log(Number.isNaN(c))	//false
console.log(Number.isNaN(d))	//false
console.log(Number.isNaN(e))	//false



//1. 기본 사용법
console.clear()
console.log('-----------------------------------기본')
console.log(isNaN(100))			//false
console.log(isNaN(10.0))		//false
console.log(isNaN("홍길동"))	//true



//2. !붙이는게 직관적
console.log('-----------------------------------더 직관적')
console.log(!isNaN(100))		//true
console.log(!isNaN(10.0))		//true
console.log(!isNaN("홍길동"))	//false



//3. 조금 이상한 경우
console.log('-----------------------------------조금 이상한 경우')
console.log('isNaN("100") : ' + isNaN("100"))		//false 
//--> 기본적으로 isNaN()함수는 인자를 Number로 변환 -->false
console.log('isNaN("10.0") : ' + isNaN("10.0"))		//false
console.log('isNaN("홍길동") : ' + isNaN("홍길동"))	//true
console.log('isNaN("이순신") : ' + isNaN("이순신"))	//true
console.log('-----------------------------------')
console.log(isNaN("9*8"))	//true
//--> * + - /와 같은 연산 기호는 따옴표 내에서 문자 처리 -->true
console.log(isNaN("9+8"))	//true
console.log(isNaN("9-8"))	//true
console.log(isNaN("9/8"))	//true
console.log(Number("0/0"))	//NaN
console.log(isNaN("0/0"))	//true

console.log(Number(9 * 8))	//72
console.log(Number(0 / 0))	//NaN



//4. 아주 이상한 경우
console.log('-----------------------------------아주 이상한 경우')
console.log("Number(null) : " + Number(null))			//0
console.log("isNaN(null) : " + isNaN(null))				//false

console.log("Number(true) : " + Number(true))			//1
console.log("isNaN(true) : " + isNaN(true))				//false

console.log("Number(false) : " + Number(false))			//0
console.log("isNaN(false) : " + isNaN(false))			//false

console.log("Number('') : " + Number(''))				//0
console.log("isNaN('') : " + isNaN(''))					//false

console.log("Number('') : " + Number(undefined))		//NaN
console.log("isNaN(undefined) : " + isNaN(undefined))	//true

console.log("Number('') : " + Number(NaN))				//NaN
console.log("isNaN(NaN) : " + isNaN(NaN))				//true



//5. Number객체로 출력
console.clear()
console.log('-----------------------------------Number 객체로 출력')
console.log(Number(null))		//0
console.log(Number(" "))		//0
console.log(Number("20"))		//20
console.log(Number(true))		//1
console.log(Number(false))		//0
console.log(Number("20px"))		//NaN
console.log(Number(undefined))	//NaN
console.log(Number(NaN))		//NaN


//여기까지의 실습을 통해서 알 수 있는 것은?
//	1. 단순히 숫자가 아니라해서 true가 나올것이라 생각하면 안되겠구나...!!
//	2. 넘어온 인자를 숫자로 변환 후
//		--> NaN 여부를 확인
//		--> isNaN(Number("10px"))
//	3. 설명 들어서 아는 사람들이나 헷갈리지 혼공하는 사람 입장에서는 굉장히 헷갈린다.



//6. Number.isNaN()
//오직 숫자(Number)타입인 값에서만 사용(동작)하는 메서드
//강제로 인자로 넘어온 매개변수 값을 숫자로 변환을 시도하지 않음
//언제 true를 리턴하는가?
//	--> 오직 숫자형(Number)이고, 그 값이 NaN인 경우에만 true를 반환
console.clear()
console.log('-----------------------------------1')
console.log(isNaN("10"))				//false
console.log(Number.isNaN("10"))			//false
console.log(Number.isNaN(Number("10")))	//10 --> false

console.log('-----------------------------------2')
console.log(isNaN("10px"))					//NaN-->true
console.log(Number.isNaN("10px"))			//false-->Number.isNaN()메서드는 숫자형에서만 사용 가능
console.log(Number.isNaN(Number("10px")))	//NaN --> true



//7. isNaN() vs Number.isNaN() 연습문제
console.clear()
console.log('-----------------------------------isNaN()')
//숫자면 false를 반환
console.log('isNaN("NaN") : ' + isNaN("NaN"))			//true
console.log('isNaN(NaN) : ' + isNaN(NaN))				//true
console.log('isNaN("0/0") : ' + isNaN("0/0"))			//true
console.log('isNaN(0/0) : ' + isNaN(0 / 0))				//0/0:NaN-->true
console.log('isNaN("홍길동") : ' + isNaN("홍길동"))		//true
console.log('isNaN("undefined") : ' + isNaN(undefined))	//true
console.log('isNaN("100") : ' + isNaN("100"))			//false
console.log('isNaN("100px") : ' + isNaN("100px"))		//true


console.log('-----------------------------------Number.isNaN()')
//	--> 오직 숫자형(Number)이고, 그 값이 NaN인 경우에만 true를 반환
console.log('Number.isNaN("NaN") : ' + Number.isNaN("NaN"))				//false
console.log('Number.isNaN(NaN) : ' + Number.isNaN(NaN))					//true
console.log('Number.isNaN("0/0") : ' + Number.isNaN("0/0"))				//false
console.log('Number.isNaN(0/0) : ' + Number.isNaN(0 / 0))				//0/0:NaN-->true
console.log('Number.isNaN("홍길동") : ' + Number.isNaN("홍길동"))		//false
console.log('Number.isNaN(Number("홍길동")) : ' + Number.isNaN(Number("홍길동")))
												//Number("홍길동") : NaN --> true
console.log('Number.isNaN("undefined") : ' + Number.isNaN(undefined))	//false
console.log('Number.isNaN("100") : ' + Number.isNaN("100"))				//false
console.log('Number.isNaN("100px") : ' + Number.isNaN("100px"))			//false

console.log('-----------------------------------Number.isNaN(Number())')
console.log('Number.isNaN(Number("NaN")) : ' + Number.isNaN(Number("NaN")))			//true
console.log('Number.isNaN(Number("NaN")) : ' + Number.isNaN(Number(NaN)))			//true
console.log('Number.isNaN(Number("0/0")) : ' + Number.isNaN(Number("0/0")))			//true
console.log('Number.isNaN(Number(0/0)) : ' + Number.isNaN(Number(0/0)))				//true
console.log('Number.isNaN(Number("홍길동")) : ' + Number.isNaN(Number("홍길동")))	//true
console.log('Number.isNaN(Number(undefined)) : ' + Number.isNaN(Number(undefined)))	//true
console.log('Number.isNaN(Number("100")) : ' + Number.isNaN(Number("100")))			//false
console.log('Number.isNaN(Number("100px")) : ' + Number.isNaN(Number("100px")))		//true

console.log('-----------------------------------END')
console.log(Number.isNaN(Number("홍길동")))	// NaN --> true
console.log(Number.isNaN(Number("20")))		//	20 --> false