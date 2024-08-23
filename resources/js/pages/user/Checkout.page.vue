<template>
    <div :class="containerClass">
        <div class="flex flex-col md:flex-row justify-evenly">
            <!-- Receipt -->
            <div class="w-full md:w-[500px]">
                <router-link to="/cart" class="text-white px-3 py-2 bg-blue-600 rounded-md">Edit cart</router-link>
                <div class="border-[1px] border-slate-300 shadow-md rounded-md p-5 mt-3">
                    <div class="w-full flex flex-col text-center">
                        <img src="@assets/logo6.jpg" class="h-[100px] mx-auto" alt="Love's Kitchen" />
                        <span>Love's Kitchen, Baranggay Tangke, Talisay, Cebu City</span>
                        <span>VAT-REG TIN 000-123-456-7890</span>
                        <span>Contact # 09123456789 / 09123456789</span>
                    </div>
                    <hr class="my-3">
                    <table
                        v-show="cartItems.length > 0"
                        class="w-full"
                    >
                        <tbody>
                            <tr>
                                <td colspan="3" class="font-bold text-center border-b-[1px] border-slate-200 pb-3">Items</td>
                            </tr>
                            <tr v-for="foods in cartItems">
                                <td class="w-[50%] flex flex-col">
                                    <span>{{ foods.name }}</span>
                                    <small class="indent-5">Php {{ priceFormat(foods.price.toFixed(2)) }}</small>
                                </td>
                                <td class="w-[20%]">{{foods.quantity}} x</td>
                                <td class="w-[30%]">Php {{priceFormat((foods.price * foods.quantity).toFixed(2))}}</td>
                            </tr>
                            <tr>
                                <td colspan="2" class="py-2 w-[70%] font-bold">Subtotal</td>
                                <td class="w-[30%] font-bold">Php {{priceFormat(cartsTotal.toFixed(2))}}</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="font-bold text-center border-y-[1px] border-slate-200 py-3">Shipping</td>
                            </tr>
                            <tr>
                                <td colspan="2" class="w-[70%] py-2">Fee:</td>
                                <td class="w-[30%]">Php {{priceFormat(deliveryFeeAmount.toFixed(2))}}</td>
                            </tr>
                            <tr class="border-t-[1px] border-slate-200">
                                <td colspan="2" class="w-[70%] font-bold py-3">Total:</td>
                                <td class="w-[30%] font-bold">Php {{priceFormat((cartsTotal + deliveryFeeAmount).toFixed(2))}}</td>
                            </tr>
                            <tr
                                class="border-t-[1px] border-slate-200"
                                v-show="!isPayFull"
                            >
                                <td class="w-[50%] font-bold py-3">Downpayment:</td>
                                <td class="w-[20%] font-bold py-3">50%</td>
                                <td class="w-[30%] font-bold">Php {{priceFormat(((cartsTotal + deliveryFeeAmount) / 2).toFixed(2))}}</td>
                            </tr>
                        </tbody>
                    </table>

                    <p class="text-center mt-5">DEPOSIT INVOICE: 00011815</p>
                    <p class="text-center">THIS SERVES AS YOUR DEPOSIT INVOICE, YOU MAY GET YOUR SALES INVOICE AFTER YOU FULLY PAID AND MARK THE ORDER STATUS COMPLETED</p>
                </div>
            </div>

            <!-- Mode of payment -->
            <div class="shadow-md rounded-md p-5 w-full md:w-[500px] flex flex-col justify-between">
                <div>
                    <h1 class="text-[20px] font-bold">Available Payment Method</h1>
                    <ul class="mt-3 flex flex-col gap-[20px]">
                        <li>
                            <button
                                class="flex flex-row items-center w-full justify-between shadow-lg p-3 hover:bg-blue-300"
                                @click="selectPaymentMethod('gcash')"
                            >
                                <div class="flex flex-row gap-[20px] items-center">
                                    <img src="@assets/payment/gcash.png" alt="GCash" class="w-[50px]">
                                    <div class="flex flex-col text-left">
                                        <span class="font-bold text-[15px]">Gcash</span>
                                        <span class="font-mute text-[15px]">+639*****5047</span>
                                    </div>
                                </div>
                                <input
                                    type="radio"
                                    name="mode_of_payment"
                                    value="gcash"
                                    v-model="selectedPaymentMethod"
                                >
                            </button>
                        </li>
                        <li>
                            <button
                                class="flex flex-row items-center w-full justify-between shadow-lg p-3 disabled:bg-slate-300 hover:bg-blue-300"
                                @click="selectPaymentMethod('BPI')"
                                disabled="true"
                            >
                                <div class="flex flex-row gap-[20px] items-center grayscale opacity-[0.4]">
                                    <img src="@assets/payment/cards.png" alt="GCash" class="w-[50px]">
                                    <div class="flex flex-col text-left">
                                        <span class="font-bold text-[15px]">Credit/Debit Card</span>
                                        <span class="text-[15px]">Link your account</span>
                                    </div>
                                </div>
                                <input
                                    type="radio"
                                    name="mode_of_payment"
                                    value="BPI"
                                    v-model="selectedPaymentMethod"
                                    disabled="true"
                                >
                            </button>
                        </li>
                    </ul>
                    <hr class="my-5">
                    <label class="flex items-center justify-between cursor-pointer">
                        <input type="checkbox" :value="isPayFull" class="sr-only peer" v-model="isPayFull" @click="payFullInstead">
                        <span class="ms-3 text-sm font-medium">Pay full instead?</span>
                        <div class="relative w-11 h-6 ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-blue-800 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <hr class="my-5">
                    <table class="w-full">
                        <tbody>
                            <tr>
                                <th class="text-left">Order Subtotal</th>
                                <th class="text-right">
                                    Php {{priceFormat(cartsTotal.toFixed(2))}}
                                </th>
                            </tr>
                            <tr>
                                <th class="text-left py-2">Shipping Fee</th>
                                <th class="text-right">
                                    Php {{priceFormat(deliveryFeeAmount.toFixed(2))}}
                                </th>
                            </tr>
                            <tr class="border-t-[1px] border-slate-600" v-show="!isPayFull">
                                <th class="text-left py-2">50% Downpayment</th>
                                <th class="text-right">
                                    Php {{priceFormat(((cartsTotal + deliveryFeeAmount) / 2).toFixed(2))}}
                                </th>
                            </tr>
                            <tr class="border-t-[1px] border-slate-600">
                                <th
                                    class="text-left pt-2"
                                    v-html="isPayFull ? 'Total' : 'Balance <small>(will be collected upon delivery)</small>'"
                                ></th>
                                <th class="text-right">
                                    Php {{ isPayFull
                                        ? priceFormat((cartsTotal + deliveryFeeAmount).toFixed(2))
                                        : priceFormat(((cartsTotal + deliveryFeeAmount) / 2).toFixed(2)) }}
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between items-center mt-[20px]">
                    <p class="font-bold">
                        {{ isPayFull
                        ? `Total: Php ${priceFormat((cartsTotal + deliveryFeeAmount).toFixed(2))}`
                        : `To pay: Php ${priceFormat(((cartsTotal + deliveryFeeAmount) / 2).toFixed(2))}` }}
                    </p>
                    <button class="bg-orange-600 py-2 px-4 rounded-full text-white">Place order</button>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
    <FooterNavigation />
    <ModalDialog
      :isVisible="showDialog"
      title="Confirmation"
      @close="handleCancel"
      @confirm="handleConfirm"
      >
        <p
            v-html="modalMessage"
        />
    </ModalDialog>
