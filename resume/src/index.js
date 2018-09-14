import React from 'react';
import ReactDOM from 'react-dom';

import Resume from './Resume/Resume';
import registerServiceWorker from './helper/registerServiceWorker';

import './index.css';
import './font.css';

ReactDOM.render(<Resume />, document.getElementById('root'));

registerServiceWorker();
