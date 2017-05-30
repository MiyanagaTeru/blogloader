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
