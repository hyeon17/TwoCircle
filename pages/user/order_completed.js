import { orderCompletedHandler } from "../../source/js/order_completed.js";

export async function orderCompletedRender() {
  const app = document.querySelector("#app");
  app.innerHTML = /* html */ `
  <div id="wrap_order_completed">
    <div class="container_order_completed">
      <div class="order_completed">
        <div class="order_completed_inner">
          <!-- 상단 제목 -->
          <section class="title">
            <h1 class="title_text">주문이 완료되었습니다.</h1>
          </section>
          <!-- 주문내용 -->
          <section class="content">
            <h3 class="content_title">주문정보</h3>
            <div class="content_name"></div>
            <div class="content_date"></div>
            <div class="content_info"></div>
            <div class="content_list"></div>
            <div class="content_text">주문 물건 자세히 보기는 마이페이지에서 확인해주세요</div>
            <div class="content_btn">
              <button class="content_mypagebtn">마이페이지</button>
              <button class="content_homebtn">홈으로</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  `;
  orderCompletedHandler();
}
