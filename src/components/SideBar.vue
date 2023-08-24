<template>
    <div class="side-menu">
        <h3>Фильтры</h3>
        <div class="mt-2"> <span>Пол</span>
            <v-input v-for="(gender, key) in genders" :key="key">
                <div class="mt-2">
                    <input type="checkbox" v-model="selectedGendersState[key]" @change="toggleGender(key)">
                    {{ gender }}
                </div>
            </v-input>
        </div>

        <div class="mt-2">
            <span>Национальность</span>
                <div class="divflex">
                    <div class="mr-2" v-for="nat in nationality" :key="nat">
                        <input type="checkbox" v-model="selectedNationalityState[nat]" @change="toggleNationality(nat)">
                        {{ nat }}
                    </div>
                </div>
        </div>

        <v-card-actions class="justify-lg-start">
            <v-btn color="white" elevation="2" rounded @click="generateUsers">
                Применить
            </v-btn>
        </v-card-actions>

        <v-card-actions class="justify-lg-start">
            <v-btn color="white" elevation="2" rounded @click="resetFilter">
                Сбросить
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    data() {
        return {
            selectedGendersState: {},
            selectedNationalityState: {},
        };
    },


    computed: {
        ...mapState(['selectedGenders', 'selectedNationality','users']),

        genders() {
            return {
                male: 'Мужской',
                female: 'Женский',
            }
        },

        nationality() {
            return ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR',
                'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO',
                'NZ', 'RS', 'TR', 'UA', 'US'];
        },

    },
    methods: {
        isSelected(gender) {
            return this.selectedGenders.includes(gender);
        },

        toggleNationality(nat) {
            if (this.isSelected(nat)) {
                this.$store.commit('SET_NATIONALITY', this.selectedNationality.filter(n => n !== nat));
            } else {
                this.$store.commit('SET_NATIONALITY', [...this.selectedNationality, nat]);
            }
        },

        toggleGender(gender) {
            if (this.isSelected(gender)) {
                this.$store.commit('SET_GENDERS', this.selectedGenders.filter(g => g !== gender));
            } else {
                this.$store.commit('SET_GENDERS', [...this.selectedGenders, gender]);
            }
        },

        generateUsers() {
            this.$store.dispatch('generateRandomUsers');
        },

        resetFilter() {
            this.selectedGendersState = {};
            this.selectedNationalityState = {};
            this.$store.commit('SET_GENDERS', []);
            this.$store.commit('SET_NATIONALITY', []);

            this.$nextTick(() => {
                this.$store.dispatch('generateRandomUsers');
            });
        },
    },
};
</script>

<style scoped>

.side-menu {
    padding: 20px;
    border-right: 1px solid #ccc;
    height: 100vh;
}

.divflex {
    display: flex;
    flex-wrap: wrap;
}

</style>