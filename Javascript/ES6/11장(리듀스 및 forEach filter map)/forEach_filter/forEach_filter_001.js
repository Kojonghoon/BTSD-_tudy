//forEach()메서드와 filter()메서드

//1. forEach()
let basket = []

let products = [

	{ name: '냉장고', price: 2950000 },
	{ name: '세척기', price: 2670000 },
	{ name: '현관대리석', price: 2450000 },
	{ name: '거실커튼', price: 2310000 },
	{ name: '아일랜드식탁', price: 2120000 }

]

//forEach메서드는 객체나 배열 모두
//	-->반복 순회를 할 수 있으며, 조건에 맞는 요소들만을 조건 검사하여
//	-->새배열에 추가가 가능

products.forEach(function (ele) {

	//조건검색
	if (ele.price >= 2400000 && ele.price <= 2700000) {
		basket.push(ele)
	}

})
console.log('--------------------forEach()')
console.log(basket)


//2. filter()
//filter메서드를 사용하면 상황에 따라서 forEach메서드를 사용해서 조건검색을 할 필요가 없는 경우도 있다.
//쉽게말해, filter메서드 만으로 문제해결을 할 수도 있다. 라는 뜻.
//예
let filBasket = products.filter(function (ele) {
	//return	--> true 또는 false를 리턴
	return (ele.price >= 2400000 && ele.price <= 2700000)
})
let filBasket2 = products.filter(e => e.price >= 2400000 && e.price <= 2700000)

console.log('--------------------filter()')
console.log(filBasket)
console.log(filBasket2)









