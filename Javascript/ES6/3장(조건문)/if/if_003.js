//★ : if 조건문 - 참(true) vs 거짓(false)

//1. 꼭 기억하자!
//기본적으로 if()문은 괄호안의 표현식을 평가 후
//	--> 결과 값
//	--> 참(true) or 거짓(false)으로 반환
//자바스크립트에서 논리 연산값이 false 값을 가지는 경우 
//	-->"", null, undefined, 0 ,NaN
//	--> 위와 같은 값들을 제외하면 
//	-->true


//2. 0vs1
//if문은 괄호 안이 true일 때만 항상 코드 블록을 수행한다.
//	-->false 값을 괄호 안에 넣으면 
//	--> 절대 실행이 안된다
// if (0) {	//절대 실행 안된다.
// 	alert("나는 실행이 될까요?")
// }
// if (true) {	//이건 항상 실행
// 	alert(Boolean(0))
// }


//3. !(Not)
// if (!0) {
// 	// alert("난 처음에 false값 이었지만 !을 붙여주면 나의 값은 = " + !0)
// 	alert(`난 처음에 ${!!null}값 이었지만 !을 붙여주면 나의 값은 = ${!0} `)
// }


//4. 연산의 결과가 참인 변수를 넣어도 된다.
let isTest = 10 > 90
// alert(`isTest 변수의 값은 =${isTest}`)

if (isTest) {
	alert(`isTest변수의 값이 참인 경우에만 나는 보여요 =${isTest}`)
} else {
	alert("거짓")
}