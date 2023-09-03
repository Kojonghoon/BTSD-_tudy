//클래스 단위 프로그래밍으로 정렬하는 기능을 제공을 한 경우
		//
		$(document).ready(function () {
			//모든 이미지를 가지고 오기
			var img1 = new SimpleGallery("#container1 img")

			//버튼 클릭이벤트를 등록하는 코드
			$("#btnHorizontal").click(function () {
				//가로로 정렬하는 부분
				img1.show("horizontal")
			})

			//버튼 클릭이벤트를 등록하는 코드
			$("#btnVertical").click(function () {
				//세로로 정렬하는 부분
				img1.show("vertical")
			})

			//버튼 클릭이벤트를 등록하는 코드
			$("#btnRandom").click(function () {
				//랜덤으로 정렬하는 부분
				img1.show("random")
			})

			//버튼 클릭이벤트를 등록하는 코드
			$("#btnGrid").click(function () {
				//바둑판으로 정렬하는 부분
				img1.show("grid")
			})

		})

		//심플갤러리 클래스 정의
		function SimpleGallery(selector) {
			this.$images = null
			this.init(selector)
		}

		//요소초기화
		SimpleGallery.prototype.init = function (selector) {
			this.$images = $(selector)
		}

		//매개변수로 넘어오는 type에 따라서 가로, 세로, 랜덤, 바둑판 정렬이 이루어 지게끔
		//switch문으로 분기를 하고 있는 코드이다.
		SimpleGallery.prototype.show = function (type) {
			switch (type) {
				case "horizontal":
					this.alignHorizontal()
					break
				case "vertical":
					this.alignVertical()
					break
				case "random":
					this.alignRandom()
					break
				case "grid":
					this.alignGrid()
					break
				default:
					this.alignHorizontal()
			}
		}

		//가로정렬기능코드
		SimpleGallery.prototype.alignHorizontal = function () {
			//이미지 개수 구하기
			var length = this.$images.length
			//이미지 가로로 나열하는 코드
			for (var i = 0; i < length; i++) {
				var x = i * 200
				this.$images.eq(i).css({
					left: x
				})
			}
		}

		//세로정렬기능코드
		SimpleGallery.prototype.alignVertical = function () {
			//이미지 개수 구하기
			var length = this.$images.length
			//이미지 세로로 나열하는 코드
			for (var i = 0; i < length; i++) {
				var y = i * 200
				this.$images.eq(i).css({
					left: 0,
					top: y
				})
			}
		}

		//랜덤정렬기능코드
		SimpleGallery.prototype.alignRandom = function () {
			//이미지 개수 구하기
			var length = this.$images.length
			//이미지 랜덤으로 나열하는 코드
			for (var i = 0; i < length; i++) {
				//x,y 좌표를 랜덤으로 구하고 있는 코드
				var x = 400 * Math.random()
				var y = 400 * Math.random()
				console.log("x좌표 : " + x + ", y좌표 : " + y)
				this.$images.eq(i).css({
					left: x,
					top: y
				})
			}
		}

		//바둑판식 정렬 기능코드
		SimpleGallery.prototype.alignGrid = function () {
			//이미지 개수 구하기
			var length = this.$images.length
			var count = 3
			//이미지 바둑판식로 나열하는 코드
			for (var i = 0; i < length; i++) {
				//x,y 좌표를 랜ㅁ으로 구하고 있는 코드
				var x = (i % count) * 200
				var y = parseInt(i / count) * 200
				console.log("x좌표 : " + x + ", y좌표 : " + y)
				this.$images.eq(i).css({
					left: x,
					top: y
				})
			}
		}