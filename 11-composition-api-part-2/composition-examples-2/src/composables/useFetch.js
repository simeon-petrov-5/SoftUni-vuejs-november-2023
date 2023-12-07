import axios from 'axios';
import { ref } from 'vue';

export function useFetch(url) {
  const isLoading = ref(true);
  const hasError = ref(false);
  const data = ref(null);

  axios.get(url).then((respone) => {
    data.value = respone.data;
  }).catch((error) => {
    console.error('Oops', error);
    hasError.value = true;
  }).finally(() => {
    isLoading.value = false;
  });

  return {
    isLoading,
    hasError,
    data,
  };
}
