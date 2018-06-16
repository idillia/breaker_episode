'use strict';

import episodeDataReducer          from './episodeDataReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = {
  form: formReducer,
  episodeDataState: episodeDataReducer
};

export default rootReducer;

