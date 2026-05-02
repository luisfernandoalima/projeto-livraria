<script setup>
definePageMeta({
  middleware: "auth",
});

const router = useRoute();
const api = useApi();

const token = useCookie("auth_token");

const id = router.params.id;

const response = await api(`/user/delete/${id}`, {
  method: "DELETE",
  headers: {
    authorization: `Bearer ${token.value}`,
  },
});

console.log(response);

navigateTo("/colaborador");
</script>
