const {createApp} = Vue

createApp({
    data(){
        return{
            text : "Hello VueWorld!",
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        }
    }
}).mount('#app')