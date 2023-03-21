const toDoList = {
    data() {
        return {
            appTitle: 'Lista de Tarefas',
            listToDo: [],
            toDo: {}
        }
    },
    methods: {
        addToDo() {
            this.toDo.title && this.listToDo.push(this.toDo)
            this.toDo = {}
        },
        clearToDo() {
            this.listToDo = []
        }
    }
}

Vue.createApp(toDoList).mount('#app');