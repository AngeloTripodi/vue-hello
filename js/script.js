const {createApp} = Vue

createApp({
    data(){
        return{
            text : "Hello VueWorld!"
        }
    }
}).mount('#app')