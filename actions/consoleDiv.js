export const toggleConsoleDiv = () => ({
	type: 'TOGGLE_CONSOLE_DIV'
})

export const switchComponent = component => ({
	type: 'SWITCH_COMPONENT',
	component
})

export const editNewArticleTitle = title => ({
	type: 'EDIT_NEW_ARTICLE_TITLE',
	title
})

export const editNewArticleContent = content => ({
	type: 'EDIT_NEW_ARTICLE_CONTENT',
	content
})

export const editConsoleBar = content => ({
	type: 'EDIT_CONSOLE_BAR',
	content
})

export const loadCurrentArticleToEditor = article => ({
	type: 'EDIT_LOAD_CURRENT_ARTICLE',
	article
})

export const editingArticleTitle = title => ({
	type: 'EDIT_ARTICLE_TITLE',
	title
})

export const editingArticleContent = content => ({
	type: 'EDIT_ARTICLE_CONTENT',
	content
})

export const saveEditedArticle = editingArticle => ({
	type: 'SAVE_EDITED_ARTICLE',
	editingArticle
})