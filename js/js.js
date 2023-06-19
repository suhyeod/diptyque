const slides = document.querySelectorAll('.img_2 > ul '); //전체 슬라이드 컨테이너
const slideImg_1 = document.querySelectorAll('.img_3_1'); //모든 슬라이드들 _ 1
//const slideImg_2 = document.querySelectorAll('.img_4'); //모든 슬라이드들 _ 2
let currentIdx = 0; //현재 슬라이드 index
const slideCount_1 = slideImg_1.length; // 슬라이드 개수
//const slideCount_2 = slideImg_2.length; // 슬라이드 개수
const prev = document.querySelectorAll('.prev'); //이전 버튼
const next = document.querySelectorAll('.next'); //다음 버튼
const slideWidth = 219; //한개의 슬라이드 넓이
const slideMargin = 80; //슬라이드간의 margin 값

console.log(slideImg_1);
//전체 슬라이드 컨테이너 넓이 설정
slides[0].style.width = (slideWidth + slideMargin) * slideCount_1 + 'px';
slides[1].style.width = (slideWidth + slideMargin) * slideCount_1 + 'px';

//slides[2].style.width = (slideWidth + slideMargin) * slideCount_2 + 'px';
//slides[3].style.width = (slideWidth + slideMargin) * slideCount_2 + 'px';
function moveSlide(num, img_cont) {
    console.log(num, img_cont);
    slides[img_cont].style.left = -num * (slideWidth + slideMargin) + 'px'; // 200px씩 이동
    console.log(slides[img_cont].style.left);
    currentIdx = num;
}

prev[0].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴*/

    if (currentIdx !== 0)
        moveSlide(currentIdx - 1, 0);
    }
); 

next[0].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx !== slideCount_1 - 5) {
        moveSlide(currentIdx + 1, 0);
    }
});

prev[1].addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는
  이전 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==0일때만 moveSlide 함수 불러옴 */

    if (currentIdx !== 0) 
        moveSlide(currentIdx - 1, 1);
    }
);

next[1].addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는
  다음 버튼 눌러도 아무런 반응 없게 하기 위해
  currentIdx !==slideCount - 1 일때만
  moveSlide 함수 불러옴 */
    if (currentIdx !== slideCount - 1) {
        moveSlide(currentIdx + 1, 1);
    }
});





































































// 완성
// const node = document.querySelectorAll(".help_1 > li:nth-child(1)") const
// node1 = document.querySelectorAll(".help-lastitem > li ")
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
