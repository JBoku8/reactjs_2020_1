import {
  RESET_LANGUAGE,
  CHANGE_LANGUAGE,
  UPDATE_LANGUAGE_LIST,
} from "../constants/action-types";

export const resetLanguage = () => ({ type: RESET_LANGUAGE });
export const changeLanguage = (newLang) => ({
  type: CHANGE_LANGUAGE,
  payload: newLang,
});
export const updateLanguageList = (newList) => ({
  type: UPDATE_LANGUAGE_LIST,
  payload: newList,
});
