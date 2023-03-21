const toDoList = {
    data() {
        return {
            appTitle: 'Lista de Tarefas',
            listToDo: [],
            toDo: {
                done: false
            }
        }
    },
    methods: {
        addToDo() {
            this.toDo.title && this.listToDo.push(this.toDo)
            this.toDo = {
                done: false
            }
            localStorage.setItem('listToDo', JSON.stringify(this.listToDo))
        },
        clearToDo() {
            this.listToDo = []
        }
    },
    created() {
        this.listToDo = localStorage.getItem('listToDo') 
            ? JSON.parse(localStorage.getItem('listToDo')) 
            : []
    },
    updated() {
        localStorage.setItem('listToDo', JSON.stringify(this.listToDo))
    }
}

Vue.createApp(toDoList).mount('#app');