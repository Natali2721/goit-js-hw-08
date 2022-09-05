/*Сервис для localStorage
Для того чтобы сократить количество повторяющегося кода при работе с веб - хранилищем, можно написать сервис с стандартными методами, например save и load.Они будут абстрагировать повторяющийся код проверки ошибок парса и тому подобную рутину.
*/
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};
/* Теперь мы можем безопасно добавлять и читать записи из локального хранилище. Попробуйте самостоятельно дописать метод remove(key) для удаления записи, аналогично load(key) и save(key, value). */
