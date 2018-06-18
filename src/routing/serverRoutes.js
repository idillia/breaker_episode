import Base from '../components/Base.js';
import NotFoundPage from '../components/NotFoundPage';
import EpisodeContainer from '../components/episode/episodeContainer';
import RedirectToArticlesPage from '../components/RedirectToArticlesPage';


const routes = [
  {
    component: Base,
    routes: [
      {path: '/', exact:true, component:RedirectToArticlesPage},
      {path: '/episodes/:id', component: EpisodeContainer},
      {path: '*', component:NotFoundPage}
    ],
  },
];

export default routes;