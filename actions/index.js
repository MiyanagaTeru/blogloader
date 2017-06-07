import asyncSaveArticles from './asyncSaveArticles';
import asyncInitArticles from './asyncInitArticles';
import { toggleConsoleDiv, switchComponent, editConsoleBar, editNewArticleTitle, editNewArticleContent, loadCurrentArticleToEditor, editingArticleTitle, editingArticleContent, saveEditedArticle } from './consoleDiv';
import saveNewArticle from './saveNewArticle';
import deleteArticle from './deleteArticle';
import updateCurrentArticle from './updateCurrentArticle';
import updateElementStatus from './updateElementStatus';

const actions = {
	asyncInitArticles,
	asyncSaveArticles,
	toggleConsoleDiv,
	switchComponent,
	editConsoleBar,
	editNewArticleTitle,
	editNewArticleContent,
	saveEditedArticle,
	loadCurrentArticleToEditor,
	editingArticleTitle,
	editingArticleContent,
	saveNewArticle,
	deleteArticle,
	updateCurrentArticle,
	updateElementStatus
};

export default actions;
