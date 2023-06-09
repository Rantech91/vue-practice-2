import { ref } from "vue";
import axios from "axios";

export const useGetData = () => {
  const loading = ref(true);
  const error = ref(null);
  const data = ref(null);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (e) {
      error.value = "Error de servidor";
      //console.log(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    getData,
    data,
    loading,
    error,
  };
};
