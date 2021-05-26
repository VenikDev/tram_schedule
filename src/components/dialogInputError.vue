<template>
    <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
        v-model="dialog"
    >
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar
                    color="red darken-1 text-h5"
                    dark
                >Ошибка поиска</v-toolbar>
                <v-card-text>
                    <div class="text-h6 pa-4 black--text">
                        Выберите остановку, чтобы начать поиск.
                    </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                    <v-btn
                        block
                        color="red darken-1"
                        text
                        @click="$emit('closeDialogInputError')"
                    >Закрыть</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
    export default {
        name: "dialogInputError",
        props: {
            dialog: {
                type: Boolean,
                 required: true
            }
        }
    }
</script>
