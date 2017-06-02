import React from 'react';

import Main from '../containers/Main';
import Console from '../containers/Console';

import styles from './styles.css';

class App extends React.Component {
	render () {
		return (
			<div id={styles.main}>
				<Main />
				<Console />
			</div>
		)
	}
}

export default App;
