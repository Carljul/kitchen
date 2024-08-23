<template>
    <div class="bg-slate-100 py-6">
        <div :class="`${containerClass} `">
            <div class="flex items-center justify-between mb-3">
                <h1 class="font-bold text-[20px]">Welcome to Love's Kitchen!</h1>
                <p>
                    <span>No Account yet? </span>
                    <button @click="signUp" class="text-blue-800 underline">Signup</button>
                </p>
            </div>
            <div class="flex justify-center bg-white py-8">
                <div class="w-auto md:w-[500px] shadow-sm p-2">
                    <h1 class="font-bold text-[18px]">Login with Password</h1>
                    <form>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
    <FooterNavigation />
    <ModalDialog
        :isVisible="showDialog"
        title="Join us for free!"
        @close="handleCancel"
        @confirm="handleConfirm"
    >
        <form>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your mobile number</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+639123456789" required />
            </div>
            
            <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-500">By creating and/or using your account, you agree to our <router-link to="/terms" class="text-blue-800 hover:underline">Terms of Use</router-link> and <router-link to="/privacy-policy" class="text-blue-800 hover:underline">Privacy Policy</router-link>.</label>
            </div>
        </form>
    </ModalDialog>
</template>


<script>
import FooterNavigation from '@layouts/user/footer.navigation.vue';
import FooterComponent from '@layouts/user/footer.layout.vue';
import ModalDialog from '@components/common/modal-dialog.vue'
export default {
    name: 'Cart',
    data() {
        return {
            showDialog: false
        }
    },
    components: {
        FooterNavigation,
        FooterComponent,
        ModalDialog
    },
    computed: {
        containerClass() {
            return this.$containerClass
        },
        signUp() {
            this.showDialog = true
        },
        handleCancel() {
            this.showDialog = false
        },
        handleConfirm() {
            this.showDialog = false
        }
    }
}
</script>