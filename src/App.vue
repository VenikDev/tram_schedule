<template>
    <v-app app>
        <!--    Верхнее меню - кнопка "Открытие бокового меню", надпись "Название компании", кнопка "О компании"   -->
        <app-nav-bar @statusDialogWindow="statusDialogWindow" />

        <!--    Диалоговое окно "О компании"    -->
        <app-dialog :dialog="statusDialog" @closeDialog="closeDialog" />

        <!--    Контент страниц    -->
        <v-main>
            <v-content>
                <v-container>
                    <v-row class="mx-xl-16">
                        <v-col>
                            <router-view />
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-main>

        <!--    Подвал сайта со ссылками на полезную информацию и с кратким описанием    -->
        <app-footer />
    </v-app>
</template>

<script>
import footer from './components/app/footer/footer';
import nav_bar from './components/app/nav_bar/nav_bar';
import dialog from './components/app/dialog/dialog';

export default {
    name: 'App',
    data() {
        return {
            statusDialog: false
        };
    },
    provide() {
        return {};
    },
    methods: {
        statusDialogWindow() {
            if (this.statusDialog === false) this.statusDialog = true;
            else if (this.statusDialog === true) {
                this.statusDialog = false;
                this.statusDialog = true;
            }
        },
        closeDialog() {
            this.statusDialog = !this.statusDialog;
        }
    },
    components: {
        'app-footer': footer,
        'app-nav-bar': nav_bar,
        'app-dialog': dialog
    }
};
</script>
