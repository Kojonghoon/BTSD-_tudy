//함수 - 화살표 함수(Arrow Function) 기본 사용법
//함수 표현식 보다 더 간결하고 편리하게 함수를 만들 수는 없을까?
//간결하고 편리하게... 라는 말은
//	--> 결국, 짧게 줄여쓰면 편리하겠지만, 처음엔 적응이 안된다.

// 함수 선언문 --> 함수 표현식 --> 화살표 함수

//1. 함수 표현식
let arrowFunc = function (a, b) {
	return a * b
}
// alert(arrowFunc(10, 20))	//200

//2. 화살표 함수로 전환
//	--> 뺴도 의미를 유추할 수 있다면 과감하게 뺀다.
let arrowFunc2 = (a, b) => a * b
// alert(arrowFunc2(10, 3))

//3. 인자값이 하나라면??
//	--> 괄호가 생략 사능
//	--> 화살표 우측에다 함수 본문 작성한다 생각하고 작성
let arrowFunc3 = (name) => `반갑습니다. ${name} 회원님~`
// let arrowFunc3 = name => `반갑습니다. ${name} 회원님~`
// alert(arrowFunc3("홍길동"))

//4. 인자값이 없는 경우라면???
//	--> 이때는 괄호를 생략할 수 없다.
// let arrowFunc4 = () =>alert('새로고침을 해주세요~')
// arrowFunc4()
let arrowFunc4 = () => 100
// alert(arrowFunc4())


//5. 리턴문이 있는 경우???
//함수 표현식
let arrowFunc5 = function (a, b, c) {
	let total_sum = a + b + c
	return total_sum
}
// alert(arrowFunc5(1,2,3))

//화살표 함수 1
let arrowFunc6 = (a, b, c) => {
	let total_sum = a + b + c
	return total_sum
}
// alert(arrowFunc6(1,2,3))

//화살표 함수 2
let arrowFunc7 = (a, b, c) => (
	a + b + c
)
// alert(arrowFunc7(1, 2, 3))


//화살표 함수3
let arrowFunc8 = (a, b, c) => a + b + c
alert(arrowFunc8(1, 2, 3))