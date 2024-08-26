<template>
    <div class="p-5 w-full md:w-[600px] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
        <div class="flex justify-between items-center mb-3">
            <h1 class="text-[20px]">Login as Administrator</h1>
            <img src="@assets/logo6.jpg" class="h-[60px]" alt="Love's Kitchen" />
        </div>
        <div class="shadow-md p-4 border-[1px] border-slate-300 rounded-md">
            <form>
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Admin Login',
    mounted() {
        document.body.classList.add('admin-page')
        document.documentElement.classList.add('admin-page')
    },
    beforeUnmount() {
        document.body.classList.remove('admin-page')
        document.documentElement.classList.remove('admin-page')
    }
}
</script>

<style>
.admin-page {
    height: 100%;
}
</style>