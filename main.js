const { createApp } = Vue;

createApp({
  data() {
    return {
      disk: [],
    };
  },
  created() {
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.disk = res.data;
    });
  },
}).mount("#app");
