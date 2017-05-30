import { combineReducers } from 'redux';
import articles from './articles';
import contents from './contents';
import consoleDiv from './consoleDiv';
import currentArticle from './currentArticle';
import elementStatus from './elementStatus';

const reducers = combineReducers({
	articles,
	contents,
	consoleDiv,
	currentArticle,
	elementStatus
})

export default reducers;