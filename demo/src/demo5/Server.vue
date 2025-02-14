<template>
    <demo-container>
      <button class="button" role="button" @click="fetchPosts">Получить все сообщения</button>
      <button class="button" role="button" @click="getPostById">Получить одно сообщение</button>
      <button class="button" role="button" @click="createPost">Создать сообщение</button>
      <button class="button" role="button" @click="updatePost">Редактировать сообщение</button>
      <button class="button" role="button" @click="deletePost">Удалить сообщение</button>
    </demo-container>
    <div class="response" v-if="response">{{ response }}</div>
    <div class="posts" v-if="posts">
        <div class="post" v-for="post in maxPosts" :key="post.id">
          <h4 class="post__title">{{ post.title }}</h4>
          <p class="post__desc">{{ post.body }}</p>
        </div>
    </div>
  </template>
<script setup>
import { ref } from 'vue'
import DemoContainer from '../components/DemoContainer.vue';
import jsonPlaceholderService from './services/json-placeholder-service'

const newPost = {
  userId: 1,
  title: 'Наш новый пост',
  body: 'Мы создали новый пост'
}

const response = ref(null)
const posts = ref(null)
const maxPosts = ref(null)

function beforeEach () {
  response.value = null
  posts.value = null
  maxPosts.value = null
}

async function fetchPosts () {
  beforeEach()
  posts.value = await jsonPlaceholderService.fetchPosts()
  maxPosts.value = posts.value.slice(0, 5);
}

async function getPostById () {
  beforeEach()
  response.value = await jsonPlaceholderService.getById(1)
}

async function createPost () {
  beforeEach()
  response.value = await jsonPlaceholderService.createPost(newPost)
}

async function updatePost () {
  beforeEach()
  response.value = await jsonPlaceholderService.updatePost({
    ...newPost,
    id: 1
  })
}

async function deletePost () {
  beforeEach()
  await jsonPlaceholderService.deletePost(1)
}
</script>

<style scoped>
.response, .posts {
  padding: 0 50px 0 50px;
  height: 300px;
  overflow-y: scroll;
}
.button {
  align-items: center;
  background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin: 50px;
}

.button:active,
.button:hover {
  outline: 0;
}

.post {
  margin-bottom: 30px;
}

.post__title {
  font-family: Phantomsans, sans-serif;
  font-size: 22px;
  margin-bottom: 8px;

  &:first-letter {
    text-transform: uppercase;
  }
}

.post__desc {
  font-family: Phantomsans, sans-serif;
  font-size: 14px;
  
  &:first-letter {
    text-transform: uppercase;
  }
}

@media (min-width: 768px) {
  .button {
    min-width: 196px;
  }
}
</style>
