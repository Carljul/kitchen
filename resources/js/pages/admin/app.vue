<template>
    <navbarSidebar @isSidebarOpen="handleIsSidebar" :isSidebarOpenValue="isSidebarOpen" />
    <main
      class="p-4 transition-all duration-300 mt-[54px]"
      :class="isSidebarOpen ? 'main-expanded' : 'main-collapsed'"
    >
      <router-view />
    </main>
  </template>
  
  <script>
  import navbarSidebar from '@layouts/admin/navbarSidebar.vue';
  
  export default {
    data() {
      return {
        isSidebarOpen: false,
      };
    },
    components: {
      navbarSidebar,
    },
    methods: {
      handleIsSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .main-collapsed {
    margin-left: 0; /* Adjust the margin to 0 when the sidebar is closed */
    width: 100%; /* Full width when sidebar is closed */
  }
  
  .main-expanded {
    margin-left: 16rem; /* 64px * 4; same as sm:ml-64 */
    width: calc(100% - 16rem); /* Adjust width to account for the sidebar width */
  }
  </style>
  