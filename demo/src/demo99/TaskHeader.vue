<template>
    <h1 class="task__title">{{ title }}</h1>
    <div v-if="user" class="task__user user">
        <img v-if="user.avatar" class="user__img" :src="getImage(user.avatar)" alt="">
        <p class="user__name">{{ user.name }}</p>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: false
    }
})

const getImage = (image) => {
  // https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  return new URL(`./img/${image}`, import.meta.url).href
}

</script>

<style>
.task__title {
    font-size: 17px;
    margin-bottom: 15px;
}

.user {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user__img {
    flex: 0 0 auto;
    margin-right: 7px;
    width: 24px;
    height: 24px;
}

.user__name {
    color: #282828;
    font-size: 12px;
}
</style>