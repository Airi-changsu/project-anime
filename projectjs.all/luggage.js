// 허용 범위 팝업
const modal = document.querySelector(".modal"); // 위탁수화물 허용 법위 팝업창
const modalOpen = document.querySelector(".lug-search"); // 허용 범위 버튼
const modalClose = document.querySelector(".modal-close-btn"); // 팝업 닫는 버튼

modalOpen.addEventListener("click", () => { //  버튼 누르면 팝업 생성
    modal.style.display = "flex";
})

modalClose.addEventListener("click", () => { // 팝업 닫기
    modal.style.display = "none";
})

// From 팝업
const modalFrom = document.querySelector(".modal-from"); //from 팝업
const fromBtn = document.querySelector(".from-btn"); //from 글자
const modalFromClose = document.querySelector(".modal-close"); // 팝업 닫는 버튼


fromBtn.addEventListener("click", ()=>{ // 버튼 누르면 팝업 생성
    modalFrom.style.display="flex";
})

// To 팝업
const toBtn = document.querySelector(".to-btn"); // to 글자

toBtn.addEventListener("click", ()=>{
    modalFrom.style.display="flex";
})

modalFromClose.addEventListener("click", () => { // 팝업 닫기
    modalFrom.style.display = "none";
})

// 버튼 누르면 from, to 연동
const searchBoxDep = document.querySelector(".search-form-btn-dep");  // 출발지 검색 버튼
const searchBoxArv = document.querySelector(".search-form-btn-arv");  // 도착지 검색 버튼
const searchFlight = document.querySelectorAll(".my-flight"); // 도시

searchBoxDep.addEventListener("click", () => { //검색버튼 누르면 출발지 연동
    fromBtn.innerText = searchFlight[ 0 ].innerText;
    fromBtn.style.color ="black";
})

searchBoxArv.addEventListener("click", () => { // 검색버튼 누르면 도착지 연동
    modal.style.display = 'none';
    toBtn.innerText = searchFlight[ 12 ].innerText;
    toBtn.style.color ="black";
})

// 수화물 조회 결과창
const dep = document.querySelector('.result-dep');
const arv = document.querySelector(".result-arv");
const seat = document.querySelector('.result-seat');
const grade = document.querySelector('.result-grade');
const resultBtn = document.querySelector(".lug-btn"); // 조회 버튼
const modalResult = document.querySelector('.modal-result'); //조회 팝업
const modalResultClose = document.querySelector(".modal-result-close"); // 닫기 버튼

resultBtn.addEventListener('click', ()=>{
    modalResult.style.display='flex';
    dep.innerText = searchFlight[ 0 ].innerText;
    arv.innerText = searchFlight[ 12 ].innerText;
    
})

modalResultClose.addEventListener("click", ()=>{
    modalResult.style.display="none";
})


// const selectSeat = document.getElementByName('seat-seat');
// const seatValue = selectSeat.value;






// // 라디오 선택지 > 안 됨 ㅜㅜ
// const volume1 = document.querySelector("#volunme1"); // 라디오 선택지
// const volume2 = document.querySelector("#volunme2");
// const volume3 = document.querySelector("#volunme3");
// const howmuch = document.querySelector(".result-howmuch"); // 선택에 따른 금액

// if(volume1.checked){
//     howmuch.innerText = "0";
// }

// if(volume2.checked){
//     howmuch.innerText = "400,000";
// }

// if(volume3.checked){
//     howmuch.innerText = "600,000";
// }


// 가로 세로 높이 계산
const calculateBtn= document.querySelector(".calculate-btn"); // 계산 결과 조회 버튼

const width = document.querySelector("#width"); //가로
const height = document.querySelector("#height"); //세로
const tall = document.querySelector('#tall'); //높이


calculateBtn.addEventListener("click",()=>{
    if((Number(width.value) + Number(height.value) + Number(tall.value)) > 158){
        alert("수화물 규정에서 벗어났습니다 ㅜ.ㅜ")
    } else if(width.value === " " || height.value === " " || height.value === " "){
        alert("모든 값을 입력하세요")
    }
    else{
        let question = confirm("수화물 규정 통과입니다 ~ 해당 수화물로 체크인을 진행하시겠습니까?");
        if(question == true){ // 버튼이랑 연동
            window.location.href = "http://127.0.0.1:5500/project-anime/projecthtmlall/%EC%8A%B9%EA%B0%9D%EC%A0%95%EB%B3%B4.html"
        }
    }
})


