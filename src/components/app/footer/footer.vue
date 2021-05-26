<template>
    <v-footer
        color="deep-orange lighten-1 elevation-6"
        padless
        rounded
        class="mx-4 pa-1"
    >
        <v-container>
            <v-row>
                <v-col class="d-flex flex-row justify-center align-center">
                    <v-btn
                        v-for="(icon, index) in icons"
                        :key="index"
                        class="mx-2 border-thin-white my-2"
                        text
                        fab
                        color="white"
                        :href="icon.link"
                        target="_blank"
                    >
                        <v-icon>
                            {{ icon.name }}
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <p class="white--text text-center">
                        Нижнетагильское муниципальное унитарное предприятие <b>«Тагильский трамвай»</b> занимается
                        транспортным обслуживанием жителей Нижнего Тагила согласно расписанию, утвержденному
                        Администрацией МО <b>«Город Нижний Тагил»</b>.
                    </p>
                </v-col>
            </v-row>

            <v-divider color="white"></v-divider>

            <v-row
                justify="center"
                no-gutters
            >
                <v-col
                    class="py-4 text-center white--text"
                    cols="12"
                >
                    {{ new Date().toLocaleDateString() }} — <strong>ТАГИЛЬСКИЙ ТРАМВАЙ</strong>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script>
    import './footer.css'

    export default {
        name: "footer",
        data(){
            return{
                icons: [
                    {
                        name: 'mdi-android',
                        link: 'https://play.google.com/store/apps/details?id=ru.develop.nikitc1.tagiltram&hl=ru&gl=US'
                    },
                    {
                        name: 'mdi-vk',
                        link: 'https://vk.com/ntagiltram'
                    }
                ]
            }
        }
    }
</script>
