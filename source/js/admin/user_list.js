import { userlist } from "../../api/products/admin/user_list_api.js";
import { updatePagination, displayPage } from '../pagination.js';

export async function userListHandler() {
	const users = await userlist();
	const dot = document.querySelector('.dot-wrap');
	const adminUserListEl = document.querySelector('.admin_userlist');
	const paginationContainer = document.querySelector('.user_pagination');
	let itemLength = 0;
	let currentPage = 1;
	let itemsPerPage = 10;

	// 유저 리스트
	const liEl = users.map((list, index) => {
		const listEl = document.createElement('div');
		listEl.classList.add('list');
		const numberEl = document.createElement('div');
		numberEl.classList.add('list_number');
		const nameEl = document.createElement('div');
		nameEl.classList.add('list_name');
		const emailEl = document.createElement('div');
		emailEl.classList.add('list_email');
		const profileEl = document.createElement('div');
		profileEl.classList.add('list_profile');

		numberEl.innerHTML = `${index + 1}`;
		nameEl.innerHTML = `${list.displayName}`;
		emailEl.innerHTML = `${list.email}`;
		// 프로필 이미지가 없을 경우
		if (list.profileImg === null) {
			list.profileImg = 'https://via.placeholder.com/200x200?text=NO+IMAGE';
		}
		profileEl.innerHTML = `<img src="${list.profileImg}" alt="프로필">`;

		listEl.append(numberEl, nameEl, emailEl, profileEl);
		return listEl;
	});

	adminUserListEl.append(...liEl);

	// 페이지네이션
	const listItems = document.querySelectorAll('.list');
	itemLength = listItems.length;
	updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
	displayPage(currentPage, itemsPerPage, listItems);

	// 페이지 클릭 이벤트
	paginationContainer.addEventListener('click', (event) => {
		event.preventDefault();
		const link = event.target;

		if (link.classList.contains('page-link')) {
			const pageNum = parseInt(link.dataset.page, 10);
			currentPage = pageNum;
			updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
			displayPage(pageNum, itemsPerPage, listItems);
		}
		if (link.textContent === '<<') {
			if (currentPage === 1) {
				return;
			}
			currentPage = 1;
			updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
			displayPage(currentPage, itemsPerPage, listItems);
		}
		if (link.textContent === '<') {
			if (currentPage === 1) {
				return;
			}
			currentPage -= 1;
			updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
			displayPage(currentPage, itemsPerPage, listItems);
		}
		if (link.textContent === '>') {
			if (currentPage === Math.ceil(itemLength / itemsPerPage)) {
				return;
			}
			currentPage += 1;
			updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
			displayPage(currentPage, itemsPerPage, listItems);
		}
		if (link.textContent === '>>') {
			if (currentPage === Math.ceil(itemLength / itemsPerPage)) {
				return;
			}
			currentPage = Math.ceil(itemLength / itemsPerPage, currentPage);
			updatePagination(itemLength, itemsPerPage, currentPage, paginationContainer);
			displayPage(currentPage, itemsPerPage, listItems);
		}
	});

	dot.style.display = 'none';
}
