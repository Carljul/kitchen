<template>
    <div class="border-[1px] border-slate-100 rounded-md shadow-lg flex items-center justify-between px-[20px] py-[15px] mb-3">
        <div class="flex flex-row gap-[10px] items-center">
            <font-awesome-icon :icon="['fas', 'location-dot']" size="xl" color="red"/>
            <div class="flex flex-col">
                <span class="uppercase">396 Poblacion Ward I Minglanilla Cebu</span>
                <span class="font-bold">Delivery</span>
            </div>
        </div>
        <div class="">
            <button class="uppercase font-bold text-[red]">Change</button>
        </div>
    </div>
</template>