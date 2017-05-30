import moment from 'moment';
import validatedFetch from '../utils/validatedFetch';

const asyncSaveArticles = () =>
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
					dispatch({
						type: 'INIT_ARTICLES',
						articles: response.articles
					})
				])
		)


export default asyncSaveArticles;