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
				dispatch({
					type: 'UPDATE_CONTENT',
					articles: response.articles
				})
		)


export default asyncSaveArticles;