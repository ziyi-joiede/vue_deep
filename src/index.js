import Vue from 'vue';
import App from './App.vue';

const root = document.createElement('div');
document.body.append(router);

new Vue({
	render: h => h(App)
}).$mount(root);