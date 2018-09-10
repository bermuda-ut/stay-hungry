import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './Resume/Resume';
import registerServiceWorker from './helper/registerServiceWorker';

ReactDOM.render(<Resume />, document.getElementById('root'));
registerServiceWorker();