// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    nitro: {firebase: {gen: 2, httpsOptions: {region: 'us-central1', maxInstances: 10,},},},
    modules: [
        ['@nuxtjs/google-fonts', {
            families: {
                'DM+Sans': true
            }
        }],
    ],
});
