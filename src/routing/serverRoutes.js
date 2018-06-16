import Base from '../components/Base.js';
import * as episodeActions from '../actions/episodeActions';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import EpisodeContainer           from '../components/episode/episodeContainer';

const routes = [
  {
    component: Base,
    routes: [
      {path: '/', exact:true, component: HomePage},
      {path: '/episode', component: EpisodeContainer},
      {path: '*', component:NotFoundPage}
    ],
  },
];

export default routes;