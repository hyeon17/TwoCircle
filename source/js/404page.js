import { router } from '../route.js';
export function notFoundHandler() {
  const clockEl = document.querySelector('.clock');
  const clock = document.createElement('div');
  clock.classList.add('clock-widget');
  clockEl.appendChild(clock);

  // 시계 업데이트 함수
  let remainingTime = 3;
  function updateClock() {
    clock.innerHTML = `메인페이지 이동까지 <span style="color: #FF597B; font-weight: bold;">${remainingTime}</span>초 남았습니다`;
    remainingTime--;
    if (remainingTime < 0) {
      clearTimeout(intervalId);
      router.navigate('/');
    }
  }

  // 초마다 업데이트
  const intervalId = setTimeout(updateClock, 1000);
}
