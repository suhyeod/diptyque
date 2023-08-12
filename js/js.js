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

const mobileslides = document.querySelectorAll('.mobile_img_1_1 > div > ul'); //전체 슬라이드 컨테이너
const mobileslideImg_1 = document.querySelectorAll('.mobile_img_1_1s'); //모든 슬라이드들 _ 1
const mobileslideImg_2 = document.querySelectorAll('.mobile_img_1_2s'); //모든 슬라이드들 _ 2
const mobileslideImg_3 = document.querySelectorAll('.mobile_img_1_3s'); //모든 슬라이드들 _ 3
const mobileslideImg_4 = document.querySelectorAll('.mobile_img_1_4s'); //모든 슬라이드들 _ 4
const mobileslideImg_5 = document.querySelectorAll('.mobile_img_1_5s'); //모든 슬라이드들 _ 5
let mobilecurrentIdx_1 = 0; //현재 슬라이드 index
let mobilecurrentIdx_2 = 0; //현재 슬라이드 index
let mobilecurrentIdx_3 = 0; //현재 슬라이드 index
let mobilecurrentIdx_4 = 0; //현재 슬라이드 index
let mobilecurrentIdx_5 = 0; //현재 슬라이드 index
const mobileslideCount_1 = mobileslideImg_1.length; // 슬라이드 개수
const mobileslideCount_2 = mobileslideImg_2.length; // 슬라이드 개수
const mobileslideCount_3 = mobileslideImg_3.length; // 슬라이드 개수
const mobileslideCount_4 = mobileslideImg_4.length; // 슬라이드 개수
const mobileslideCount_5 = mobileslideImg_5.length; // 슬라이드 개수


const mobile_hidden = document.querySelectorAll('#line_0') // 모바일 히든
const mobile_hidden_close = document.querySelectorAll('.x')
const mobile_hidden_sc = document.querySelectorAll('#mobile_hidden')
mobile_hidden.forEach((Element, index) => {
    Element.addEventListener("click", () => {
        var mhw = mobile_hidden_sc[index].style.width;
        console.log(mhw);
        if (mhw == '100%') {
            mobile_hidden_sc[index].style.width = "0%";
        } else {
            mobile_hidden_sc[index].style.width = "100%";
        }
    });
});
mobile_hidden_close.forEach((Element, index) => {
    Element.addEventListener("click", () => {
        var mhw = mobile_hidden_sc[index].style.width;
        console.log(mhw);
        if (mhw == '100%') {
            mobile_hidden_sc[index].style.width = "0%";
        } else {
            mobile_hidden_sc[index].style.width = "100%";
        }
    });
});
  
console.log(slideCount_1, slideCount_2);


function moveSlide(num, img_cont) {
    if (img_cont < 6) {
      console.log(num, img_cont);
      slides[img_cont].style.left = 'calc(' + (
        num * -12.5
      ) + 'vw + ' + (
        num * -80
      ) + 'px )';
      console.log(slides[img_cont].style.left);
      if (img_cont == 0)
        currentIdx_1 = num;
      if (img_cont == 1)
        currentIdx_2 = num;
      if (img_cont == 2)
        currentIdx_3 = num;
      if (img_cont == 3)
        currentIdx_4 = num;
      if (img_cont == 4)
        currentIdx_5 = num;
      if (img_cont == 5)
        currentIdx_6 = num;
    } else {
      console.log(num, img_cont);
      img_cont -= 6;
      mobileslides[img_cont].style.left = 'calc(' + (
        num * -25
      ) + 'vw + ' + (
        num * -200
      ) + 'px )';
      console.log(mobileslides[img_cont].style.left);
      if (img_cont == 0)
        mobilecurrentIdx_1 = num;
      if (img_cont == 1)
        mobilecurrentIdx_2 = num;
      if (img_cont == 2)
        mobilecurrentIdx_3 = num;
      if (img_cont == 3)
        mobilecurrentIdx_4 = num;
      if (img_cont == 4)
        mobilecurrentIdx_5 = num;
    }   
    setInterval(function(){
        if(img_cont > slideImg_1.length){
            img_cont++
        } else if(img_cont = slideImg_1.length){
            img_cont ==0
        }
    } , 1000)
  }


// 첫번째

prev[0].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴*/
    if  (currentIdx_1 !== 0) 
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
// pc버전 슬라이드 mobile버전 슬라이드 첫번째
prev[6].addEventListener('click', function () {
    /*  첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수
 *  불러옴
 */
    if (mobilecurrentIdx_1 !== 0) 
        moveSlide(mobilecurrentIdx_1 - 1, 6);
    }
);

next[6].addEventListener('click', function () {
    /*  마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
 *
moveSlide 함수 불러옴
 */
    if (mobilecurrentIdx_1 !== mobileslideCount_1 - 1) {
        moveSlide(mobilecurrentIdx_1 + 1, 6);
    }
});

//두번째
prev[7].addEventListener('click', function () {
    /* 첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수
 * 불러옴
 */

    if (mobilecurrentIdx_2 !== 0) 
        moveSlide(mobilecurrentIdx_2 - 1, 7);
    }
);

next[7].addEventListener('click', function () {
    /*  마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
 *
moveSlide 함수 불러옴
 */
    if (mobilecurrentIdx_2 !== mobileslideCount_2 - 7) {
        moveSlide(mobilecurrentIdx_2 + 1, 7);
    }
});

//세번째
prev[8].addEventListener('click', function () {
    /* 첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수
 * 불러옴
 */

    if (mobilecurrentIdx_3 !== 0) 
        moveSlide(mobilecurrentIdx_3 - 1, 8);
    }
);

