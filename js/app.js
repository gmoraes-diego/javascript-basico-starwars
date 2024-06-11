const LIST = [
    {
        id: 1,
        nome: 'C3PO',
        avatar: 'images/c3po.png'
    },
    {
        id: 2,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 3,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 4,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 5,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 6,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 7,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 8,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    }
]

const App = new Vue({
    el: '#app', // elemento base da aplicação
    data: {
        title: 'Star Wars Lego',
        welcome: 'Bem-vindo.',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(characterName) {
            alert(`O personagem ${characterName} recebeu um like!`)
        },
        remove(id) {
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {
            if(this.searchName === '') {
                return alert('Preencha o campo para realizar a busca.')
            }

            const list = this.characters = LIST
            // carrega todos personagens na constante list

            const result =  list.filter(item => {
                return item.nome === this.searchName
                // filtragem percorrendo por toda lista de personagens e vai retorna o personagem buscado
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado.')
            } else {
                this. characters =  result
            }
            
        }
    }
}) 
// a constante é uma nova instância do framework vue.js