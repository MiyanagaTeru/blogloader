const initialState = {}

const currentArticle =(state = initialState, action) => {
	switch (action.type) {
		case 'INIT_ARTICLES':
			return action.articles[0] || {};
		case 'UPDATE_CURRENT_ARTICLE':
			return action.article;
		default:
			return state;
	}
}

export default currentArticle;