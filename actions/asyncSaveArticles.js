import moment from 'moment';
import validatedFetch from '../utils/validatedFetch';

const asyncSaveArticles = action =>
	(dispatch, getState) =>
		validatedFetch(
			getState,
			'saveArticles',
			{
				method: 'post',
				body: JSON.stringify({
					lastUpdateTime: moment(),
					articles: getState().articles
				})
			}
		).then(
			response =>
				Promise.all([
					dispatch({
						type: 'UPDATE_CONTENT',
						articles: response.articles
					}),
					action.type === 'SAVE_NEW_ARTICLE' || action.type === 'DELETE_ARTICLE' ?
						dispatch({
							type: 'INIT_ARTICLES',
							articles: response.articles
						}) : '',
					action.type === 'SAVE_EDITED_ARTICLE' ?
						dispatch({
							type: 'UPDATE_CURRENT_ARTICLE',
							article: action.editingArticle
						}) : ''
				])
		)


export default asyncSaveArticles;