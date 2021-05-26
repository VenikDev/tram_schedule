<template>
    <v-dialog
        v-model="dialog"
        max-width="600px"
    >
        <v-card class="pa-2">
            <v-card-title
                class="font-russo-one deep-orange darken-1 white--text mb-2"
            >
                О КОМПАНИИ
            </v-card-title>

            <v-card-text class="black--text">
                <p>
                    <b>Нижнетагильское муниципальное унитарное предприятие «Тагильский трамвай»</b> занимается транспортным обслуживанием
                    жителей Нижнего Тагила согласно расписанию, утвержденному Администрацией МО «Город Нижний Тагил».
                </p>
                <p>
                    На предприятии работает свыше 500 человек.
                    Ежедневно на стальные магистрали города длиной 108 км выходит 62 единицы подвижного состава в рабочие
                    дни и 41 — в выходные, которые курсируют по 11 маршрутам.
                </p>
                <p>
                    Помимо пассажирских перевозок, предприятие оказывает экскурсионные услуги, а также заключает договоры
                    с другими организациями по осуществлению перевозок их трудящихся.
                    Предприятие располагает двумя трамвайными депо: на Новой Кушве и на Вагонке.
                </p>
            </v-card-text>

            <v-card-actions>
                <v-btn
                    color="red"
                    text
                    @click.prevent="$emit('closeDialog')"
                    class="font-russo-one"
                    block
                >
                    Закрыть
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "dialog",
        props: [
            'dialog'
        ],
        data(){
            return{

            }
        },
    }
</script>
