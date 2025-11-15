document.querySelectorAll(".bet-card").forEach(card => {

    let startY = 0;

    card.addEventListener("touchstart", e => {
        startY = e.touches[0].clientY;
    });

    card.addEventListener("touchmove", e => {
        const moveY = e.touches[0].clientY;
        const diff = startY - moveY;

        if (diff > 30) {
            card.style.transform = "translateY(-40px)";
        }
    });

    card.addEventListener("touchend", e => {
        card.style.transform = "translateY(0)";
    });

    document.body.classList.add('stop-scrolling');

    document.querySelectorAll(".bet-card").forEach((card, index) => {
    if (index % 2 === 0) {
        card.style.backgroundColor = "#FF5AA8";  // 홀수 (0,2,4...)
    } else {
        card.style.backgroundColor = "#FF0078";  // 짝수 (1,3,5...)
    }
});

const popup = document.getElementById("popup-overlay");

// 카드 스와이프 이벤트
document.querySelectorAll(".bet-card").forEach(card => {

    let startY = 0;

    card.addEventListener("touchstart", e => {
        startY = e.touches[0].clientY;
    });

    card.addEventListener("touchmove", e => {
        const moveY = e.touches[0].clientY;
        const diff = startY - moveY;

        if (diff > 50) {
            // 카드 살짝 위로
            card.style.transform = "translateY(-40px)";
        }
    });

    card.addEventListener("touchend", e => {
        const endY = e.changedTouches[0].clientY;
        const diff = startY - endY;

        if (diff > 50) {
            // 스와이프 감지 → 팝업 열기
            openPopup();
        }

        // 카드 원래 위치로
        card.style.transform = "translateY(0)";
    });
});

// 팝업 열기
function openPopup() {
    popup.style.display = "flex";  // 오버레이 보이기
    document.body.style.overflow = "hidden";  // 스크롤 잠금
}

// 팝업 클릭 → 닫기
popup.addEventListener("click", () => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
});


});