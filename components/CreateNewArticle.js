import React from 'react';
import TinyMCE from 'react-tinymce';

import styles from './styles.css';

const CreateNewArticle = ({
	newArticle,
	editNewArticleTitle,
	editNewArticleContent,
	onSubmit
}) =>
	<div>
		<form
			onSubmit={ e => {
				e.preventDefault();
				onSubmit();
			}} >
			Title: <input type='text' name='title' value={newArticle.title || ''} required onChange={ e => editNewArticleTitle(e.target.value)} />
			<TinyMCE
				content={newArticle.content || ''}
				config={{
					plugins: 'link image code',
					toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
				}}
				onChange={e => editNewArticleContent(e.target.getContent())}
				onKeyup={(event, editor) => editNewArticleContent(editor.getContent())}
			/>
			<input type='submit' value='Submit' />
		</form>
	</div>

export default CreateNewArticle;