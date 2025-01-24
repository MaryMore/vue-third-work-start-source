<template>
    <div v-if="show" class="demo" :style="{ backgroundColor: bg }"></div>
    <p :title="message">Наведи курсор</p>
    <button v-on:click="onClick" type="button">Кнопка</button>

    <p class="static" :class="[newClasses.activeClass, newClasses.newClass]">{{ message2 }}</p>
    <input v-model="message2">
    <p>{{ lowercase(text) }}</p>
    <p @click="onClick2">{{ uppercase(text2) }}</p>

    <ul v-if="isHasBooks">
        <li v-for="(book, index) in books" :key="index">
            {{ book }}
        </li>
    </ul>
    <br>
    <div :style="{ fontSize: postFontSize + 'em' }" >
        <demo-child v-for="n in 2" :title2="`Заголовок ${n}`" :date="new Date()" @enlarge-text="postFontSize += 0.1" />
        <br>
    </div>

    <template v-for="n in 10">
        <input type="checkbox" :checked="n === 2">
    </template>

    <button @click="updateValue('Kjk', $event)">Увеличить</button><input type="text" :value="value" readonly>

    <p>Говорит: {{ say }}</p>
    <input v-model="say">

    <p>Отметили: {{ we }}</p>

    <label for="you">You</label>
    <input type="checkbox" id="you" value="You" v-model="we">
    <label for="he">He</label>
    <input type="checkbox" id="he" value="He" v-model="we">
    <label for="she">She</label>
    <input type="checkbox" id="she" value="She" v-model="we">

    <button @click="showWe">Показать в консоли список выбранных</button>
    <br>
    <select v-model="selected">
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>

    <div>Выбрано: {{ selected }}</div>
    <br>
    <input v-model.number="num">
    <p>{{ num }}</p>


</template>

<script>
import DemoChild from './DemoChild.vue';
export default {
    name: 'Demo',
    components: {
        DemoChild
    },
    data() {
        return {
            classes: {
                active: true,
                danger: true,
            },
            newClasses: {
                activeClass: 'active',
                newClass: 'new'
            },
            show: true,
            bg: 'red',
            message: 'Сейчас ' + new Date().toLocaleString(),
            message2: 'Сообщение...',
            text: 'Бла-бла',
            text2: 'kfkfKJNKJB',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ],
            value: 1,
            say: '',
            we: [],
            selected: 'A',
            options: [
                { text: 'Один', value: 'A' },
                { text: 'Два', value: 'B' },
                { text: 'Три', value: 'C' }
            ],
            num: '',
            postFontSize: 1
        }
    },
    computed: {
        isHasBooks() {
            return this.books.length > 0;
        },
        classObj() {
            return {
                selected: this.classes.active && this.classes.danger
            }
        },
        isSecondCheckbox(evt) {
            console.log(evt);
        }
    },
    mounted() {
        // setInterval(() => {
        //     this.bg = '#' + (Math.floor(Math.random() * 16777215).toString(16));
        //     this.books.pop();
        // }, 2000);
    },
    methods: {
        onClick() {
            console.log(this);
        },
        onClick2() {
            this.text2 = 'Готово!'
        },
        lowercase(str) {
            return str.toLowerCase();
        },
        uppercase(str) {
            return str.toUpperCase();
        },
        updateValue(msg, evt) {
            console.log(msg, evt);
            this.value++;
        },
        showWe() {
            console.log(this.we);
        }
    }
}
</script>

<style>
.demo {
    transition: all 2s ease-in-out;
    height: 300px;
}
</style>
