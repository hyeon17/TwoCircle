import { router } from '../route.js';
export function notFoundHandler() {
  const homeBtn = document.querySelector('.home');
  homeBtn.addEventListener('click', () => {
    router.navigate('/');
  });
	
}
