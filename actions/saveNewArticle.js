const saveNewArticle = newArticle => ({
	type: 'SAVE_NEW_ARTICLE',
	title: newArticle.title,
	content: newArticle.content
})

export default saveNewArticle;