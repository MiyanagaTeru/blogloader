import { combineReducers } from 'redux';
import articles from './articles';
import contents from './contents';
import newArticle from './newArticle';
import currentArticle from './currentArticle';
import elementStatus from './elementStatus';

const reducers = combineReducers({
	articles,
	contents,
	newArticle,
	currentArticle,
	elementStatus
})

export default reducers;