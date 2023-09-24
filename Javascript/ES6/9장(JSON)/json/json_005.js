//JSON 형식의 텍스트로 변환 시 안되는 것들
//JSON.stringify 호출 시 --> 무시되는 프로퍼티들


//!
//객체, 배열 -->O
//함수, 심벌(프러퍼티가), undefined(값이)	--> X


//1. JSON.stringify 메서드를 사용할 수 있는 자료형
//원시형 --> 문자형, 숫자형, 불린형(true, false), 객체, 배열
// alert(JSON.stringify(100))			//100
// alert(JSON.stringify('korea'))		//홑따옴표가 쌍따옴표로 변경 --> "korea"
// alert(JSON.stringify(false))		//false
// alert(JSON.stringify([1, 2, 3]))	//[1,2,3]


//2. 객체, 배열 --> O
let arr = ['홍길동', '이순신', '강감찬', '을지문덕']
let jsonArr = JSON.stringify(arr)

document.write(jsonArr)
document.write("<br><br>")


//3. 함수 --> X
let obj = { name: "홍길동", age: function () { return 20; }, nationality: "kor" };
let jsonText = JSON.stringify(obj)
document.write(jsonText)
document.write("<br><br>")

//4. 함수 --> X -->O
let obj2 = { name: "홍길동", age: function () { return 20; }, nationality: "kor" };
//alert(typeof obj2.age.toString())	//string

obj2.age = obj2.age.toString()
let jsonText2 = JSON.stringify(obj2)
document.write(jsonText2)
document.write("<br><br>")


//5. undefined, Symbol -->X
const obj3 = {
	name: "홍길동",
	age: 20,
	nationality: undefined
}

document.write(JSON.stringify(obj3))

// alert("값이 undefined : "+JSON.stringify(undefined))	//undefined
// alert("심볼인 경우 : "+JSON.stringify(Symbol('')))	//undefined

//6. array --> null
console.log(JSON.stringify([function () { return 20; }, undefined, Symbol(''), NaN]))	//null, null, null, null








