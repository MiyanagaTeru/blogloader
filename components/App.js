import React from 'react';

import Main from '../containers/Main';
import Console from '../containers/Console';

import reset from './reset.css';
import styles from './styles.css';

class App extends React.Component {
	render () {
		return (
			<div>
				<Main />
				<Console />
			</div>
		)
	}
}

export default App;
