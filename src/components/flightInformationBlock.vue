<template>
    <v-card
        class="my-2 elevation-6 pa-4 ma-4"
        @click="statusDialogFullInfo = true"
    >
        <v-timeline>
            <v-timeline-item
                small
                color="deep-orange lighten-1"
            >
                <template v-slot:opposite>
                <span>
                    <h3>
                        {{ departureTime }}
                    </h3>
                </span>
                </template>
                <h3>
                    {{ departurePoint }}
                </h3>
                <h4 class="deep-orange_lighten-1--text">
                    Начальная
                </h4>
            </v-timeline-item>

            <v-timeline-item
                small
                class="text-right"
                color="deep-orange lighten-1"
            >
                <template v-slot:opposite>
                <span>
                    <h3>
                        {{ endTime }}
                    </h3>
                </span>
                </template>
                <h3>
                    {{ endingStation }}
                </h3>
                <h4 class="deep-orange_lighten-1--text">
                    Конечная
                </h4>
            </v-timeline-item>
        </v-timeline>

        <v-card-text
            class="text-center"
        >
            <b class="deep-orange_lighten-1--text transparency-6">
                Нажмите, чтоб узнать подробнее
            </b>
        </v-card-text>

        <app-dialog-full-info
            :departurePoint="departurePoint"
            :departureTime="departureTime"
            :endTime="endTime"
            :endingStation="endingStation"
            :statusDialog="statusDialogFullInfo"
            :stations="stations"
            @closeDialogFullInfo="closeDialogFullInfo"
        />
    </v-card>
</template>

<script>
    import dialogFullInfo from "./dialogFullInfo";

    export default {
        name: "flightInformationBlock",
        data(){
            return{
                statusDialogFullInfo: false,
            }
        },
        methods: {
            closeDialogFullInfo(){
                this.statusDialogFullInfo = !this.statusDialogFullInfo;
            }
        },
        props: {
            departurePoint: {
                type: String,
                required: true
            },
            departureTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            },
            endingStation: {
                type: String,
                required: true
            },
            stations: {
                type: Object,
                required: true
            }

        },
        components: {
            'app-dialog-full-info': dialogFullInfo
        }
    }
</script>

<style scoped>
    .deep-orange_lighten-1--text{
        color: #D84315;
    }
    .transparency-6{
        opacity: .6;
    }
</style>
