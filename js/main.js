const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            { 
                text: 'Fare i compiti', 
                done: false 
            }, 
            { 
                text: 'Fare la spesa',
                done: true 
            }, 
            { 
                text: 'Fare il bucato',
                 done: false 
            }
        ],
        newTask:'',
      }
    },
    methods: {
        addTask(){
            this.tasks.push({text: this.newTask});
        }
    }
  }).mount("#myApp")