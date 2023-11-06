// // 날짜 가져오기
// const getStartMonth = Number(localStorage.setItem('selectedDate').substr(5,2));
// const getEndMonth = Number(localStorage.setItem('selectedEndDate').substr(5,2));
// const getStartDate = Number(localStorage.setItem('selectedDate').substr(8,2));
// const getEndDate = Number(localStorage.setItem('selectedEndDate').subst(8,2));

// const startM = document.querySelector(".startMonth");
// const startD = document.querySelector(".startDate");
// const endM = document.querySelector(".endMonth");
// const endD = document.querySelector(".endDate");

// startM.innerText = getStartMonth;
// startD.innerText = getStartDate;
// endM.innerText = getEndMonth;
// endD.innerText = getEndDate;

// const weekDate = document.querySelectorAll('.week-date');
// let addDate = startD;
// for(let i=0 ; i<weekDate.length; i++){
//     weekDate[i] = startD;
//     addDate++;
// }


// 검색창 팝업
const modal = document.querySelector(".modal"); // 항공편 검색 팝업창
const modalOpen = document.querySelector(".flight-search"); // 검색 버튼
const modalClose = document.querySelector(".modal-close-btn"); // 팝업 닫는 버튼

const depCode = document.querySelector(".flight-dep-code"); // 상단바 출발지
const arvCode = document.querySelector(".flight-arv-code"); // 상단바 도착지

const searchFlight = document.querySelectorAll(".my-flight"); // 도시

const depText = document.querySelector(".dep-nav-text-dep"); // 가는편 출발지
const arvText = document.querySelector(".dep-nav-text-arv"); // 가는편 도착지

const depInfo = document.querySelector(".dep-info"); // 상세보기 출발지
const arvInfo = document.querySelector(".arv-info"); // 상세보기 도착지

const depInfoWhere = document.querySelector("info-dep-where"); //상세보기 출발지 작은
const arvInfoWhere = document.querySelector("info-arv-where"); //상세보기 출발지 작은


modalOpen.addEventListener("click", () => { // 항공편 검색 버튼 누르면 팝업 생성
    modal.style.display = "flex";
})

modalClose.addEventListener("click", () => { // 팝업 닫기
    modal.style.display = "none";
})

const searchBoxDep = document.querySelector(".search-form-btn-dep");  // 출발지 검색 버튼
const searchBoxArv = document.querySelector(".search-form-btn-arv");  // 도착지 검색 버튼

// 버튼 누르면 상단바 메인 출발지 + 그 밑에 작은 가는 편 + 상세보기 출발지 모두 연동
searchBoxDep.addEventListener("click", () => { //검색버튼 누르면 출발지 연동
    depCode.innerText = searchFlight[ 0 ].innerText;
    depText.innerText = searchFlight[ 0 ].innerText;
    depInfo.innerText = searchFlight[ 0 ].innerText;
    depInfoWhere.innerText = searchFlight[ 0 ].innerText;

})

searchBoxArv.addEventListener("click", () => { // 검색버튼 누르면 도착지 연동
    modal.style.display = 'none';
    arvCode.innerText = searchFlight[ 12 ].innerText;
    arvText.innerText = searchFlight[ 12 ].innerText;
    arvInfo.innerText = searchFlight[ 12 ].innerText;
    arvInfoWhere.innerText = searchFlight[ 12 ].innerText;


})

// 상세 보기 팝업
const info_btn = document.querySelectorAll(".info-btn"); // 상세보기 버튼
const modal_info = document.querySelector(".modal-info"); // 상세보기 팝업창
const modal_info_close = document.querySelector(".modal-info-close-btn");
const flightCode = document.querySelector(".info-flight-code-what") // 상세보기 내 뱅기코드
const eachFlightCode = document.querySelectorAll('.real-flight-code'); // 각 뱅기코드
const depInfoTime = document.querySelector(".real-dep-when"); // 상세보기 출발 시간
const arvInfoTime = document.querySelector(".real-arv-when"); // 상세보기 도착 시간
const depTime = document.querySelectorAll(".real-dep-time"); // 각 출발시간
const arvTime = document.querySelectorAll(".real-arv-time"); // 각 도착시간

