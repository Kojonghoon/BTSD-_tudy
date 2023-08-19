//★ 숫자형의 특수한 값듯
//숫자형 --> 일반적으로 정수, 실수 이렇게 2개를 먼저 연상한다.
// 그런데 --> NaN, Infinity(무한대)와 같은 특수한 숫자 값들도 있다.


// 1. NaN	-->앞에서 살펴봣으니까 생략

// 2. Infinity(무한대)	--> 굉장히 큰 숫자 값 -->0으로 나누면 무한대
// window.alert(100/0)	//infinity
// alert(Infinity)

// 3. Bigint	--> Number, BigInt --> 숫자의 길이에 상관없이 정수를 표현
//숫자 값의 맨 끝에 n을 붙이면 BigInt자료형으로 간주 --> 표준으로 채택된지 얼마 안되서 지원 브라우저 체크
const num = 123123123123123123n;
alert(num)
alert(typeof num)

