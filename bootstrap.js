import actions from './actions';

const bootstrap = store =>
	Promise.all([
		store.dispatch(actions.asyncInitArticles())
	])

export default bootstrap;
