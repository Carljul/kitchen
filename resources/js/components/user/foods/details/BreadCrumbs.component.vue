<template>
    <ul class="breadcrumbs">
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link :to="`/products/${$route.params.type}`">{{ $route.params.type }}</router-link></li>
        <li><router-link :to="`/products/${$route.params.type}/${$route.params.category}`">{{ $route.params.category }}</router-link></li>
        <li><router-link to="#">{{ this.name }}</router-link></li>
    </ul>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.breadcrumbs{
    display: flex;
}

.breadcrumbs li{
    position: relative;
}

.breadcrumbs li:first-child a {
    color: blue;
    margin-left: 0;
}

.breadcrumbs li a {
    color: blue;
    margin: 0 10px;
    text-transform: capitalize;
}

.breadcrumbs li:after {
    content: ' > ';
    color: blue;
    font-size: 16px;
}

.breadcrumbs li:last-child:after {
    content: '';
}

.breadcrumbs li:last-child a {
    color: black;
}

.breadcrumbs li a:hover {
    text-decoration: underline;
}

.breadcrumbs li:last-child a:hover {
    text-decoration: none;
}
</style>