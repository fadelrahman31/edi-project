<template>
    <v-app>
        <app-navigation></app-navigation>
        <v-content>
            <span>
                <home-hero></home-hero>
            </span>
        </v-content>
    </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';
import HomeHero from '@/components/HomeHero';

export default {
    name: 'form',
    components: {
        AppNavigation,
        HomeHero
    }
};
</script>

<style></style>
