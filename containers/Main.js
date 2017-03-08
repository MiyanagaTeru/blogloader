import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions';
import styles from '../styles.css';


const Main = ({
	blogs
}) =>
	<div>
		{
			blogs.articles.map((article, i) =>
				<div key={i}>
					<h2>{article.title}</h2>
					<p>{article.date}</p>
					<div dangerouslySetInnerHTML={{ __html: article.content }}></div>
				</div>
			)
		}
	</div>

const mapStateToProps = state => ({
	blogs: state.blogs
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);