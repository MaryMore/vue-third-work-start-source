<template>
    <div v-if="newTags.length" class="task__tags">
        <div
        v-for="(tag, index) in newTags"
        class="task__tag" 
        :key="index"
        :style="styleObject"
        >#{{ tag }}</div>
    </div>
</template>

<script setup>
const props = defineProps({
    tags: {
        type: String,
        required: true
    },
    styleObject : {
        type: Function,
        backgroundColor: () => Math.floor(Math.random()*16777215).toString(16)
    }
});

const newTags = props.tags.split('#').splice(1);

</script>

<style>
.task__tags {
    margin: 0 -3px;
}
.task__tag {
    font-size: 11px;
    display: inline-flex;

    margin: 3px;
    padding: 1px 5px;
    border-radius: 5px;
}
</style>