</template>

<script>
import {ACTIONS} from '@library/actions.js'
import {numberWithCommas} from '@library/utils'
import FooterNavigation from '@layouts/user/footer.navigation.vue'
import FooterComponent from '@layouts/user/footer.layout.vue'
import ModalDialog from '../../components/common/modal-dialog.vue'
import { ModalTransactionTypes } from '../../library/enums'

export default {
    data() {
        return {
            selectedPaymentMethod: null,
            isPayFull: false,
            showDialog: false,
            modalMessage: '',
            modalTransaction: ModalTransactionTypes.IsPayFull
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
        cartItems() {
            return this.$store.getters[ACTIONS.CART.getCartItems]
        },
        cartsTotal() {
            return this.$store.getters[ACTIONS.CART.getCartsTotal]
        },
        deliveryFeeAmount() {
            return this.$defaultDeliveryFee
        }
    },
    methods: {
        priceFormat(x) {
            return numberWithCommas(x)
        },
        selectPaymentMethod(method) {
            this.selectedPaymentMethod = method;
        },
        payFullInstead() {
            if (!this.isPayFull) {
                this.modalMessage = 'Are you sure you want to pay the <b>full price</b>?'
                this.modalTransaction = ModalTransactionTypes.IsPayFull
                this.showDialog = true
            }
        },
        handleConfirm() {
            switch (this.modalTransaction) {
                case ModalTransactionTypes.IsPayFull:
                    this.payFullConfirm()
                    break;
                case ModalTransactionTypes.IsCompleteTransaction:
                    console.log(['under maintenance'])
                    break;
            }
            this.showDialog = false
        },
        handleCancel() {
            switch (this.modalTransaction) {
                case ModalTransactionTypes.IsPayFull:
                    this.payFullCancel()
                    break;
                case ModalTransactionTypes.IsCompleteTransaction:
                    console.log(['under maintenance'])
                    break;
            }
            this.showDialog = false
        },
        payFullConfirm() {
            this.isPayFull = true
        },
        payFullCancel() {
            this.isPayFull = false
        }
    }
}
</script>