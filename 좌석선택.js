const choiceSeat = document.querySelectorAll(".yes-seat"); // 선택 가능한 좌석
const choiceSeatNum = document.querySelectorAll(".num") // 선택 가능한 좌석 좌표
const mySeat = document.querySelector(".choice-seat-box"); // 승객 정보에 보이는 선택한 좌석 
const personCount = document.querySelector(".person-count"); // 승객 수 반영 

// 선택하면 좌석 색 변경
let person = 0; // 인원 수 카운트
let seat = new Array(); // 누른 좌석 정보를 저장하는 배열 생성
let seatCount = 0;

choiceSeat.forEach(
    (item)=>{
        item.addEventListener("click",function(e){
            let question = confirm("현재 좌석을 선택하시겠습니까?");

            if (question == true){ 
                this.classList.toggle('change-seat'); // 확인 누를 때만 색 변경
                person ++;
                personCount.innerText = person; // 인원 수 반영

                for(let i=0; i<choiceSeatNum.length; i++){ // 좌석 정보 반영
                    
                    mySeat.innerText = choiceSeatNum[i].innerText; // 글씨 반영
                }
            } else{
                this.classList.remove('change-seat'); // 취소 누르면 색 삭제 
            }
        }
    )}
)
