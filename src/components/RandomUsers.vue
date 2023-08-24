<template>
        <div class="user-list">
            <ul  v-for="user in users" :key="user.login.uuid">
                <v-card>
                    <li class="user-item">
                        <div class="user-avatar">
                            <img :src="user.picture.large" alt="User Photo">
                        </div>
                    </li>
                    <div class="user-list">
                        <li>
                            <div class="user-item"> <font-awesome-icon :icon="['fas', 'user']" />
                                <div class="user-info">
                                    <div class="user-name-title">Ф.И.О: </div>
                                    <div class="user-name">{{ user.name.first }}  {{ user.name.last }}</div>
                                    <div class="user-name">Пол: {{user.gender}}</div>
                                    <div class="user-name">Национальность: {{user.nat}}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-item"> <font-awesome-icon :icon="['fas', 'envelope']" />
                                <div class="user-info">
                                    <div class="user-name-title">Почта: </div>
                                    <div class="user-name">{{user.email}}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-item"> <font-awesome-icon :icon="['fas', 'calendar-days']" />
                                <div class="user-info">
                                    <div class="user-name-title">Дата рождения: </div>
                                    <div class="user-name">{{new Date(user.dob.date).toLocaleDateString()}}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-item"> <font-awesome-icon :icon="['fas', 'location-dot']" />
                                <div class="user-info">
                                    <div class="user-name-title">Адресс: </div>
                                    <div class="user-name">{{user.location.street.number}} {{user.location.street.name}}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="user-item"> <font-awesome-icon :icon="['fas', 'phone']" />
                                <div class="user-info">
                                    <div class="user-name-title">Номер телефона: </div>
                                    <div class="user-name">{{user.phone}}</div>
                                </div>
                            </div>
                        </li>
                    </div>
                </v-card>
            </ul>
        </div>
</template>


<script>

import { mapState} from "vuex";

export default {

    genders() {
        return {
            male: 'Мужской',
            female: 'Женский',
        }
    },

    computed: {
        ...mapState(['users']),

    },


    created() {
        this.$store.dispatch('generateRandomUsers');
    }

};
</script>

<style scoped>

.card {
    background-color: #8f1212;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 60px;
    max-width: 400px; /* Максимальная ширина карточки */
    margin: 0 auto; /* Центрирование карточки */
}

.side-menu {
    padding: 20px;
    border-right: 1px solid #ccc;
    height: 100vh;
}

.user-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
}

.user-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px;
    text-align: center;
    color: #000000;
}

.user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: #f0f0f0;
    margin-bottom: 10px;
    border: 2px solid #ffffff;
}

.user-avatar img {
    width: 100%;
    height: auto;
}

.user-info {
    display: none;
    position: absolute;
    top: 110%; /* Немного больше отступ для лучшего визуального разделения */
    left: 50%;
    transform: translateX(-50%);
    width: 180px; /* Ширина блока с информацией */
    padding: 10px; /* Немного внутреннего отступа */
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    z-index: 1; /* Чтобы инфо не скрывалась под следующим элементом списка */
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.user-item:hover .user-info {
    opacity: 1;
    display: flex; /* Отображается при наведении */
    flex-direction: column;
    align-items: center;
}

.user-name-title {
    color: #555; /* Цвет заголовка */
    font-size: 11px;
    margin-bottom: 5px; /* Немного отступа снизу */
}

.user-name {
    font-weight: bold;
    font-size: 12px; /* Немного больше размер шрифта */
    color: #333; /* Цвет имени */
}

</style>