next[8].addEventListener('click', function () {
    /*  마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
 *
moveSlide 함수 불러옴
 */
    if (mobilecurrentIdx_3 !== mobileslideCount_3 - 1) {
        moveSlide(mobilecurrentIdx_3 + 1, 8);
    }
});

//네번째
prev[9].addEventListener('click', function () {
    /* 첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수
 * 불러옴
 */

    if (mobilecurrentIdx_4 !== 0) 
        moveSlide(mobilecurrentIdx_4 - 1, 9);
    }
);

next[9].addEventListener('click', function () {
    /*  마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
 *
moveSlide 함수 불러옴
 */
    if (mobilecurrentIdx_4 !== mobileslideCount_4 - -1) {
        moveSlide(mobilecurrentIdx_4 + 1, 9);
    }
});

//다섯번째
prev[10].addEventListener('click', function () {
    /* 첫 번째 슬라이드로 표시 됐을때는
이전 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==0일때만 moveSlide 함수
 * 불러옴
 */

    if (mobilecurrentIdx_5 !== 0) 
        moveSlide(mobilecurrentIdx_5 - 1, 10);
    }
);

next[10].addEventListener('click', function () {
    /*  마지막 슬라이드로 표시 됐을때는
다음 버튼 눌러도 아무런 반응 없게 하기 위해
currentIdx !==slideCount - 1 일때만
 *
moveSlide 함수 불러옴
 */
    if (mobilecurrentIdx_5 !== mobileslideCount_5 - -3) {
        moveSlide(mobilecurrentIdx_5 + 1, 10);
    }
});

//mobile버전 슬라이드

let node1 = document.querySelectorAll("#nav_main > ul > li:nth-child(1)");
let node2 = document.querySelectorAll(".news");
let node3 = document.querySelectorAll("#nav_main > ul > li:nth-child(2)");
let node4 = document.querySelectorAll(".perfumes");
let node5 = document.querySelectorAll("#nav_main > ul > li:nth-child(3)");
let node6 = document.querySelectorAll(".candle");
let node7 = document.querySelectorAll("#nav_main > ul > li:nth-child(4)");
let node8 = document.querySelectorAll(".body_care");
let node9 = document.querySelectorAll("#nav_main > ul > li:nth-child(5)");
let node10 = document.querySelectorAll(".decoration");
let node11 = document.querySelectorAll("#nav_main > ul > li:nth-child(6)");
let node12 = document.querySelectorAll(".gift");

node1.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node2[index].style.height = node2[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node2[index].style.height = "0px";
    })
})
node3.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node4[index].style.height = node4[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node4[index].style.height = "0px";
    })
})
node5.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node6[index].style.height = node6[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node6[index].style.height = "0px";
    })
})
node7.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node8[index].style.height = node8[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node8[index].style.height = "0px";
    })
})
node9.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node10[index].style.height = node10[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node10[index].style.height = "0px";
    })
})
node11.forEach((Element, index) => {
    Element.addEventListener("mouseover", () => {
        node12[index].style.height = node12[index].scrollHeight + 'px';
    })
    Element.addEventListener("mouseout", () => {
        node12[index].style.height = "0px";
    })
})

// 완성

function gotop() {
    $('html , body').animate({
        scrollTop: 0
    }, 500);
}

/*function gotop(){
  scrollTo(0 , 0);}*/
// 스크롤 맨 위로 올라가는 거 pc버전 op 완성 HTML 요소를 선택합니다.
const dataElements = document.querySelectorAll('#pc_main > div > div:not(.not_op');

// 스크롤 이벤트 핸들러를 등록합니다.
window.addEventListener('scroll', function () {
    // 각 데이터 요소를 확인하면서 화면에 보이는지 확인합니다.
    dataElements.forEach(function (element) {
        if (isElementInViewport(element)) {
            element
                .classList
                .add('show'); // 데이터 요소가 화면에 보이면 'show' 클래스를 추가합니다.
        }
    });
});

// 요소가 화면에 보이는지 확인하는 함수입니다.
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function openhelpitem(e, h) {
    if (e.lastElementChild.style.height == '' || e.lastElementChild.style.height == '0px') {
        console.log('aaa')
        e.lastElementChild.style.height = h + "px"
    } else {
        console.log('bbb')
        e.lastElementChild.style.height = '0px';
    }
}
/*
let img_cont = 0;
setInterval(function(){
    const num = 0;
    (moveSlide(num,img_cont) * slideImg_1.length).style = 'calc(' + (
        num * -12.5
      ) + 'vw + ' + (
        num * -80
      ) + 'px )';
    //(slides.style[img_cont].left = "100" + "px") * slideImg_1.length ;
    img_cont++
    if(img_cont >= slideImg_1.length){
        img_cont = 0;
    }
} , 500)
/*임시 */
  // 1초마다 자동으로 넘어가는 슬라이드 추가
/* // 초기 이미지 컨테이너 인덱스 설정
  style.left = 'calc(' + (
        num * -12.5
      ) + 'vw + ' + (
        num * -80
      ) + 'px )';
  function autoNextSlide() {
    let num = 0; // 다음 슬라이드 인덱스 설정
    moveSlide(num, img_cont); // 다음 슬라이드로 이동하는 함수 호출
    img_cont++; // 이미지 컨테이너 인덱스 증가
    if (img_cont >= 6) {
      img_cont = 0; // 이미지 컨테이너 인덱스가 6보다 크거나 같으면 0으로 초기화
    }
  }
  
  setInterval(autoNextSlide, 1000); // 1초마다 autoNextSlide() 함수를 호출하여 자동으로 슬라이드 전환
  

/*임시 */
