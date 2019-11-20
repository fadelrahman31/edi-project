<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <span>
                <Stats></Stats>
            </span>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import Stats from '@/components/Stats';

export default {
    name: 'status',
    components: {
        AppNavigation,
        Stats
    }
};
</script>

<style></style>
