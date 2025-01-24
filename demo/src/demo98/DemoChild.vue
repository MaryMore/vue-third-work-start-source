<template>
    <h1>{{ title2 }}</h1>
    <time datetime="date">{{ date }}</time>
    <div :class="$attrs.class">Дочерний компонент</div>
    <span :style="styleObj">Второй Дочерний компонент</span>
    <button @click="sucess = !sucess">Переключатель</button>

    <div v-if="sucess">Да! 😍</div>
    <div v-else>Нет 🚩</div>
    <br>
    <br>
    <p v-for="(value, key) in myObject">{{ key }}: {{ value }}</p>
    <button @click="$emit('enlarge-text')">Увеличить шрифт</button>
</template>

<script>
export default {
    data() {
        return {
            styleObj: {
                color: 'blue',
                fontSize: '12px'
            },
            sucess: true,
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }
        }
    },
    methods: {
        onClick() {

        }
    },
    props: ['title2', 'date'],
    emits: ['enlarge-text']
}
</script>