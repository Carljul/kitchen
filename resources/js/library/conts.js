export default {
    install(app) {
        app.config.globalProperties.$containerClass = 'max-w-screen-xl mx-auto p-4 relative';
        app.config.globalProperties.$mainColorClass = '#0196b0';
        app.config.globalProperties.$mainColorClassFade = '#ebfcff';
        app.config.globalProperties.$jumboFont = '2.57142857rem';
    }
}
