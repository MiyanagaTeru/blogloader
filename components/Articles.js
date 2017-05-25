import React from 'react';
import styles from './styles.css';

const Articles = ({ currentArticle, articles, deleteArticle }) =>
	<div className={styles.articles}>
		{
			currentArticle.title ?
				<div className={styles.article}>
					<span className={styles.deleteArticle} onClick={ e => deleteArticle(currentArticle.id)}>Delete this article</span>
					<h2>{currentArticle.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: currentArticle.content }}></div>
				</div> :
				<div>什么也没有呀</div>
		}
	</div>

export default Articles;