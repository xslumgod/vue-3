<template>
        <v-row>
            <v-col cols="2">
                <side-bar />
            </v-col>
            <v-col cols="9">
                <v-card>
                  <v-card-actions class="justify-center">
                      <v-btn color="white" elevation="2" rounded @click="generateRandomUsers">
                          Сгенерировать Рандомного Человека
                      </v-btn>
                  </v-card-actions>

                      <user-card />

                </v-card>
            </v-col>
        </v-row>
</template>

<script>
import UserCard from "@/components/RandomUsers.vue";
import SideBar from "@/components/SideBar.vue";
import {mapActions} from "vuex";

export default {
    components: {
        UserCard,
        SideBar
    },

    methods: {
        ...mapActions(['generateRandomUsers']),
    },

    created() {
        this.$store.dispatch('generateRandomUsers');
    }
};
</script>

<style lang="scss" scoped>

</style>