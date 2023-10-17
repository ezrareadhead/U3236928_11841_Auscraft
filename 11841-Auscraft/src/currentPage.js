export const currentPage = {
    computed: {
      currentPage() {
        return this.$route.name;
      },
    },
  };