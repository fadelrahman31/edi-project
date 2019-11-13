<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <span>
                <success-page></success-page>
            </span>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import SuccessPage from '@/components/SuccessPage';

export default {
    name: 'confirmation',
    components: {
        AppNavigation,
        SuccessPage
    }
};
</script>

<style></style>
