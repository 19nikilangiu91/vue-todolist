const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask:'',
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
      }
    },
    methods: {
        addTask(){
            this.tasks.push({text: this.newTask});
        }
    }
  }).mount("#myApp")