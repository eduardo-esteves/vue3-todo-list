const listToDo = [
    {
        title: 'Aprender HTML, CSS e Javascript',
        done: false
    },
    {
        title: 'Completar o desafio de Vue JS com excelência',
        done: true
    }
]

const toDoList = {
    data() {
        return {
            appTitle: 'Lista de Tarefas',
            listToDo
        }
    },
    methods: {}
}

Vue.createApp(toDoList).mount('#app');