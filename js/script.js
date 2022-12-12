const {createApp} = Vue

createApp({
    data(){
        return{
            text : "Hello VueWorld!",
            src : "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
            myClass : " ",
            myImgClass : "w-25",
            alt : "Vue Logo",
            numeroUno : " ",
            numeroDue : " ",
        }
    },
    methods :{
        sayHello : function(){
            console.log("Hello!!!");
        },
        calc : function(num1, num2){
            sum = num1 + num2;
            console.log(sum)
            return sum;
        }
    }
}).mount('#app')