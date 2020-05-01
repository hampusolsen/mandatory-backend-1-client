const FORM_INPUT = 'FORM_INPUT';
const ERROR = 'ERROR';

export const createErrorAction = (errors) => ({
   type: ERROR,
   payload: errors,
});

export const createFormDataAction = (keyValuePair) => ({
   type: FORM_INPUT,
   payload: keyValuePair,
});

export function getPasswordFillColor(strength) {
   switch (strength) {
      case 0: return '';
      case 1: return 'red';
      case 2: return 'orange';
      case 3: return 'yellow';
      case 4: return 'lime';
      case 5: return 'green';
      default: return;
   };
};

function evaluatePasswordStrength(password) {
   const high = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#¤%&/()=?,.]).{7,}$/;
   const medium = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[!#¤%&/()=?,.]).{7,}$/;
   const low = /^(?=.*[a-z]).{7,}$/;

   if (high.test(password) && password.length > 14) return [5, 'Excellent'];
   if (high.test(password)) return [4, 'Good'];
   if (medium.test(password) && password.length > 14) return [3, 'OK'];
   if (medium.test(password)) return [2, 'Acceptable'];
   if (low.test(password)) return [1, 'Bad'];
   return [0, 'Invalid'];
};

function validateEmail(email) {
   return !/^.*@.*\.([a-z]{2,})$/.test(email)
      ? 'Invalid e-mail address.'
      : false;
};

function validateUsername(username) {
   const noSymbols = /.(?!.*[_\-\\!"#¤%&/()=?`´,.*'^¨~|><§])/.test(username);

   if (username.length < 7) return 'Minimum of 7 characters.';
   if (username.length >= 7 && username.length <= 21 && noSymbols) return false;
   if (username.length > 21) return 'Maximum of 21 characters.';
   return 'No special characters allowed.';
};

export function validateFormState({ email, username }) {
   const emailValidation = validateEmail(email);
   const usernameValidation = validateUsername(username);

   if (!emailValidation && !usernameValidation) return false;

   return {
      email: emailValidation,
      username: usernameValidation,
   };
};

export const initialFormState = {
   email: '',
   password: '',
   username: '',
   error: {
      email: false,
      username: false,
   },
   passwordStrength: [0, 'Invalid'],
   submitted: false,
};

export function reducer(state, action) {
   switch (action.type) {
      case FORM_INPUT:
         let passwordStrength = state.passwordStrength;
         if (action.payload.password) passwordStrength = evaluatePasswordStrength(action.payload.password);

         return {
            ...state,
            ...action.payload,
            passwordStrength,
         };

      case ERROR:
         return { ...state, error: action.payload };

      default:
         return state;
   };
};