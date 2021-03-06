import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreateNewArticle from '../components/CreateNewArticle';
import EditArticle from '../components/EditArticle';

import actions from '../actions';
import styles from './Console.css';

class Console extends React.Component {
	render() {
		const {
			consoleBar,
			newArticle,
			editingArticle,
			editingArticleTitle,
			editingArticleContent,
			elementStatus,
			currentArticle,
			switchComponent,
			editConsoleBar,
			editNewArticleTitle,
			editNewArticleContent,
			saveNewArticle,
			deleteArticle,
			toggleConsoleDiv,
			loadCurrentArticleToEditor,
			saveEditedArticle,
			updateCurrentArticle
		} = this.props
		return (
			<div className={`${styles.consoleDiv} ${elementStatus.consoleDiv ? '': styles.hidden}`}>
				<CreateNewArticle
					display={!!elementStatus.new}
					newArticle={newArticle}
					editNewArticleTitle={editNewArticleTitle}
					editNewArticleContent={editNewArticleContent}
					onSubmit={ e => {
						saveNewArticle(newArticle);
						switchComponent('init');
						toggleConsoleDiv();
					}}
				/>
				<EditArticle
					display={!!elementStatus.edit}
					editingArticle={editingArticle}
					editingArticleTitle={editingArticleTitle}
					editingArticleContent={editingArticleContent}
					onSubmit={ e => {
						saveEditedArticle(editingArticle);
						switchComponent('init');
						toggleConsoleDiv();
					}}
				/>

				<form onSubmit={ e => {
					e.preventDefault();
					switch (consoleBar) {
						case 'new':
							switchComponent('new');
							editConsoleBar('');
							break;
						case 'edit':
							loadCurrentArticleToEditor(currentArticle);
							switchComponent('edit');
							editConsoleBar('');
							break;
						case 'delete':
							deleteArticle(currentArticle.id);
							editConsoleBar('');
							break;
						case 'init':
							switchComponent('init');
							editConsoleBar('');
							break;
						default:
					}
				}}
				>
					<input
						className={styles.consoleBar}
						name='consoleBar'
						type='text'
						value={consoleBar}
						onChange={ e => {
							editConsoleBar(e.target.value)
						}}
						ref={(input) => { this.nameInput = input; }}
					/>
					<input type='submit' hidden/>
				</form>

			</div>
		);
	}
	componentDidMount() {
		document.addEventListener('keyup', e => {
			if (e.ctrlKey && e.keyCode === 192) {
				this.props.toggleConsoleDiv();
				if (this.props.elementStatus.consoleDiv) {
					this.nameInput.focus();
				}
			}
		})
	}
}

const mapStateToProps = state => ({
	consoleBar: state.consoleDiv.consoleBar,
	newArticle: state.consoleDiv.newArticle,
	editingArticle: state.consoleDiv.editingArticle,
	elementStatus: state.consoleDiv.elementStatus,
	currentArticle: state.currentArticle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Console);