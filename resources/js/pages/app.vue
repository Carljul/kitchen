<template>
    <navbar />
    <main class="pt-[185px] pb-[50px] md:pt-0 md:pb-0">
        <router-view />
    </main>
</template>


<script setup>
import navbar from '@layouts/user/navbar.vue'
</script>
