export default {
    install(app) {
        app.config.globalProperties.$containerClass = 'max-w-screen-xl mx-auto p-4 relative';
        app.config.globalProperties.$mainColorClass = '#0196b0';
        app.config.globalProperties.$mainColorClassFade = '#ebfcff';
        app.config.globalProperties.$jumboFont = '2.57142857rem';
        app.config.globalProperties.$defaultDeliveryFee = 80;
        app.config.globalProperties.$foodType = 'foods';
        app.config.globalProperties.$bundleType = 'bundles';
        app.config.globalProperties.$FoodToCart = 'Food added to cart'
        app.config.globalProperties.$phoneNumberErrorMessage = 'Please enter a valid mobile number, e.g. (+639123456789 / 09123456789)'
    }
}
