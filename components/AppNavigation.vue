<template>
    <span>
        <v-app-bar color="blue darken-2" dark >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-spacer flat></v-spacer>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down">Sign Out</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Layanan Electronic Document Issuance',
            drawer: true,
            items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }]
        };
    }
};
</script>

<style scoped></style>
