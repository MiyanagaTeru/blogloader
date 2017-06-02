import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import styles from './styles.css';

const Articles = ({ currentArticle, articles }) =>
	<div className={styles.articles}>
		<CSSTransitionGroup
			transitionName='slowDisplay'
			transitionEnterTimeout={300}
			transitionLeaveTimeout={1}
		>
		{
			articles.length > 0 ?
				<div key={currentArticle.id} className={styles.article}>
					<h2 className={styles.articleTitle}>{currentArticle.title}</h2>
					<div dangerouslySetInnerHTML={{ __html: currentArticle.content }}></div>
				</div> :
				<div>什么也没有呀</div>
		}
		</CSSTransitionGroup>
	</div>

export default Articles;