// 캘린더
const calBtn = document.querySelector('.cal-when-search'); // 캘린더 검색창
const calOpen = document.querySelector('.modal-calender'); // 캘린더 팝업창
const calClose = document.querySelector('.cal-btn'); // 일정 선택 버튼

var todayIs = new Date();
var year = todayIs.getFullYear();
var month = todayIs.getMonth();
var date = todayIs.getDate();
var toDayString = year + '/' + month + '/' + date;

calBtn.addEventListener("click",()=>{
    calOpen.style.display="flex";
})

calClose.addEventListener("click",()=>{
    calOpen.style.display="none";
    calBtn.innerText = toDayString; // 버튼 누르면 오늘 날짜 반영하도록
})

// 캘린더 소스 참고
window.onload = function () { buildCalendar(); }    // 웹 페이지가 로드되면 buildCalendar 실행

let nowMonth = new Date();  // 현재 달을 페이지를 로드한 날의 달로 초기화
let today = new Date();     // 페이지를 로드한 날짜를 저장
today.setHours(0,0,0,0);    // 비교 편의를 위해 today의 시간을 초기화

// 달력 생성 : 해당 달에 맞춰 테이블을 만들고, 날짜를 채워 넣는다.
function buildCalendar() {

    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);     // 이번달 1일
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0);  // 이번달 마지막날

    let tbody_Calendar = document.querySelector(".Calendar > tbody");
    document.getElementById("calYear").innerText = nowMonth.getFullYear();             // 연도 숫자 갱신
    document.getElementById("calMonth").innerText = leftPad(nowMonth.getMonth() + 1);  // 월 숫자 갱신

    while (tbody_Calendar.rows.length > 0) {                        // 이전 출력결과가 남아있는 경우 초기화
        tbody_Calendar.deleteRow(tbody_Calendar.rows.length - 1);
    }

    let nowRow = tbody_Calendar.insertRow();        // 첫번째 행 추가           

    for (let j = 0; j < firstDate.getDay(); j++) {  // 이번달 1일의 요일만큼
        let nowColumn = nowRow.insertCell();        // 열 추가
    }

    for (let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate() + 1)) {   // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복  

        let nowColumn = nowRow.insertCell();        // 새 열을 추가하고
        nowColumn.innerText = leftPad(nowDay.getDate());      // 추가한 열에 날짜 입력

    
        if (nowDay.getDay() == 0) {                 // 일요일인 경우 글자색 빨강으로
            nowColumn.style.color = "#DC143C";
        }
        if (nowDay.getDay() == 6) {                 // 토요일인 경우 글자색 파랑으로 하고
            nowColumn.style.color = "#0000CD";
            nowRow = tbody_Calendar.insertRow();    // 새로운 행 추가
        }


        if (nowDay < today) {                       // 지난날인 경우
            nowColumn.className = "pastDay";
        }
        else if (nowDay.getFullYear() == today.getFullYear() && nowDay.getMonth() == today.getMonth() && nowDay.getDate() == today.getDate()) { // 오늘인 경우           
            nowColumn.className = "today";
            nowColumn.onclick = function () { choiceDate(this); }
        }
        else {                                      // 미래인 경우
            nowColumn.className = "futureDay";
            nowColumn.onclick = function () { choiceDate(this); }
        }
    }
}

// 날짜 선택
function choiceDate(nowColumn) {
    if (document.getElementsByClassName("choiceDay")[0]) {                              // 기존에 선택한 날짜가 있으면
        document.getElementsByClassName("choiceDay")[0].classList.remove("choiceDay");  // 해당 날짜의 "choiceDay" class 제거
    }
    nowColumn.classList.add("choiceDay");           // 선택된 날짜에 "choiceDay" class 추가
}

// 이전달 버튼 클릭
function prevCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() - 1, nowMonth.getDate());   // 현재 달을 1 감소
    buildCalendar();    // 달력 다시 생성
}
// 다음달 버튼 클릭
function nextCalendar() {
    nowMonth = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, nowMonth.getDate());   // 현재 달을 1 증가
    buildCalendar();    // 달력 다시 생성
}

// input값이 한자리 숫자인 경우 앞에 '0' 붙혀주는 함수
function leftPad(value) {
    if (value < 10) {
        value = "0" + value;
        return value;
    }
    return value;
}
