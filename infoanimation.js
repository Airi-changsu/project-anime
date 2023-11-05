document.addEventListener('DOMContentLoaded', function () {
    const topInfos = document.querySelectorAll('.top_info, .top_info_2, .top_info_3, .top_info_4, .top_info_5');
    let currentIndex = 0;

    function resetOpacity() {
        topInfos.forEach(function (info) {
            info.style.opacity = 0;
            info.style.transition = 'opacity 1s ease-in'; // 페이드 인 트랜지션 설정
        });
    }

    function showNextTopInfo() {
        resetOpacity();
        currentIndex = (currentIndex + 1) % topInfos.length;
        topInfos[currentIndex].style.opacity = 1;
    }

    function showPreviousTopInfo() {
        resetOpacity();
        currentIndex = (currentIndex - 1 + topInfos.length) % topInfos.length;
        topInfos[currentIndex].style.opacity = 1;
    }

    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', showPreviousTopInfo);
    nextButton.addEventListener('click', showNextTopInfo);

    resetOpacity();
    topInfos[currentIndex].style.opacity = 1;
});
