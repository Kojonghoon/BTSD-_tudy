//배열 요소 내 중복된 문자열(숫자)의 빈도 수 체크하기

//1. 배열
const someArr = ['Python', 'HTML', 'CSS', 'JavaScript', 'Python', 'CSS', 'JavaScript', 'JAVA ', 'JavaScript']


//1.5 사전지식
const testObj = { '홍길동': 20, '이순신': 30 }
console.log('--------------------(1)')
console.log(Boolean(testObj['홍길동']))	//true
console.log(typeof testObj['홍길동'])	//string(x) --> number
console.log(testObj['홍길동'])			//20
console.log(testObj['홍길자'])			//undefined
console.log(testObj[0])					//undefined
console.log('--------------------(1)')

const testAr = ['홍길동', '이순신']
console.log('--------------------(2)')
console.log(testAr[0])			//홍길동
console.log(testAr[1])			//이순신
console.log(testAr[2])			//undefined
console.log(testAr['홍길동'])	//undefined
console.log(Boolean(testAr['홍길동']))	//false
console.log(Boolean(1))			//true
console.log(Boolean(0))			//false
console.log('--------------------(2)')


//2. 사전지식
//||연산자
//가장 왼쪽 피연산바 부터 시작
//	-->우측 진행
//	-->피연산자를 평가
//이떄, 피연산자를 불리언형으로 변환 후
//	-->값이 true이면 연산 Stop
//	-->피연산자의 변환 전 원래 값을 리턴.
//만약, 모든 피연산자가 false인 경우
//	-->맨 마지막 피연산자가 리턴
console.clear()
console.log('--------------------(3)')
console.log(1 || 0)					//true	--> 리턴값 -->1
console.log(undefined || 0)			//false	--> 리턴값 -->0
console.log(null || 0)				//false	--> 리턴값 -->0
console.log(undefined || 1 || 0)	//true	--> 리턴값 -->1
console.log(undefined || null || 0)	//false	--> 리턴값 -->0
console.log('--------------------(3)')


const testObj2 = { '홍길동': 20, '이순신': 30 }
console.log('--------------------(4)')
console.log((testObj2['홍길동'] || null) + 1)	//true --> return --> 21
console.log(testObj2['홍길동자'])				//undefined
console.log(testObj2['홍길동자'] || null)		//false --> return --> null
console.log('--------------------(4)')







