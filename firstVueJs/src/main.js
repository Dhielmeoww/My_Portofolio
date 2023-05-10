import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

Vue.component('postingan',{
    template: '#postingan',
    data: function(){
        return {
            posts: [
            'Membuat dinamic componen',
            'Api laravel',
            'HTML fundamental',
            'otentikasi dengan laravel'
            ]
        }
    }
})
