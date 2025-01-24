<template>
    <div class="counter">
      <counter-button @action="decrement">-</counter-button>
      <counter-value :value="count"/>
      <counter-button @action="increment">+</counter-button>
    </div>
</template>

<script setup>
import CounterButton from './CounterButton.vue';
import CounterValue from './CounterValue.vue';
import {ref} from 'vue';

const count = ref(0);

// Метод для уменьшения значения
const decrement = () => {
    count.value = count.value - 1
}

// Метод для увеличения значения
const increment = () => {
    count.value = count.value + 1
}
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
}
</style>