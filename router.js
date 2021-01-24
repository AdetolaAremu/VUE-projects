import {createRouter, createWebHistory} from 'vue-router';
import Dcheros from './pages/Dcheros';
import Thecats from './pages/Thecats';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';

const routes = [
    {path:'/',component: Home },
    {path:'/cats',component: Thecats },
    {path:'/dc-heros',component: Dcheros },
    {path:'/markdown',component: Markdown },
    {path:'/slider',component: Slider}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router