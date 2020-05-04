function getCookies() {
   const parsedCookies = {};
   const cookies = decodeURIComponent(document.cookie).split(';');

   cookies.forEach(cookie => {
      const [key, value] = cookie.split('=');
      parsedCookies[key] = value;
   });

   return parsedCookies;
};

export function getCookie(key) {
   return getCookies()[key];
};

export function setCookie(key, value) {

};