import asyncSaveArticles from './asyncSaveArticles';
import asyncInitArticles from './asyncInitArticles';
import { editNewArticleTitle, editNewArticleContent } from './editNewArticle';
import saveNewArticle from './saveNewArticle';
import deleteArticle from './deleteArticle';
import updateCurrentArticle from './updateCurrentArticle';

const actions = {
	asyncInitArticles,
	asyncSaveArticles,
	editNewArticleTitle,
	editNewArticleContent,
	saveNewArticle,
	updateCurrentArticle
};

export default actions;
