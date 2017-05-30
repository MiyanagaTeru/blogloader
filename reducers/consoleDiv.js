// a place to store consoleDiv
const initialState = {
	newArticle: {},
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
		default:
			return state;
	}
}

export default consoleDiv;
