import React from 'react';
import TinyMCEInput from 'react-tinymce-input';

import styles from './styles.css';

const CreateNewArticle = ({
	display,
	newArticle,
	editNewArticleTitle,
	editNewArticleContent,
	onSubmit
}) =>
	display ?
	<div>
		<form
			onSubmit={ e => {
				e.preventDefault();
				onSubmit();

			}} >
			Title: <input type='text' name='title' value={newArticle.title || ''} required onChange={ e => editNewArticleTitle(e.target.value)} />
			<TinyMCEInput
				value={newArticle.content || ''}
				onChange={content => editNewArticleContent(content)}
			/>
			<input type='submit' value='Submit' />
		</form>
	</div> :
	<div></div>

export default CreateNewArticle;