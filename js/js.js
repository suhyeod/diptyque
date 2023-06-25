//pc버전 슬라이드
const slides = document.querySelectorAll('.img_2 > ul '); //전체 슬라이드 컨테이너
const slideImg_1 = document.querySelectorAll('.img_3_1'); //모든 슬라이드들 _ 1
const slideImg_2 = document.querySelectorAll('.img_3_2'); //모든 슬라이드들 _ 2
const slideImg_3 = document.querySelectorAll('.img_3_3'); //모든 슬라이드들 _ 3
const slideImg_4 = document.querySelectorAll('.img_3_4'); //모든 슬라이드들 _ 4
const slideImg_5 = document.querySelectorAll('.img_3_5'); //모든 슬라이드들 _ 5
const slideImg_6 = document.querySelectorAll('.img_3_6'); //모든 슬라이드들 _ 6
let currentIdx_1 = 0; //현재 슬라이드 index
let currentIdx_2 = 0; //현재 슬라이드 index
let currentIdx_3 = 0; //현재 슬라이드 index
let currentIdx_4 = 0; //현재 슬라이드 index
let currentIdx_5 = 0; //현재 슬라이드 index
let currentIdx_6 = 0; //현재 슬라이드 index
const slideCount_1 = slideImg_1.length; // 슬라이드 개수
const slideCount_2 = slideImg_2.length; // 슬라이드 개수
const slideCount_3 = slideImg_3.length; // 슬라이드 개수
const slideCount_4 = slideImg_4.length; // 슬라이드 개수
const slideCount_5 = slideImg_5.length; // 슬라이드 개수
const slideCount_6 = slideImg_6.length; // 슬라이드 개수
const prev = document.querySelectorAll('.prev'); //이전 버튼
const next = document.querySelectorAll('.next'); //다음 버튼

console.log(slideCount_1, slideCount_2);

function moveSlide(num, img_cont) {
    console.log(num, img_cont);
    slides[img_cont].style.left = 'calc(' + (num*-12.5) + 'vw + ' + (num*-80) + 'px )'; 
    console.log(slides[img_cont].style.left);
    if(img_cont == 0) currentIdx_1 = num;
    if(img_cont == 1) currentIdx_2 = num;
    if(img_cont == 2) currentIdx_3 = num;
    if(img_cont == 3) currentIdx_4 = num;
    if(img_cont == 4) currentIdx_5 = num;
    if(img_cont == 5) currentIdx_6 = num;
}



// 첫번째
prev[0].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴*/
    if (currentIdx_1 !== 0)
        moveSlide(currentIdx_1 - 1, 0);
    }
); 

next[0].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_1 !== slideCount_1 - 4) {
        moveSlide(currentIdx_1 + 1, 0);
    }
});



//두번째
prev[1].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx_2 !== 0) 
        moveSlide(currentIdx_2 - 1, 1);
    }
);

next[1].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_2 !== slideCount_2 - 4) {
        moveSlide(currentIdx_2 + 1, 1);
    }
});



//세번째
prev[2].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx_3 !== 0) 
        moveSlide(currentIdx_3 - 1, 2);
    }
);

next[2].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_3 !== slideCount_3 - 4) {
        moveSlide(currentIdx_3 + 1, 2);
    }
});



//네번째
prev[3].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx_4 !== 0) 
        moveSlide(currentIdx_4 - 1, 3);
    }
);

next[3].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_4 !== slideCount_4 - 4) {
        moveSlide(currentIdx_4 + 1, 3);
    }
});



//다섯번째
prev[4].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx_5 !== 0) 
        moveSlide(currentIdx_5 - 1, 4);
    }
);

next[4].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_5 !== slideCount_5 - 4) {
        moveSlide(currentIdx_5 + 1, 4);
    }
});



//여섯번째
prev[5].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx_6 !== 0) 
        moveSlide(currentIdx_6 - 1, 5);
    }
);

next[5].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx_6 !== slideCount_6 - 4) {
        moveSlide(currentIdx_6 + 1, 5);
    }
});
// pc버전 슬라이드
//mobile버전 슬라이드


