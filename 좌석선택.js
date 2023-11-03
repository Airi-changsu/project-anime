const choiceSeat = document.querySelectorAll(".yes-seat"); // 선택 가능한 중간 좌석
const mySeat = document.querySelector(".choice-seat-box");

// 선택하면 좌석 색 변경
choiceSeat.forEach(
    (item)=>{
        item.addEventListener("click",function(){
            this.classList.toggle('change-seat');
            confirm ("현재 좌석을 선택하시겠습니까?")
            if(confirm == true){
                mySeat.innerText = "됐습니당";
            }
        }
    )}
)
