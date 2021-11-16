//引入vue
import Vue from 'vue'
import Hello from './helloworld.vue'
const root = document.createElement('div');
document.body.appendChild(root)
//mount将hello模块挂载在根节点
new Vue({
    render:(h) => h(Hello)
}).$mount(root)
