import Vue from 'vue'
import Router from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import AddContact from './components/AddContact.vue';
import SingleContact from './components/SingleContact.vue';



Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/contacts/:id', component: SingleContact, name: 'single'},
        {path: '/add', component: AddContact, name: 'add'},
        {path: '/edit/:id', component: AddContact, name: 'edit'}
      ]
})