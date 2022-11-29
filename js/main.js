// Descrizione:
// riprodurre la ToDoList come viste insieme questa mattina,
// ma con una struttura di array di oggetti e non un array di semplici stringhe.

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
            },
            { 
                text: 'Fare i piatti', 
                done: false 
            }, 
            { 
                text: 'Fare la benzina',
                done: true 
            }, 
            { 
                text: 'Fare il letto',
                 done: false
            }
        ],
      }
    },
    methods: {
        addTask(){
            if(this.newTask.length< 5 || this.newTask === ''){
                // Inseriamo l'errore se i caratteri sono minori di 5 o il newTask è vuoto.
                this.errore = true;
            }else{
                this.tasks.push({text: this.newTask,done: false});
                // Togliamo l'errore se i caratteri sono maggiori di 5.
                this.errore = false;
            }

            this.newTask = '';
        },

        deleteTask(indice){
            this.tasks.splice(indice, 1);
        },

        checkTask(indice){
            this.task[indice].done = !this.task[indice].done;
        }
    }
  }).mount("#myApp")