<template>
    <v-app>
        <admin-app-navigation></admin-app-navigation>
        <v-content>
            <span>
                <kaprodi></kaprodi>
            </span>
        </v-content>
    </v-app>
</template>

<script>
import AdminAppNavigation from '@/components/AdminAppNavigation';
import Kaprodi from '@/components/Kaprodi';

export default {
    name: 'form',
    components: {
        AdminAppNavigation,
        Kaprodi
    }
};
</script>

<style></style>
