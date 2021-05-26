<template>
    <v-dialog v-model="statusDialog" fullscreen hide-overlay transition="dialog-bottom-transition" scrollable>
        <v-card tile>
            <v-toolbar dark color="deep-orange lighten-1" class="elevation-6">
                <v-btn icon dark @click="$emit('closeDialogFullInfo')">
                    <v-icon> mdi-close </v-icon>
                </v-btn>
                <v-toolbar-title>
                    <h4>{{ departurePoint }} - {{ endingStation }}</h4>
                    <h6>{{ departureTime }} - {{ endTime }}</h6>
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-content>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-card elevation="6">
                                    <v-card-text>
                                        <v-timeline>
                                            <v-timeline-item
                                                v-for="[index, [time, name]] of Object.entries(
                                                    Object.entries(stations)
                                                )"
                                                :key="index"
                                                color="deep-orange lighten-1"
                                                small
                                            >
                                                <template v-slot:opposite>
                                                    <h2 class="black--text">
                                                        {{ time }}
                                                    </h2>
                                                </template>
                                                <v-card class="elevation-2 pa-4 text-center">
                                                    <h3>
                                                        {{ name }}
                                                    </h3>
                                                    <h4 class="deep-orange_lighten-1--text">Остановка</h4>
                                                </v-card>
                                            </v-timeline-item>
                                        </v-timeline>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-content>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'dialogFullInfo',
    props: {
        statusDialog: {
            type: Boolean,
            required: true,
        },
        departurePoint: {
            type: String,
            required: true,
        },
        departureTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        endingStation: {
            type: String,
            required: true,
        },
        stations: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
.deep-orange_lighten-1--text {
    color: #d84315;
}
</style>
