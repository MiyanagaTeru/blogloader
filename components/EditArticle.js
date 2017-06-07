import React from 'react';
import TinyMCEInput from 'react-tinymce';

import styles from '../containers/Console.css';

const EditArticle = ({
	display,
	editingArticle,
	editingArticleTitle,
	editingArticleContent,
	onSubmit
}) =>
	display ?
	<div className={styles.createNewArticleWrapper}>
		<form
			onSubmit={ e => {
				e.preventDefault();
				onSubmit();
			}} >
			<div className={styles.newArticleTitle}>
				<label>
					<input
						type='text'
						name='title'
						value={editingArticle.title || ''}
						placeholder='在这里输入标题'
						required
						onChange={ e => editingArticleTitle(e.target.value)}
						autoFocus
					/>
				</label>
			</div>
			<TinyMCEInput
				content={editingArticle.content || ''}
				config={
					{
						height: 600,
						branding: false,
						plugins: 'preview',
						content_css: 'css/tinyMCE.css'
					}
				}
				onChange={e => editingArticleContent(e.target.getContent())}
			/>
			<input type='submit' value='Submit' />
		</form>
	</div> :
	<div></div>

export default EditArticle;