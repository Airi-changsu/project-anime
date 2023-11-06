const choiceSeat = document.querySelectorAll(".yes-seat"); // 선택 가능한 좌석
const choiceSeatNum = document.querySelectorAll(".num") // 선택 가능한 좌석 좌표
const mySeat = document.querySelector(".choice-seat-box"); // 승객 정보에 보이는 선택한 좌석 
const personCount = document.querySelector(".person-count"); // 승객 수 반영 

// console.log(mySeat.innerHTML);
// console.log(choiceSeatNum[0].innerText);

// 선택하면 좌석 색 변경
choiceSeat.forEach(
    (item)=>{
        item.addEventListener("click",function(){
            let question = confirm("현재 좌석을 선택하시겠습니까?");
            let person = 0 // 인원 수 카운트

            if (question == true){ 
                this.classList.toggle('change-seat'); // 확인 누를 때만 색 변경
                person ++;
                personCount.innerText = person; // 인원 수 반영 -> 한 개만 반영됨 ,,

                for(let i=0; i<choiceSeatNum.length; i++){ // 좌석 정보 반영 -> 한 개만 반영됨 ,,
                    mySeat.innerText = choiceSeatNum[i].innerText;
                }
            } else{
                this.classList.remove('change-seat'); // 취소 누르면 색 삭제 
            }
        }
    )}
)
