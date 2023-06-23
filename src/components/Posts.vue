<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
        </ul>
    </div>
</template>


<script>
/* eslint-disable vue/multi-word-component-names */
import axios from 'axios';

export default{
    name: 'Posts',
    data() {
        return{
            posts: []
        };
    },

    async creation(){
        try {

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            this.posts = response.data;
        } catch (error) {
            console.log(error);
    }
}
};

/* eslint-enable vue/multi-word-component-names */
</script>