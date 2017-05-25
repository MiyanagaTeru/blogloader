import cleanData from './contents/cleanData';

const contents = (state = [], action) => {
	switch (action.type) {
		case 'INIT_ARTICLES':
			return cleanData(action.articles);
		case 'UPDATE_CONTENT':
			return cleanData(action.articles)
		default:
			return state;
	}
};

export default contents;