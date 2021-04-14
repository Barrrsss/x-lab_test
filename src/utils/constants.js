//конфиг валидации
export const validationConfig = {
    formSelector: '.popup__fields',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inputInvalidClass: 'popup__field_invalid',
    inputErrorClass: 'popup__field-error',
    buttonInvalidClass: 'popup__button_inactive',
};

//идентификация для Api
const options = {
    url: 'http://agile-garden-50413.herokuapp.com/api/',
}
export default options;
