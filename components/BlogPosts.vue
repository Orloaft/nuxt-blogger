<template>
    My posts:
    <div>
        <ul>
            <li v-for="post in posts" :key="post._id">{{ post.title }} <img :src=post.image :alt=post.title /></li>

        </ul>
    </div>
</template>
<script setup>
const { data } = await useFetch('/api/posts');
const { posts } = data.value;

</script>

