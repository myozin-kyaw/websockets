import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import Echo from "laravel-echo"
import pusherJs from 'pusher-js';

window.Pusher = pusherJs;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'local',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    cluster: "mt1",
    forceTLS: false,
    disableStats: true,
    // authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    authEndpoint: 'http://filament.test/api/broadcasting/auth',
    auth: {
        headers: {
            Authorization: 'Bearer ' + '7|wk5fikDD1mnX0Py2kiP8hOrqSt3p9IAea3AzTZCy09c7d7fe',
        }
    },

});

createApp(App).mount('#app')
