<script setup>
definePageMeta({
  middleware: "admin",
});

const { getToken } = useAuthToken();

const router = useRoute();
const api = useApi();

const token = getToken();

const id = router.params.id;

const response = await api(`/user/delete/${id}`, {
  method: "DELETE",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

console.log(response);

navigateTo("/colaborador");
</script>
