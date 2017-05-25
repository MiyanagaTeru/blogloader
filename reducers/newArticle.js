// a place to store inputs temporally
const newArticle = (state = {}, action) => {
	switch (action.type) {
		case 'EDIT_NEW_ARTICLE_TITLE':
			return {
				...state,
				title: action.title
			};
		case 'EDIT_NEW_ARTICLE_CONTENT':
			return {
				...state,
				content: action.content
			};
		case 'SAVE_NEW_ARTICLE':
			return {};
		default:
			return state;
	}
}

export default newArticle