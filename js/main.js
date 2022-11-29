const { createApp } = Vue

  createApp({
    data() {
      return {
        errore: false,
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
            if(this.newTask.length< 5 || this.newTask === ''){
                // Inseriamo l'errore
                this.errore = true;
            }else{
                this.tasks.push({text: this.newTask});
                // Togliamo l'errore
                this.errore = false;
            }

            {text: this.newTask = ''};
        }
    }
  }).mount("#myApp")