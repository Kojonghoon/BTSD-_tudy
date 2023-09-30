//배열 요소 각각의 합을 구한 후 그에 대한 편균을 reduce 메서드를 사용하여 구해보시오.
//reduce메서드를 이용한 평균 구하기는 생각보다 까다롭다.

//초깃값이 제공되지 않으면
//	-->리듀스 메서드(acc,cur,idx,oriarr)는 인덱스르 1부터 시작해서 콜백함수를 실행
//	-->즉, 첫 번째 인덱스는 패싱
//그리고, 또 하나
//	--> 초깃값이 없는 경우
//	acc -->값은 배열의 첫 번째 값이 적용
//	cur -->값은 배열의 두 번째 값이 적용

//초깃값 지정 없이 idx를 리턴하면 (배열 요소는 4개)	--> 1, 2, 3
//초깃값 지정 하고 idx를 리턴하면 (배열 요소는 4개)	--> 0, 1, 2, 3
//그러나, 원본 배열의 길이
//	--> oriarr.length
//	--> 4
//	-->	oriarr.length-1	-->3


//1. 실습
const eng_scores = [10, 20, 30, 40, 50]
//const avg = [10, 20, 30, 40].reduce((acc, cur, idx, oriarr) => {
const avg = eng_scores.reduce((acc, cur, idx, oriarr) => {

	//총함
	acc += cur;

	// 평균
	if (idx === oriarr.length - 1) {
		return `평균은 = ${acc / oriarr.length}이고, 이때의 총합은 = ${acc}입니다.`
	} else
		console.log("acc : " + acc)
	return acc


}, 0)

console.log(avg)