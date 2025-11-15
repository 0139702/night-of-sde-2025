document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");

    days.forEach(day => {
        const num = parseInt(day.textContent);
        if (isNaN(num)) return;

        // ⭐ 5의 배수 (BONUS DAY)
        if (num % 5 === 0) {

            // 기존 day 요소를 래퍼로 감싸기
            const wrapper = document.createElement("div");
            wrapper.classList.add("day-wrapper");

            // day의 부모를 가져와서 wrapper를 대신 넣기
            const parent = day.parentNode;
            parent.replaceChild(wrapper, day);

            // wrapper 안에 day 다시 넣기
            wrapper.appendChild(day);

            // 스타일 적용
            day.classList.add("bonus-day");
            day.textContent = "";

            // 이미지 추가
            const img = document.createElement("img");
            img.src = "./img/bonus_char.svg";
            img.classList.add("bonus-img");
            day.appendChild(img);

            // 버튼 추가
            const btn = document.createElement("button");
            btn.classList.add("bonus-btn");
            btn.textContent = "BONUS";

            wrapper.appendChild(btn);

            // 버튼 이벤트
            btn.addEventListener("click", () => {
                alert(`${num}번 BONUS 받기!`);
            });
        }
    });
});
