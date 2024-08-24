<template>
    <div class="bg-slate-100 py-6">
        <div :class="`${containerClass} `">
            <div class="flex items-center justify-between mb-3">
                <h1 class="font-bold text-[20px]">Join us for free!</h1>
                <p>
                    <span>Login instead? </span>
                    <router-link to="/login" class="text-blue-800 hover:underline">Login</router-link>
                </p>
            </div>
            <div class="flex justify-center bg-white py-8">
                <div class="w-auto md:w-[500px] shadow-sm p-2">
                    <h1 class="font-bold text-[18px]">Create your Love's Kitchen Account</h1>
                    <form autocomplete="off">
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                            <input type="tel" id="tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " :value="mobileNumber" disabled />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input autocomplete="off" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
                        </div>
                        <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                            <input autocomplete="off" type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div class="flex items-start mb-5">
                            <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                    </form>

                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded">
                        <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                            Or sign up with
                        </div>
                    </div>

                    <div class="flex flex-col gap-[20px]">
                        <button type="submit" class="flex gap-[15px] items-center justify-center text-black border-[1px] border-slate-500 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center">
                            <img src="@assets/facebook.png" alt="facebook" class="w-[30px]">
                            <span>Facebook</span>
                        </button>
                        <button type="submit" class="flex gap-[15px] items-center justify-center text-black border-[1px] border-slate-500 bg-white hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center">
                            <img src="@assets/google.png" alt="Google" class="w-[30px]">
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
    <FooterNavigation />
</template>


<script>
import FooterNavigation from '@layouts/user/footer.navigation.vue';
import FooterComponent from '@layouts/user/footer.layout.vue';
import ModalDialog from '@components/common/modal-dialog.vue'
import { isValidPhoneNumber } from  '@library/utils'

export default {
    name: 'Sign up',
    data() {
        return {
            showDialog: false,
            isCheckedTerms: false,
            isCheckedTermsError: false,
            isPhoneNumberValid: true,
            phoneNumber: '',
            phoneNumberErrorMessage: this.$phoneNumberErrorMessage
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
        mobileNumber() {
            return this.$route.query.mobile
        }
    },
    methods: {
        signUp() {
            this.showDialog = true
        },
        handleCancel() {
            this.showDialog = false
        },
        handleConfirm(e) {
            if (e !== undefined) {
                e.preventDefault()
            }

            if (this.phoneNumber == '') {
                this.isPhoneNumberValid = false
                this.phoneNumberErrorMessage = 'Mobile number is required'
                return
            }

            if (!isValidPhoneNumber(this.phoneNumber)) {
                this.isPhoneNumberValid = false
                this.phoneNumberErrorMessage= this.$phoneNumberErrorMessage
                return
            }

            if (!this.isCheckedTerms) {
                this.isCheckedTermsError = true
                return
            }


            this.$router.push({path: '/signup', query: {mobile: this.phoneNumber}})
            this.showDialog = false
        },
        phoneNumberChange(e) {
            this.isPhoneNumberValid = true
        }
    }
}
</script>