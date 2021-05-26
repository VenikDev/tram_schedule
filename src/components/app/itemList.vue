<template>
    <v-card
        elevation="6"
        @click="$emit('recordSelection', name, route)"
    >
        <v-card-title>
            <b>
                {{ name }} - {{ route }}
            </b>
        </v-card-title>
        <v-card-subtitle>
            <h5 class="deep-orange_lighten-1--text">
                Нажмите, чтобы выбрать
            </h5>
        </v-card-subtitle>
    </v-card>
</template>

<script>
    export default {
        name: "itemList",
        props: {
            name: {
                type: String,
                required: true
            },
            route: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .deep-orange_lighten-1--text{
        color: #FF7043;
    }
</style>
