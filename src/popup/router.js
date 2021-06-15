import Router from 'vue-router';
import Vue from 'vue';
import Home from './pages/Home';
import Info from './pages/Info';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/info',
            name: 'info',
            component: Info
        }
    ]
});
