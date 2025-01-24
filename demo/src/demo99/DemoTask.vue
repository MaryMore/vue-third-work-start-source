<template>
    <div 
    v-for="task in tasks"
    :key="task.id" 
    class="task">
        <task-header :title="task.title" :user="task.user"/>
        <task-tags :tags="task.tags"/>
    </div>
</template>

<script setup>
import TaskHeader from "./TaskHeader.vue"
import TaskTags from "./TaskTags.vue"
import tasksJSON from "./tasks.json";
import {ref} from "vue";

const tasks = ref(tasksJSON);
</script>

<style>
* {
    font-family: 'Lato', Geneva, Verdana, sans-serif;
}

body {
    font-size: 16px;
    line-height: 1.1;
}

.task {
    padding: 10px;
    margin: 30px 0;
    width: 200px;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .1);
}
</style>