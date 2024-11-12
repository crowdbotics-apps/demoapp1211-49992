import axios from "axios"
const demoappAPI = axios.create({
  baseURL: "https://demoapp1211-49992.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return demoappAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_class_list(payload) {
  return demoappAPI.get(`/api/v1/class/`)
}
function api_v1_class_create(payload) {
  return demoappAPI.post(`/api/v1/class/`, payload)
}
function api_v1_class_retrieve(payload) {
  return demoappAPI.get(`/api/v1/class/${payload.id}/`)
}
function api_v1_class_update(payload) {
  return demoappAPI.put(`/api/v1/class/${payload.id}/`, payload)
}
function api_v1_class_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/class/${payload.id}/`, payload)
}
function api_v1_class_destroy(payload) {
  return demoappAPI.delete(`/api/v1/class/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return demoappAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return demoappAPI.post(`/api/v1/homepage/`, payload)
}
function api_v1_homepage_retrieve(payload) {
  return demoappAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return demoappAPI.put(`/api/v1/homepage/${payload.id}/`, payload)
}
function api_v1_homepage_partial_update(payload) {
  return demoappAPI.patch(`/api/v1/homepage/${payload.id}/`, payload)
}
function api_v1_homepage_destroy(payload) {
  return demoappAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return demoappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return demoappAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return demoappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return demoappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return demoappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return demoappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return demoappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return demoappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return demoappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return demoappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_class_list,
  api_v1_class_create,
  api_v1_class_retrieve,
  api_v1_class_update,
  api_v1_class_partial_update,
  api_v1_class_destroy,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_retrieve,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
