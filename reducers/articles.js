import moment from 'moment';

const articles = (state = [], action) => {
	switch (action.type) {
		case 'INIT_ARTICLES':
			return action.articles.sort((a, b) => b.date - a.date);

		case 'SAVE_NEW_ARTICLE':
			if (!!action.content) {
				const lastId = state.length > 0 ? state.sort((a, b) => b.id - a.id)[0].id : -1;
				return [
					{
						date: moment().format('YYYYMMDD'),
						title: action.title,
						id: lastId + 1,
						content: action.content
					},
					...state
				]
			} else {
				return state;
			}
		case 'DELETE_ARTICLE':
			const targetIndex = state.findIndex( obj => obj.id === action.id );
			return targetIndex === 0 ?
				[] :
				[
					...state.slice(0, targetIndex),
					...state.slice(targetIndex + 1)
				];
		default:
			return state;
	}
};

export default articles;