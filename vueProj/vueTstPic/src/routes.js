import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    { titulo: 'home', path: '', component: Home},
    { titulo: "cadastro", path: '/cadastro', component: Cadastro},
];