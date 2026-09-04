import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import tokens from './tokens.json'

document.documentElement.style.setProperty('--color-primary', tokens.color.primary)
document.documentElement.style.setProperty('--color-background', tokens.color.background)
document.documentElement.style.setProperty('--color-text', tokens.color.text)