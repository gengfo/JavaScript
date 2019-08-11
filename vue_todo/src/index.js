import Vue from 'vue'
import App from './app.vue'

import './asserts/styles/test.css'
import './asserts/images/test.jpg'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue()({
        render: (h) => h(App)
 }    
).$mount(root)