modal_info_close.addEventListener("click", () => { // 버튼 누르면 팝업창 열기
    modal_info.style.display = "none";
})

for (let i = 0; i < info_btn.length; i++) { // 상세보기 누르면 뱅기 코드랑 시간 연동되게
    info_btn[ i ].addEventListener("click", () => {
        modal_info.style.display = "flex"
        flightCode.innerText = eachFlightCode[ i ].innerText;
        depInfoTime.innerText = depTime[ i ].innerText;
        arvInfoTime.innerText = arvTime[ i ].innerText;
    })
}

// 요일 색 변경
const date_btn = document.querySelectorAll(".dep-nav-box-btn"); // 요일 박스
date_btn.forEach(
    (item) => {
        item.addEventListener("click", function () {
            this.classList.toggle('dep-box-change');
        });
    }
)

// 좌석 색 변경
const seat_btn = document.querySelectorAll(".dep-seat"); // 좌석 클래스 박스
seat_btn.forEach(
    (item) => {
        item.addEventListener("click", function () {
            this.classList.toggle('choice-seat-change');
        });
    }
)

// 비행기 편 색 변경
const seat_info_btn = document.querySelectorAll('.all-seat-info'); // 본문에 금액 버튼
seat_info_btn.forEach(
    (item) => {
        item.addEventListener("click", function () {
            this.classList.toggle('choice');
        });
    }
)

// 비행기 클래스 누르면 좌석 클래스 변경
const seat_class = document.querySelectorAll('.whichclass'); // 각 본문에 적힌 클래스
const normal_class = document.querySelector(".seat-normal"); // 일반석
const pre_class = document.querySelector(".seat-pre"); // 프레스티지석
const best_class = document.querySelector(".seat-best"); // 우등석
const howmuch_seat_btn = document.querySelectorAll('.howmuch-seat'); //각 금액

normal_class.addEventListener("click", () => { // 일반석 버튼 누르면 클래스 변경 + 금액 변경
    for (let i = 0; i < seat_class.length; i++) {
        seat_class[ i ].innerText = normal_class.innerText;
    }
    howmuch_seat_btn[ 0 ].innerText = "311,200";
    howmuch_seat_btn[ 1 ].innerText = "334,090";
    howmuch_seat_btn[ 2 ].innerText = "329,320";
    howmuch_seat_btn[ 3 ].innerText = "309,990";

})

pre_class.addEventListener("click", () => { // 프레스티지 버튼 누르면 클래스 변경 + 금액 변경
    for (let i = 0; i < seat_class.length; i++) {
        seat_class[ i ].innerText = pre_class.innerText;
    }
    howmuch_seat_btn[ 0 ].innerText = "501,300";
    howmuch_seat_btn[ 1 ].innerText = "490,100";
    howmuch_seat_btn[ 2 ].innerText = "499,020";
    howmuch_seat_btn[ 3 ].innerText = "510,290";
})

best_class.addEventListener("click", () => { // 우등석 버튼 누르면 클래스 변경 + 금액 변경
    for (let i = 0; i < seat_class.length; i++) {
        seat_class[ i ].innerText = best_class.innerText;
    }
    howmuch_seat_btn[ 0 ].innerText = "690,000";
    howmuch_seat_btn[ 1 ].innerText = "710,200";
    howmuch_seat_btn[ 2 ].innerText = "703,990";
    howmuch_seat_btn[ 3 ].innerText = "702,110";
})

// 결제 금액 반환
const howmuch_btn = document.querySelector('.howmuch'); //000,000
const change_won = document.querySelectorAll('.seat-info'); // 각 본문 박스

for (let i = 0; i < change_won.length; i++) { // 본문 박스 누르면 결제 금액 반환
    change_won[ i ].addEventListener("click", () => {
        howmuch_btn.innerText = howmuch_seat_btn[ i ].innerText;
    })
}


// 버튼 하나 눌렸으면 다른 거 안 되게 < 아직 하는 중
const nav_btn = document.querySelectorAll(".dep-nav-box-btn"); // 날짜 박스

nav_btn.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        nonActiveBtn(e.target);
        e.target.classList.toggle('active');
        
    })
})

function nonActiveBtn(e){
    nav_btn.forEach((item)=>{
        if(item != e)
        item.classList.remove('active');
    });
}



