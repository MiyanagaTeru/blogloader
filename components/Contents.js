import React from 'react';
import styles from './styles.css';

const Contents = ({ currentArticle, articles, updateCurrentArticle }) =>
	<div className={styles.contents}>
		<ul>
			{
				articles.map( (article, i) =>
					<li
						key={i}
						className={`${styles.listItem} ${article.id === currentArticle.id ? styles.activeArticle : ''}`}
						onClick={e => {
							updateCurrentArticle(article);
							scrollTo(0, 0);
						}}
					>
						{article.title}
					</li>
				)
			}
		</ul>
	</div>




export default Contents;

// 复杂版本的目录。暂时不用。
// const Contents = ({ contents, updateCurrentArticle }) =>
// 	<div className={styles.contents}>
// 		<ul>
// 		{
// 			contents.map( (yearData, i) =>
// 				<li key={i}>
// 					<h4 >{`${yearData.year}年`}</h4>
// 					<ul>
// 					{
// 						yearData.months.map( (monthData, i) =>
// 							<li key={i} className={styles.listItem}>
// 								<h5>{`${monthData.month+1}月`}</h5>
// 								<ul>
// 									{
// 										monthData.articles.map( (article, i) =>
// 											<li key={i} className={styles.listItem}>
// 												<span className={styles.articleLink} onClick={e => updateCurrentArticle(article)}>{article.title}</span>
// 											</li>
// 										)
// 									}
// 								</ul>
// 							</li>
// 						)
// 					}
// 					</ul>
// 				</li>
// 			)
// 		}
// 		</ul>
// 	</div>