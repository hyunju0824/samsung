window.onload = function () {
    let sw = window.innerWidth;
    //console.log(sw);
    //banner,banner>li,leftBtn,rightBtn,mbPager
    let mainBanner = document.querySelector(".main-banner");
    let mbSlide = document.querySelectorAll(".mb-slide");
    let mbPrev = document.querySelector(".mb-prev");
    let mbNext = document.querySelector(".mb-next");
    let mbPager = document.querySelectorAll(".mb-btn");
    //슬라이드 개별 활성화, 페이지 표시 변수(0~4)
    let pageNum = 0;
    //몇번째 배너가 보이고 있는지를 체크할 변수(0~2)
    let showBanner = 0;
    //배너 한개의 너비값 clientWidth 
    let liWidth = mbSlide[0].clientWidth;
    //이동할 거리
    let moveX = 0;

    //초기에 활성화될 슬라이드
    mbSlide[showBanner].classList.add("active");

    let moveSlide = () => {
        moveX = -liWidth * showBanner;
        mainBanner.style.transform = `translateX(${moveX}px)`;
    }
    let activeControl = () => {
        //모든 페이지버튼, 슬라이드 활성화 원상복귀
        for (i = 0; i < mbPager.length; i++) {
            mbPager[i].classList.remove("active");
            mbSlide[i].classList.remove("active");
        }
        //클릭한 버튼만 active class
        mbPager[pageNum].classList.add("active");
        //클릭한 버튼 번호에 해당하는 슬라이드만 active class
        mbSlide[pageNum].classList.add("active");
    }
    
    mbPager.forEach((btn, id) => {
        mbPager[id].addEventListener("click", function () {
            //클릭한 페이지버튼 인덱스 저장
            pageNum = id;
            showBanner = id;
            if(showBanner >= 2 ? showBanner = 2 : showBanner = showBanner);
            moveSlide();
            activeControl();
        })
    })

    function moveRight() {
        //console.log("right");
        if (showBanner == mbSlide.length - 3 ? showBanner = 2 : showBanner++);
        moveSlide();
        if (pageNum == mbSlide.length - 1 ? pageNum = 4 : pageNum++);
        activeControl();
    }
    function moveLeft() {
        //console.log("left");
        if(showBanner == 0 ? showBanner = 0 : showBanner--);
        moveSlide();
        if(pageNum == 0 ? pageNum = 0 : pageNum--);
        activeControl();
    }

    //오른쪽 버튼을 클릭하면 moveRight함수 호출
    mbNext.addEventListener("click", moveRight);

    //왼쪽 버튼을 클릭하면 moveLeft함수 호출
    mbPrev.addEventListener("click", moveLeft);

    //창의 크기 인지
    
}