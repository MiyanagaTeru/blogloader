// a place to store consoleDiv
const initialState = {
	newArticle: {},
	editingArticle: {},
	consoleBar: '',
	elementStatus: {}
};

const consoleDiv = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_CONSOLE_DIV':
			return {
				...state,
				elementStatus: {
					...state.elementStatus,
					consoleDiv: !state.elementStatus.consoleDiv
				}
			};
		case 'SWITCH_COMPONENT':
			return {
				...state,
				elementStatus: {
					consoleDiv: true,
					[action.component]: true
				}
			}
		case 'EDIT_CONSOLE_BAR':
			return {
				...state,
				consoleBar: action.content
			};
		case 'EDIT_NEW_ARTICLE_TITLE':
			return {
				...state,
				newArticle: {
					...state.newArticle,
					title: action.title
				}
			};
		case 'EDIT_NEW_ARTICLE_CONTENT':
			return {
				...state,
				newArticle: {
					...state.newArticle,
					content: action.content
				}
			};
		case 'SAVE_NEW_ARTICLE':
			return {
				...state,
				newArticle: {}
			};
		case 'EDIT_LOAD_CURRENT_ARTICLE':
			return {
				...state,
				editingArticle: action.article
			};
		case 'EDIT_ARTICLE_TITLE':
			return {
				...state,
				editingArticle: {
					...state.editingArticle,
					title: action.title
				}
			};
		case 'EDIT_ARTICLE_CONTENT':
			return {
				...state,
				editingArticle: {
					...state.editingArticle,
					content: action.content
				}
			};
		case 'SAVE_EDITED_ARTICLE':
			return {
				...state,
				editingArticle: {}
			};
		default:
			return state;
	}
}

export default consoleDiv;
