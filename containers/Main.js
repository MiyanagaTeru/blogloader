import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Contents from '../components/Contents';
import Articles from '../components/Articles';
import CreateNewArticle from '../components/CreateNewArticle';

import actions from '../actions';

const Main = ({
	contents,
	articles,
	newArticle,
	currentArticle,
	updateCurrentArticle,
	editNewArticleTitle,
	editNewArticleContent,
	saveNewArticle,
	deleteArticle
}) =>
	<div id='main'>
		<Contents contents={contents} updateCurrentArticle={updateCurrentArticle}/>
		<Articles currentArticle={currentArticle} articles={articles} deleteArticle={deleteArticle}/>
		<CreateNewArticle newArticle={newArticle} editNewArticleTitle={editNewArticleTitle} editNewArticleContent={editNewArticleContent} onSubmit={ e => saveNewArticle(newArticle)}/>
	</div>

const mapStateToProps = state => ({
	articles: state.articles,
	contents: state.contents,
	newArticle: state.newArticle,
	currentArticle: state.currentArticle
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);