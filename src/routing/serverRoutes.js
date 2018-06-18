import Base from '../components/Base.js';
import NotFoundPage from '../components/NotFoundPage';
import EpisodeContainer from '../components/episode/episodeContainer';


const routes = [
  {
    component: Base,
    routes: [
      {path: '/', component: EpisodeContainer},
      {path: '*', component:NotFoundPage}
    ],
  },
];

export default routes;
