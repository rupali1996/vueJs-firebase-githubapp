import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from './utils/config'
firebase.initializeApp(firebaseConfig)

store.dispatch('checkAuth')
 
const app = createApp(App)


app.use(VueSweetalert2)
app.use(store)
app.use(router)
app.mount('#app')

