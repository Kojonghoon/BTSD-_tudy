//배열(array) - 반복문을 사용한 출력

//1. 배열 요소들을 반복문 사용해서 출력하고 싶어요??
let ar = ["홍길동", 100, 3.14, false, { id: 'testman', age: 20 }, function (a) { return a * 2 }]

for (i = 0; i < ar.length; i++) {
	document.write(ar[i] + "<br>")
}

document.write('----------------------<br>')

//2. for..in, for..of이런 것들도 있다고 들어 봤는데요?
let animals = ['tiger', 'lion', 'alligator', 'hippo', 'sparrow']

for (let ele of animals) {
	document.write(ele + " ")
}

//3. 복습
// animals.push('dog')
// alert(animals)

// animals.pop()
// alert(animals)

//추가	--> unshift
// animals.unshift('dog')
// alert(animals)

// animals.shift()
// alert(animals)