import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateNewArticle from '../components/CreateNewArticle';

import actions from '../actions';
import styles from './Console.css';

class Console extends React.Component {
	constructor() {
		super();
		this.state = { display: false }
	}
	render() {
		const {
			consoleBar,
			newArticle,
			elementStatus,
			switchComponent,
			editConsoleBar,
			editNewArticleTitle,
			editNewArticleContent,
			saveNewArticle,
		} = this.props
		return (
			<div id='consoleDiv' className={elementStatus.consoleDiv ? '': styles.hidden}>
				<input className={styles.consoleBar} name='consoleBar' type='text' value={consoleBar}
					onChange={ e => {
						editConsoleBar(e.target.value)
					}}
					onKeyUp={ e => {
						console.log(e.key)
						switch (e.key) {
							case 'Enter':
								const commandsList = ['new', 'edit', 'delete']
									if (commandsList.indexOf(consoleBar) > -1) {
										switchComponent(consoleBar);
										editConsoleBar('');
									}
							default:
						}
					}}
				/>
				<CreateNewArticle
					display={!!elementStatus.new}
					newArticle={newArticle}
					editNewArticleTitle={editNewArticleTitle}
					editNewArticleContent={editNewArticleContent}
					onSubmit={ e => saveNewArticle(newArticle)}
				/>
			</div>
		);
	}
	componentDidMount() {
		document.addEventListener('keyup', e => {
			if (e.ctrlKey && e.keyCode === 192) {
				this.props.toggleConsoleDiv()
			}
		})
	}
	componentWillReceiveProps(props) {
		this.setState({ display: props.elementStatus.consoleWrapper })
	}
}

const mapStateToProps = state => ({
	consoleBar: state.consoleDiv.consoleBar,
	newArticle: state.consoleDiv.newArticle,
	elementStatus: state.consoleDiv.elementStatus
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Console);