<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
    >
        <v-card tile>
            <v-toolbar
                dark
                color="deep-orange lighten-1"
                class="elevation-6"
            >
                <v-btn
                    icon
                    dark
                    @click="closeDialog"
                >
                    <v-icon>
                        mdi-close
                    </v-icon>
                </v-btn>
                <v-toolbar-title>
                    Поиск маршрута
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col class="offset-xl-3 col-xl-6 offset-x-2 col-x-8">
                            <v-card
                                class="my-4"
                                v-for="item in routeList"
                            >
                                <app-item-list
                                    :name="item.name"
                                    :route="item.route"
                                    @recordSelection="recordSelection"
                                />
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

    import itemList from "./app/itemList";

    export default {
        name: "dialogSearch",
        props: {
            dialog: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                routeList: [
                    {
                        name: "Маршрут 12",
                        route: 'Ул. Островского — Пихтовые Горы'
                    },
                    {
                        name: "Маршрут 12",
                        route: 'Пихтовые Горы — Ул. Островского'
                    },
                    {
                        name: "Маршрут 11",
                        route: 'Пихтовые Горы — Посёлок Северный'
                    },
                    {
                        name: "Маршрут 11",
                        route: 'Посёлок Северный — Пихтовые Горы'
                    },
                    {
                        name: "Маршрут 8",
                        route: 'УВЗ — Приречный мкрн'
                    },
                    {
                        name: "Маршрут 8",
                        route: 'Приречный мкрн. — УВЗ'
                    }
                ]
            }
        },
        methods: {
            closeDialog(){
                this.$emit('closeDialog');
            },
            recordSelection(name, route){
                this.$emit('recordSelection', name, route);
            }
        },
        components: {
            'app-item-list': itemList
        }
    }
</script>
