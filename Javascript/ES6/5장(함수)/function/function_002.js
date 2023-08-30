// 함수 종류 --> 크게 4가지 유형
//(1)반환값	--> X, 	받는 매개변수(인자) 값 --> X
//(2)반환값	--> X, 	받는 매개변수(인자) 값 --> O
//(3)반환값	--> O, 	받는 매개변수(인자) 값 --> X
//(4)반환값	--> O, 	받는 매개변수(인자) 값 --> O

//1.반환값	--> X, 	받는 매개변수(인자) 값 --> X
function myFunc1() {
	alert("myFunc1함수 : 나는 누가 호출해주지 않는 한 동작하지 않아요")
	console.log("myFunc1함수 : 나를 불러줘서 고마워요")
}
// myFunc1()


//2.반환값	--> X, 	받는 매개변수(인자) 값 --> O
function myFunc2(a) {
	alert(`myFunc2 함수 호출 시 어떤 값을 넣어서 호출했군요! 그 값은 = ${a}`)
}
// myFunc2(100)
// myFunc2(111,222,333)
// myFunc2('aaa','bbb','ccc')

function myFunc22(a, b, c) {
	alert(`myFunc2 함수 호출 시 어떤 값을 넣어서 호출했군요! 그 값은 = ${a + b + c}`)
}
// myFunc22(1, 2, 3)

//3.반환값	--> O, 	받는 매개변수(인자) 값 --> X
function myFunc3() {

	return "63빌딩"
}
// myFunc3()
//이렇게만 해주면 리턴된 값을 출력하지 못하기 때문에
//	--> 변수를 만들어서 리턴된 값을 저장(할당)

// let result = myFunc3()
// alert(`변수 result에 들어있는 값은 = ${result}`)
// alert(`변수 result에 들어있는 값은 = ${myFunc3()}`)

//4.반환값	--> O, 	받는 매개변수(인자) 값 --> O
function myFunc4(a) {
	// 함수보문
	let result = a * 2
	return result

}
// alert(myFunc4(200))	//400
// alert(`변수 result에 들어있는 값은 = ${myFunc4(100)}`)
alert(typeof result)	//err -->undefined