const moblieslides = document.querySelectorAll('.moblle_img_1_1 > div > ul '); //전체 슬라이드 컨테이너
const moblieslideImg_1 = document.querySelectorAll('.mobile_img_1_1s'); //모든 슬라이드들 _ 1
const moblieslideImg_2 = document.querySelectorAll('.mobile_img_1_2s'); //모든 슬라이드들 _ 2
const moblieslideImg_3 = document.querySelectorAll('.mobile_img_1_3s'); //모든 슬라이드들 _ 3
const moblieslideImg_4 = document.querySelectorAll('.mobile_img_1_4s'); //모든 슬라이드들 _ 4
const moblieslideImg_5 = document.querySelectorAll('.mobile_img_1_5s'); //모든 슬라이드들 _ 5
let mobliecurrentIdx_1 = 0; //현재 슬라이드 index
let mobliecurrentIdx_2 = 0; //현재 슬라이드 index
let mobliecurrentIdx_3 = 0; //현재 슬라이드 index
let mobliecurrentIdx_4 = 0; //현재 슬라이드 index
let mobliecurrentIdx_5 = 0; //현재 슬라이드 index
const moblieslideCount_1 = moblieslideImg_1.length; // 슬라이드 개수
const moblieslideCount_2 = moblieslideImg_2.length; // 슬라이드 개수
const moblieslideCount_3 = moblieslideImg_3.length; // 슬라이드 개수
const moblieslideCount_4 = moblieslideImg_4.length; // 슬라이드 개수
const moblieslideCount_5 = moblieslideImg_5.length; // 슬라이드 개수

function moveSlide(num, img_cont) {
  console.log(num, img_cont);
  slides[img_cont].style.left = 'calc(' + (num*-12.5) + 'vw + ' + (num*-80) + 'px )'; 
  console.log(slides[img_cont].style.left);
  if(img_cont == 0) mobliecurrentIdx_1 = num;
  if(img_cont == 1) mobliecurrentIdx_2 = num;
  if(img_cont == 2) mobliecurrentIdx_3 = num;
  if(img_cont == 3) mobliecurrentIdx_4 = num;
  if(img_cont == 4) mobliecurrentIdx_5 = num;
}

//구현 해보고 수정



// 첫번째
prev[5].addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴*/
  if (mobliecurrentIdx_1 !== 0)
      moveSlide(mobliecurrentIdx_1 - 1, 0);
  }
); 

next[5].addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
moveSlide 함수 불러옴 */
  if (mobliecurrentIdx_1 !== slideCount_1 - 4) {
      moveSlide(mobliecurrentIdx_1 + 1, 0);
  }
});



//두번째
prev[6].addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (mobliecurrentIdx_2 !== 0) 
      moveSlide(mobliecurrentIdx_2 - 1, 1);
  }
);

next[6].addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
moveSlide 함수 불러옴 */
  if (mobliecurrentIdx_2 !== slideCount_2 - 4) {
      moveSlide(mobliecurrentIdx_2 + 1, 1);
  }
});



//세번째
prev[7].addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (mobliecurrentIdx_3 !== 0) 
      moveSlide(mobliecurrentIdx_3 - 1, 2);
  }
);

next[7].addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
moveSlide 함수 불러옴 */
  if (mobliecurrentIdx_3 !== slideCount_3 - 4) {
      moveSlide(mobliecurrentIdx_3 + 1, 2);
  }
});



//네번째
prev[8].addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (mobliecurrentIdx_4 !== 0) 
      moveSlide(mobliecurrentIdx_4 - 1, 3);
  }
);

next[8].addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
moveSlide 함수 불러옴 */
  if (mobliecurrentIdx_4 !== slideCount_4 - 4) {
      moveSlide(mobliecurrentIdx_4 + 1, 3);
  }
});



//다섯번째
prev[9].addEventListener('click', function () {
  /*첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수 불러옴 */

  if (mobliecurrentIdx_5 !== 0) 
      moveSlide(mobliecurrentIdx_5 - 1, 4);
  }
);

next[9].addEventListener('click', function () {
  /* 마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
moveSlide 함수 불러옴 */
  if (currentIdx_5 !== slideCount_5 - 4) {
      moveSlide(currentIdx_5 + 1, 4);
  }
});



//mobile버전 슬라이드











// 완성

function gotop() {
    scrollTo(0, 0);
}
// 스크롤 맨 위로 올라가는 거


function openhelpitem(e , h) {
    if (e.lastElementChild.style.height == '' || e.lastElementChild.style.height == '0px') {
        console.log('aaa')
        e.lastElementChild.style.height = h+"px"
    } else {
        console.log('bbb')
        e.lastElementChild.style.height = '0px';
    }
}

/*
//pc버전 op 
// HTML 요소를 선택합니다.
const dataElements = document.querySelectorAll('#pc_main > div');

// 스크롤 이벤트 핸들러를 등록합니다.
window.addEventListener('scroll', function() {
  // 각 데이터 요소를 확인하면서 화면에 보이는지 확인합니다.
  dataElements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('show'); // 데이터 요소가 화면에 보이면 'show' 클래스를 추가합니다.
    }
  });
});

// 요소가 화면에 보이는지 확인하는 함수입니다.
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


*/
