const choiceSeat = document.querySelectorAll(".yes-seat"); // 선택 가능한 좌석
const childSeat = document.querySelectorAll(".child-seat"); // 유아석
const choiceSeatNum = document.querySelectorAll(".num"); // 선택 가능한 좌석 좌표
const mySeat = document.querySelector(".choice-seat-box"); // 승객 정보에 보이는 선택한 좌석 
const adultCount = document.querySelectorAll(".adult-count"); // 성인 승객 수 반영 
const childCount = document.querySelectorAll(".child-count"); // 성인 승객 수 반영 

// 선택하면 좌석 색 변경
let adult = 0; // 인원 수 카운트
let child = 0;

let seatCount = 0;
let seatArr = []; // 누른 좌석 정보를 저장하는 배열 생성 > 실패

choiceSeat.forEach(
    (item)=>{
        item.addEventListener("click",function(e){
            let question = confirm("현재 좌석을 선택하시겠습니까?");

            if (question == true){ 
                this.classList.toggle('change-seat'); // 확인 누를 때만 색 변경
    
                adult ++;
                adultCount[0].innerText = adult; // 성인 인원 수 반영
                adultCount[1].innerText = adult; // 인원 수 반영
                
            } else{
                this.classList.remove('change-seat'); // 취소 누르면 색 삭제
            }
        }
    )}
)

childSeat.forEach( // 유아석
    (item)=>{
        item.addEventListener("click",function(e){
            let childQues = confirm("유아석을 이용하시겠습니까?");

            if(childQues == true){
                alert('유아석은 보호자의 동반 하에 이용하실 수 있습니다!')
                this.classList.toggle('change-seat-child');

                child++;
                childCount[0].innerText = child;
                childCount[1].innerText = child;
            } else{
                this.classList.remove('change-seat-child');
            }
        })
    }
)

for(let i=0;i<seatCount.length; i++){

}
