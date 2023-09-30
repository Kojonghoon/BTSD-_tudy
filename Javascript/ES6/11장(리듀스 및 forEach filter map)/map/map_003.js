//localeCompare() 비교 메서드

//1. 특징
//반환 값으로 number를 반환
//	-->즉, 비교 결과를 숫자로 반환
//문자열과 문자열을 비교
//레퍼런스(첫번째에 있는) 문자 또는 문자열이 작으면(앞에 있으면) 음수 값을 가지고, 반대로 크면(뒤에 있으면)양수 값을 가진다고 생각.


//2. 사용법
console.log('korea'.localeCompare('u'))			//-1	--> korea가 사전상 앞에 있으므로 음수의 값을 가짐
console.log('korea'.localeCompare('korea'))		//0
console.log('korea'.localeCompare('africa'))	//1		--> korea가 사전상 뒤에 있으므로 음수의 값을 가짐


//3. 정렬
//	--> sort()
const items = ['banana', 'apple', 'pear', 'peach', 'orange', 'watermelon']

const result = items.sort((a, b) => a.localeCompare(b));
console.log(result)

const result2 = items.sort((b, a) => a.localeCompare(b));
console.log(result2)

const result3 = items.sort(function (a, b) {

	//localeCompare()
	console.log(a, b)
	return a.localeCompare(b)

});
console.log(result3)

const result4 = items.sort(function (b, a) {

	//localeCompare()
	return a.localeCompare(b)

});
console.log(result4)