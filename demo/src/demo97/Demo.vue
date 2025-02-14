<template>
    <p>Книги дня:
    <ul>
        <li v-for="({author, title}, i) in store.books" :key="i">
            {{ author }} - {{ title }}
        </li>
    </ul>

    </p>
    <button @click="store.updateBook()">Добавить</button>


</template>
<script setup>
import { useStore } from "./store";

const store = useStore();

setTimeout(() => {
    store.updateBook();
}, 1000);

</script>