import { router } from '../route.js';
export function notFoundHandler() {
  
  setTimeout(() => {
    router.navigate('/');
  }, 3000);
}
