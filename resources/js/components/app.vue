<template>
    <navbar />
    <main class="max-w-screen-xl flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto p-4 relative">
        <router-view />
    </main>
</template>


<script setup>
import navbar from '../components/layouts/navbar.vue'
</script>