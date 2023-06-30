<template>
    <div>
        <h1>Posts</h1>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>     
        </ul>
        <button @click="creation">Afficher tous mes posts</button>
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
    methods: {

        async creation(){
        try {

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            this.posts = response.data;
        } catch (error) {
            console.log(error);
    }

    }
}
};

/* eslint-enable vue/multi-word-component-names */
</script>