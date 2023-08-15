//전역 변수 초기화
var $view = null
var currentIndex = 1
var timerID = 0

//프로그램 시작부분
$(document).ready(function () {
  init()  //전역변수 초기화 및 함수 호출
  initEvent() //이벤트 초기화 함수 등록
})

//초기화 함수
function init() {
  //view객체를 찾아옴
  $view = $("#view")
}

//이벤트 초기화
function initEvent() {
  //play버튼에 자동 실행 이벤트 등록
  $("#play").click(function () {
    startAutoPlay()
  })
  //Stop버튼에 멈춤 이벤트 등록
  $("#stop").click(function () {
    stopAutoPlay()
  })
  //Prev버튼에 이전 이미지 보여주는 이벤트 등록
  $("#prev").click(function () {
    prevImage()
  })
  //Next버튼에 이전 이미지 보여주는 이벤트 등록
  $("#next").click(function () {
    nextImage()
  })
}

//자동 실행 함수
function startAutoPlay() {
  if (timerID == 0) {
    //0.01초마다 nextImage를 호출하고 있는 코드
    timerID = setInterval(function () {
      nextImage()
    }, 100)
  }
}

//멈춤 함수
function stopAutoPlay() {
  //타이머 아이디가 존재한다면 실행되고 있다는 것이므로...
  if (timerID != 0) {
    clearInterval(timerID)
    timerID = 0
  }
}

//이전 이미지를 보여주는 함수
function prevImage() {
  var index = currentIndex - 1;
  //이지미의 개수가 6개 이니까 1번쨰 이미지이면 currentIndex가 0이 되어서
  //아래와 같이 7로 index를 강제로 설정함
  if (index <= 0) {
    index = 6
  }
  showImage(index)
}

function nextImage() {
  //다음 이미지를 보여주기 위해서 +1을 하였다.
  var index = currentIndex + 1;
  //이미지가 6개 이니까 아래와 같이 설정
  if (index >= 7) {
    index = 1
  }
  showImage(index)
}


//다음 이미지를 보여주는 함수
function nextImage() {
  //다음 이미지를 보여주기 위해서 +1을 하였다.
  var index = currentIndex + 1
  //이미지가 6개 이니까 아래와 같이 설정
  if (index >= 7) {
    index = 1
  }
  showImage(index);
}

//실제적으로 이미지를 보여주는 함수
function showImage(index) {
  //이미지의 src 속성을 설정하고 있다.
  $view.attr("src", "../image/" + index + ".png")
  currentIndex = index
  console.log("현재 이미지 번호 : " + currentIndex)
}