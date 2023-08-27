//반복문 - break, continue

//1. 용도
//break, continue 둘 다 반복문을 멈추고 빠져 나오는 역할을 수행한다.

//2. 차이점
//break		-->만나는 그 순간 반복문을 멈추고 -->완전 빠져나옴.
//continue	-->만나는 그 순간 반복문을 멈추고 -->다음 반복을 계속해서 이어 나감

//3. 실습 1
// let i = 0

// while (i < 50) {
// 	document.write(i + "")
// 	i++
// 	if (i == 25) {
// 		break
// 	}
// }

//3. 실습 2
// while (true) {
// 	let someValue = prompt("어떤 값을 입력해주세요!")
// 	if (!someValue) {
// 		break
// 	}
// 	else {
// 		alert(`당신이 입력한 값은 = ${someValue}`)
// 	}
// }

//3. 실습 3 - continue
//1~100 까지의 숫자 중에서 홀수만 출력하시오
for (let i = 1; i <= 100; i++) {
	if (i % 2 == 0) {
		continue
	}
	document.write(i + " ")
}

document.write('<p>')

//1~100 까지의 숫자 중에서 짝수만 출력하시오
for (let i = 1; i <= 100; i++) {
	if ((i % 2) != 0) {
		continue
	}
	document.write(i + " ")
}