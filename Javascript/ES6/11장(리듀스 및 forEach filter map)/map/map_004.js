//Object.entries() 메서드

//1. 특징
//Object.entries()메서드는 순서가 매겨진 객체의 [key, value]쌍을 배열로 반환


//2. 사용법
const obj = {
	1: '홍길동',
	2: 20,
	3: '한국'
};


//1. 정렬 없이
console.log("--------------------정렬 없이")
for (const [k, v] of Object.entries(obj)) {
	console.log(`${k}:${v}`)
}


//2. 정렬 사용
//	--> sort(), localeCompare()
console.log("--------------------정렬 사용")
for (const [k, v] of Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]))) {
	console.log(`${k}:${v}`)
};






