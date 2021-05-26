<template>
    <div>
        <v-card elevation="10" rounded>
            <v-img src="../assets/vector-railway.jpg">
                <v-card-title class="black--text rounded-b-xl">
                    <p class="white--text deep-orange lighten-1 pa-1 rounded-lg">
                        Поиск рейса
                    </p>
                </v-card-title>
            </v-img>

            <v-card-text ref="form">
                <div class="pt-4 d-flex">
                    <!-- Открытие диалогового окна для выбора маршрута -->
                    <v-text-field
                        label="Рейс"
                        placeholder="Рейс"
                        :color="componentColor"
                        v-model="service"
                        :rules="[() => !!service || 'Введите навзание рейса(ов)']"
                        @click="openDialogCompanyInformation = !openDialogCompanyInformation"
                        clearable
                    ></v-text-field>
                    <!-- Кнопка ПОИСК -->
                    <v-btn x-large color="deep-orange lighten-1" class="white--text" text @click="flightSearchRequest">
                        Поиск
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>

        <v-card elevation="10" rounded class="mb-4 mt-4">
            <v-img src="../assets/people.jpg">
                <v-card-title class="rounded-b-xl black--text align-end">
                    <p class="white--text deep-orange lighten-1 pa-1 rounded-lg">
                        Результаты поиска
                    </p>
                </v-card-title>
            </v-img>

            <v-card-text v-if="response">
                <v-card-title class="rounded-b-xl black--text align-end justify-center" v-if="service">
                    <div>
                        <p class="white--text deep-orange lighten-1 pa-2 rounded-lg elevation-6">
                            {{ title }}
                        </p>
                    </div>
                </v-card-title>
                <v-row>
                    <v-col v-for="item in response" class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <app-info-block
                            :departurePoint="item.departure_point"
                            :departureTime="item.departure_time"
                            :endTime="item.end_time"
                            :endingStation="item.ending_station"
                            :stations="item.stations"
                        />
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <!-- Диалоговое окно -->
        <app-dialog-search :dialog="openDialogCompanyInformation" @closeDialog="closeDialog" @recordSelection="recordSelection" />

        <app-dialog-input-error :dialog="DialogInputError" @closeDialogInputError="closeDialogInputError" />
    </div>
</template>

<script>
import { db } from '../firebase.js';
import dialogSearch from '../components/dialogSearch';
import flightInformationBlock from '../components/flightInformationBlock';
import dialogInputError from '../components/dialogInputError';

export default {
    name: 'main',
    data() {
        return {
            // основ цвет компонентов
            componentColor: 'deep-orange lighten-1',
            // Строка поиска
            service: '',
            // Ответ от базы
            response: '',
            // Диологое окно "О Компании"
            openDialogCompanyInformation: false,
            // Диологое окно с ошибкой, если поисковая строка пуста
            DialogInputError: false,
            // Название выбранного маршрута
            title: ''
        };
    },
    methods: {
        /**
         *  Закрытие диалогового окна об ошибке
         */
        closeDialogInputError() {
            this.DialogInputError = false;
        },
        /**
         * Открытие диалогового окна об ошибке
         */
        openDialogInputError() {
            if (this.DialogInputError === false) this.DialogInputError = true;
            else if (this.DialogInputError === true) {
                this.DialogInputError = false;
                this.DialogInputError = true;
            }
        },
        /**
         *  Проскролить на 500px вниз спустя 250 мсек
         */
        scroll() {
            setTimeout(() => {
                this.$vuetify.goTo(500, {
                    duration: 500,
                    offset: 0,
                    easing: 'easeOutQuart'
                });
            }, 250);
        },
        /**
         *  Если строка поиск пуста, то открыть диологое окно
         */
        flightSearchRequest() {
            if (this.service === '') {
                this.openDialogInputError();
            }
            /**
             *  Делать запрос к базе взасимости от выбранного маршрута
             */
            db.on(
                'value',
                snap => {
                    /**
                     * Маршрут 12 Ул. Островского — Пихтовые Горы
                     */
                    if (this.service === 'Маршрут 12 Ул. Островского — Пихтовые Горы') {
                        this.title = this.service;
                        this.response = snap.val().tram_12_os_pi;
                        this.scroll();
                    }
                    /**
                     * Маршрут 12 Пихтовые Горы — Ул. Островского
                     */
                    else if (this.service === 'Маршрут 12 Пихтовые Горы — Ул. Островского') {
                        this.title = this.service;
                        this.response = snap.val().tram_12_pi_os;
                        this.scroll();
                    }
                    /**
                     * Маршрут 11 Пихтовые Горы — Посёлок Северный
                     */
                    else if (this.service === 'Маршрут 11 Пихтовые Горы — Посёлок Северный') {
                        this.title = this.service;
                        this.response = snap.val().tram_11_pi_sev;
                        this.scroll();
                    }
                    /**
                     * Маршрут 11 Посёлок Северный — Пихтовые Горы
                     */
                    else if (this.service === 'Маршрут 11 Посёлок Северный — Пихтовые Горы') {
                        this.title = this.service;
                        this.response = snap.val().tram_11_sev_pi;
                        this.scroll();
                    }
                },
                error => {
                    console.log('Error: ' + error.code);
                }
            );
        },
        closeDialog() {
            this.openDialogCompanyInformation = !this.openDialogCompanyInformation;
        },
        recordSelection(name, route) {
            this.closeDialog();
            this.service = name + ' ' + route;
        },
        closeDialogFullInfo() {
            this.statusDialogFullInfo = !this.statusDialogFullInfo;
        }
    },
    components: {
        'app-dialog-search': dialogSearch,
        'app-info-block': flightInformationBlock,
        'app-dialog-input-error': dialogInputError
    }
};
</script>
