//JSON replacer옵션


//! replacer옵션(파라미터)
//1. 이 옵션을 사용하면 객체를
//	--> JSON형태의 텍스트로 변환 시 
//	--> 원하는 객체의 속성들만 선택해서 지정할 수 있다.
//2. 기본적으로 replacer옵션은 생략이 가능
//	--> 아예 안쓰거나 null로 지정.
//3. 생략 또는 null로 지정되면 변환할 객체의 모든 속성들이 JSON변환 텍스트에 포함이 된다.
//	--> undefined 값은 무시
//4. replacer파라미터는 함수 or 배열을 인자값으로 받을 수 있다.
//	--> 함수를 통해 객체의 key:value
//	--> 이때, value값을 체크하여 string이면 패스하고, 숫자형만 JSON문자열로 만들 수 있다.
//	--> value값이 String이면 undefined를 리턴하고, 아니면 해당 value값을 리턴
//	--> function, undefined, Symbol
//	--> JSON에서 다루는 타입이 X.


//1. 실습
let someJsonData = { "num": 20, "firstNumber": 123455, "secondNumber": 349284, "socialNo": "ok", "pri_value": 4582145698, "bwg_count": 10,"cu_date":"2023-09-25" }


//2. 변환 --> space옵션 사용
console.log(JSON.stringify(someJsonData, ["firstNumber","secondNumber","cu_date"], '\t'))
