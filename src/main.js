import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import App2 from './App2.vue'

// import App3 from './App3.vue'

// createApp(App).mount('#app')
// createApp(App2).mount('#app2')
// createApp(App3).mount('#app3')



createApp(App).use(router).mount('#app')