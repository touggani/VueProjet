import DetailFilm from '../components/DetailFilm.vue';
import NotFound from '../components/404.vue';
import ListeFilm from '../components/ListeFilm.vue'

/*
 Paths are resolved in the order of the list.
 Hence, the 404 path must be at the end.
*/
export const routes = [
    { path: '/detail-film/:id',  component: DetailFilm, name: 'DetailFilm' },
    { path: '/', component: ListeFilm, name: 'ListeFilm' },
    { path: '*', component: NotFound, name: '404' }
];