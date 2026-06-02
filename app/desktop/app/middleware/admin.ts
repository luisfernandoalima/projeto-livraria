export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth();

  if (!user.value || user.value?.funcao !== "ADMIN") {
    return navigateTo("/");
  }
});
