import React from 'react';
import TinyMCEInput from 'react-tinymce';

import styles from '../containers/Console.css';

const CreateNewArticle = ({
	display,
	newArticle,
	editNewArticleTitle,
	editNewArticleContent,
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
						value={newArticle.title || ''}
						placeholder='在这里输入标题'
						required
						onChange={ e => editNewArticleTitle(e.target.value)}
						autoFocus
					/>
				</label>
			</div>
			<TinyMCEInput
				content={newArticle.content || ''}
				config={
					{
						height: 600,
						branding: false,
						plugins: 'preview',
						content_css: 'css/tinyMCE.css'
					}
				}
				// onSetupEditor={ editor => editor.on('change',  console.log('ahahahaha')) }
				onNodeChange={e => editNewArticleContent(e.target.getContent())}
			/>
			<input type='submit' value='Submit' />
		</form>
	</div> :
	<div></div>

export default CreateNewArticle;