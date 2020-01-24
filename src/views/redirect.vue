<template>
</template>

<script>
export default {
    mounted() {
        this.submitMixpanel();
    },
    methods: {
        submitMixpanel() {
            mixpanel.init('44f45c8f1e756ba049e6284def96ac7f');
            mixpanel.track('Create a Free Account', {
                'landing page version': 'website',
                'App URL': 'https://app.sendyit.com/auth/sign_up',
                Email: this.$route.params.any,
            });
            window.location.href = 'https://app.sendyit.com/auth/sign_up';
        },
    },
};
</script>

<style>

</style>
