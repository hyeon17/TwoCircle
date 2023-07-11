import { notFoundHandler } from '../../source/js/404page.js';
export function notFoundRender() {
  const app = document.querySelector('#app');
  app.innerHTML = /*html*/ `
  <div id="wrap">
    <div class="wrap_container">
      <div class="notfound">
        <img src="../../image/notfound.png" alt="404" />
        <div class="title">존재하지 않는 페이지 입니다</div>
        <button class="home">홈으로 이동</button>
      </div>
    </div>
  </div>
  `;
  notFoundHandler();
}