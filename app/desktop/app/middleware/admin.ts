export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth();

  if (!user.value || user.value?.funcao !== 1) {
    return navigateTo("/");
  }
});
