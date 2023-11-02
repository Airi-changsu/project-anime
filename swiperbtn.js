const imagePaths = [
    '../project-anime/images/여행 1.jpg',
    '../project-anime/images/여행 2.jpg',
    '../project-anime/images/여행 3.jpg',
    '../project-anime/images/여행 4.jpg',
    '../project-anime/images/여행 5.jpg',
    // 추가 이미지 경로 계속 추가
];

let currentImageIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const image = document.getElementById('myImage');

prevButton.addEventListener('click', () => changeImage(-1));
nextButton.addEventListener('click', () => changeImage(1));

function changeImage(step) {
    currentImageIndex += step;

    if (currentImageIndex < 0) {
        currentImageIndex = imagePaths.length - 1;
    } else if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0;
    }

    const newImageSrc = imagePaths[currentImageIndex];
    image.src = newImageSrc;
}
