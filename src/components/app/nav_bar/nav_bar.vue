<template>
    <v-app-bar app class="deep-orange lighten-1 mx-4 my-4" dense dark rounded>
        <h4>ТАГИЛЬСКИЙ ТРАМВАЙ</h4>

        <v-spacer></v-spacer>

        <v-btn text rounded class="hover-border-bottom" @click.prevent="$emit('statusDialogWindow')">
            О компании
        </v-btn>
    </v-app-bar>
</template>

<script>
import './nav_bar.css';

export default {
    name: 'nav_bar'
};
</script>
