import actions from '../actions'

const saveDataMiddleware = store => next => action => {
	if (['SAVE_NEW_ARTICLE', 'DELETE_ARTICLE', 'SAVE_EDITED_ARTICLE'].indexOf(action.type) !== -1 ) {
		let result = next(action)
		store.dispatch(actions.asyncSaveArticles(action)).then(
			() => result
		)
	} else {
		return next(action)
	}
}

export default saveDataMiddleware