import validatedFetch from '../utils/validatedFetch';

const asyncInitArticles	= () =>
	(dispatch, getState) =>
		validatedFetch(
			getState,
			'initArticles',
			{
				method: 'post'
			}
		).then(
			response =>
				dispatch({
					type: 'INIT_ARTICLES',
					articles: response.articles
				})
		)

export default asyncInitArticles;