import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Contents from '../components/Contents';
import Articles from '../components/Articles';

import actions from '../actions';

const Main = ({
	contents,
	articles,
	newArticle,
	currentArticle,
	updateCurrentArticle,
	editNewArticleTitle,
	editNewArticleContent,
	saveNewArticle
}) =>
	<div>
		<Articles currentArticle={currentArticle} articles={articles}/>
		<Contents currentArticle={currentArticle} articles={articles} updateCurrentArticle={updateCurrentArticle}/>
	</div>

const mapStateToProps = state => ({
	articles: state.articles,
	contents: state.contents,
	newArticle: state.newArticle,
	currentArticle: state.currentArticle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);