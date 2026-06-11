export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client) {
    const token = localStorage.getItem("auth_token");
    if (!token) return navigateTo("/login");
  }
});
