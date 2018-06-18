import Base from '../components/Base.js';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import EpisodeContainer from '../components/episode/episodeContainer';

const routes = [
  {
    component: Base,
    routes: [
      {path: '/', exact:true, component: EpisodeContainer},
      {path: '/about', component: AboutPage},
      {path: '*', component:NotFoundPage}
    ],
  },
];

export default routes;