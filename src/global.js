import Vue from "vue";

export const userKey = "keydousuario";
export const baseApiUrl = "http://localhost:3001";

export function showError() {
  Vue.toasted.global.defaultError();
}

export default { baseApiUrl, showError, userKey };
