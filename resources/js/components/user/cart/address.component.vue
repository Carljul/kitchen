<template>
    <div class="border-[1px] border-slate-100 rounded-md shadow-lg flex items-center justify-between px-[20px] py-[15px] mb-3">
        <div class="flex flex-row gap-[10px] items-center">
            <font-awesome-icon :icon="['fas', 'location-dot']" size="xl" color="red"/>
            <div class="flex flex-col">
                <span class="uppercase">396 Poblacion Ward I Minglanilla Cebu</span>
                <span class="font-bold">Delivery <small>(Home)</small></span>
            </div>
        </div>
        <div class="">
            <button class="uppercase font-bold text-[red]" @click="openAddress">Change</button>
        </div>
    </div>
    
    <ModalDialog
      :isVisible="showDialog"
      title="Addresses"
      @close="handleCancel"
      @confirm="handleConfirm"
      dialogClass="!w-[600px]"
      dialogBodyClass="max-h-[500px] overflow-y-scroll"
      >
        <div class="">
            <ul class="mt-3 flex flex-col gap-[20px]">
                <li v-show="!isAddNewAddress">
                    <button
                        class="flex flex-row items-center w-full justify-between shadow-lg p-3 hover:bg-blue-300"
                        @click="selectAddress('address1')"
                    >
                        <div class="flex flex-row gap-[20px] items-center">
                            <font-awesome-icon :icon="['fas', 'location-dot']" size="xl" color="red"/>
                            <div class="flex flex-col text-left">
                                <span class="font-bold text-[15px]">396 Poblacion Ward I Minglanilla Cebu</span>
                                <span class="font-mute text-[15px]">(Home Address)</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="address_selection"
                            value="address1"
                            checked="true"
                            v-model="selectedAddress"
                        >
                    </button>
                </li>
                <li v-show="!isAddNewAddress">
                    <button
                        class="flex flex-row items-center w-full justify-between shadow-lg p-3 hover:bg-blue-300"
                        @click="selectAddress('address2')"
                    >
                        <div class="flex flex-row gap-[20px] items-center">
                            <font-awesome-icon :icon="['fas', 'location-dot']" size="xl" color="red"/>
                            <div class="flex flex-col text-left">
                                <span class="font-bold text-[15px]">F. Cabahug St., Kasambagan Cebu City</span>
                                <span class="font-mute text-[15px]">(Office Address)</span>
                            </div>
                        </div>
                        <input
                            type="radio"
                            name="address_selection"
                            value="address2"
                            v-model="selectedAddress"
                        >
                    </button>
                </li>
                <li>
                    <button
                        class="flex flex-row items-center w-full justify-between shadow-lg p-3 hover:bg-blue-300"
                        @click="addNewAddress()"
                    >
                        <div class="flex flex-row gap-[20px] items-center">
                            <font-awesome-icon :icon="['fas', 'location-dot']" size="xl" color="red"/>
                            <div class="flex flex-col text-left">
                                <span class="font-bold text-[15px]">Add new address</span>
                                <span class="font-mute text-[15px]">(Enter new location)</span>
                            </div>
                        </div>
                        <font-awesome-icon :icon="['fas', isAddNewAddress ? 'minus':'plus']" size="xl" color="red"/>
                    </button>
                </li>
            </ul>

            <div v-show="isAddNewAddress">
                <form >
                    
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Full Address</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="fullAddress"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">City</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="city"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Province</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="province"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Street</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="street"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Zip Code</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="zipCode"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="text" class="block mb-2 text-sm font-medium text-gray-900">Country</label>
                        <div class="flex flex-col gap-[10px]">
                            <input
                                type="text"
                                id="text"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required
                                autocomplete="off"
                                v-model="country"
                            />
                            <small class="border-[1px] border-red-800 py-1 px-3 text-red-800 bg-red-100 rounded-md">Requied</small>
                        </div>
                    </div>
                    <LeafletMap @selected-location="handleSelectedLocation"/>
                </form>
            </div>
        </div>
    </ModalDialog>
</template>

<script>
import ModalDialog from '@components/common/modal-dialog.vue'
import LeafletMap from '@components/common/leaflet-map.vue';
export default {
    name: 'Address',
    data() {
        return {
            showDialog: false,
            selectedAddress: '',
            isAddNewAddress: false,
            fullAddress: '',
            city: '',
            province: '',
            street: '',
            zipCode: '',
            country: '',
        }
    },
    components: {
        ModalDialog,
        LeafletMap
    },
    methods: {
        openAddress() {
            this.showDialog = true
        },
        handleCancel() {
            this.showDialog = false
        },
        handleConfirm() {
            this.showDialog = false
        },
        selectAddress(address) {
            this.selectedAddress = address;
        },
        addNewAddress() {
            this.isAddNewAddress = !this.isAddNewAddress
        },
        handleSelectedLocation(result) {
            if (result.address.country != 'Philippines') {
                this.$toast.error('Country should be Philippines')
            }
            this.country = result.address.country ?? ''
            this.city = (result.address.city ?? result.address.state) ?? ''
            this.zipCode = result.address.postcode ?? ''
            this.street = result.address.road ?? ''
            this.province = (result.address.town ?? result.address.village) ?? ''
        }
    }
}
</script>