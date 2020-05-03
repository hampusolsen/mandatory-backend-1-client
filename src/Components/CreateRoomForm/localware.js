// Initial state declarations
export const initialFormState = {
   title: '',
   adminPassword: '',
   password: '',
   motd: '',
   errors: {
      title: false,
      adminPassword: false,
      password: false,
      motd: false,
   },
};

export function createRoomObject({ title, adminPassword, password, motd }) {
   if (!password && !motd) return { title, adminPassword };
   if (!password) return { title, adminPassword, motd };
   if (!motd) return { title, adminPassword, password };
   return { title, adminPassword, password, motd };
};

export function validateFormInput({ title, adminPassword, password, motd }) {
   const titleError = validateTitle(title);
   const adminPasswordError = validatePassword(adminPassword);
   const passwordError = password ? validatePassword(password) : false;
   const motdError = validateMotd(motd);

   return (titleError || adminPasswordError || passwordError || motdError)
      ? {
         title: titleError,
         adminPassword: adminPasswordError,
         password: passwordError,
         motd: motdError,
      }
      : false;
};

function validateMotd(message) {
   if (message.length > 50) return 'Maximum characters allowed is 50.';
   else return false;
};

function validatePassword(password) {
   if (password.length < 7) return 'Minimum characters allowed is 7';
   if (password.length > 21) return 'Maximum characters allowed is 21.';
   return false;
};

function validateTitle(title) {
   if (title.length < 3) return 'Minimum characters allowed is 3.';
   if (title.length > 21) return 'Maximum characters allowed is 21.';
   if (/["#¤%&/()=^~¨*'.:,;<>|åäöÅÄÖ]/g.test(title)) return 'No special characters allowed.';
   return false;
};