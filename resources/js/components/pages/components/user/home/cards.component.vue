<template>
    <router-link :to='goPath' class="w-[120px] md:w-[200px] rounded-md">
        <img :src="item.image" :alt="item.name" class="rounded-t-md">
        <p class="font-semibold">{{ item.name }}</p>
        <div class="flex flex-col">
            <small class="text-[12px] truncate-text">{{ item.description }}</small>
            <small class="text-[12px] font-bold">P{{item.price.toFixed(2)}}</small>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            reqiured: true
        },
        goPath: {
            type: String,
            reqiured: false
        }
    }
}
</script>
<style scoped>
.truncate-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
    max-height: 3em;
}
</style>
