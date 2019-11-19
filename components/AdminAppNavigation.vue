<template>
    <span>
        <v-navigation-drawer
                v-model="drawer"
                light
                absolute
                temporary
            >
                <v-divider></v-divider>
                <v-list nav dense>
                    <v-list-item
                        v-for= "item in items"
                        :key= "item.title"
                        :to= "item.path"
                        link
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        <v-app-bar color="red darken-2" dark >
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon><v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            <v-spacer flat></v-spacer>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat class="hidden-sm-and-down">Sign Out</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AdminAppNavigation',
    data() {
        return {
            appTitle: '[ADMIN/KAPRODI] Layanan Electronic Document Issuance - TU STEI',
            drawer: null,
            items: [
                { 
                    title: 'Permintaan Menunggu Persetujuan',
                    path: '/approval' 
                }
            ]
        };
    }
};
</script>

<style scoped></style>
