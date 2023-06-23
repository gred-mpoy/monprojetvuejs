<template>
    <div id = "app">
        <Posts />

    </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import Posts from './components/Posts.vue';

export default{
    name: 'App2',
    components: {
        Posts
    }
}

/* eslint-enable vue/multi-word-component-names */
</script>