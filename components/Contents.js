import React from 'react';
import styles from './styles.css';

const Contents = ({ contents, updateCurrentArticle }) =>
	<div className={styles.contents}>
		<ul className={styles.fixedContents}>
		{
			contents.map( (yearData, i) =>
				<li key={i}>
					<h4 >{`${yearData.year}年`}</h4>
					<ul>
					{
						yearData.months.map( (monthData, i) =>
							<li key={i} className={styles.listItem}>
								<h5>{`${monthData.month+1}月`}</h5>
								<ul>
									{
										monthData.articles.map( (article, i) =>
											<li key={i} className={styles.listItem}>
												<span className={styles.articleLink} onClick={e => updateCurrentArticle(article)}>{article.title}</span>
											</li>
										)
									}
								</ul>
							</li>
						)
					}
					</ul>
				</li>
			)
		}
		</ul>
	</div>

export default Contents;