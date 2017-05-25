import moment from 'moment';

// cleaned data looks like:
// [
// 	{
// 		year: 2017,
// 		months: [
// 			{
// 				month: 08,
// 				article: [
// 					{ day: 14, title: '.....' },
// 					{ day: 12, title: '.....' }
// 				]
// 			},
// 			{
// 				month: 06,
// 				article: [
// 					{ day: 3, title: '.....' },
// 					{ day: 1, title: '.....' }
// 				]
// 			}
// 		]
// 	},
// 	{
// 		year: 2015,
// 		months: .......
// 	}
// ]
const cleanData = data => {

	const dateEnhancedAndSorted = data ? data.map( article => ({
		...article,
		year: moment(article.date, 'YYYYMMDD').year(),
		month: moment(article.date, 'YYYYMMDD').month(),
		day: moment(article.date, 'YYYYMMDD').date(),
	})).sort( (a, b) => b.year - a.year ) : []

	const sortedByYear = dateEnhancedAndSorted.reduce( (pre, cur) => {
		const targetObj = pre.find( obj => obj.year === cur.year);
		// if this is the first article found in year
		if ( !targetObj ) {
			// create an object
			return [
				...pre,
				{
					year: cur.year,
					articles: [ cur ]
				}
			]
		} else {
			// merge this object
			const targetIndex = pre.findIndex( obj => obj.year === cur.year);
			return [
				...pre.slice(0, targetIndex),
				{
					year: pre[targetIndex].year,
					articles: [
						...pre[targetIndex].articles,
						cur
					]
				},
				...pre.slice(targetIndex + 1)
			]
		}
	}, [])
	// furthur sort by month
	const sortedByMonth = sortedByYear.map(
		yearData => ({
			year: yearData.year,
			months: yearData.articles.reduce(
				(pre, cur) => {
					const targetObj = pre.find( obj => obj.month === cur.month);
					if ( !targetObj ) {
						// create an object
						return [
							...pre,
							{
								month: cur.month,
								articles: [ cur ]
							}
						];
					} else {
						// merge this object
						const targetIndex = pre.findIndex( obj => obj.month === cur.month);
						return [
							...pre.slice(0, targetIndex),
							{
								month: pre[targetIndex].month,
								articles: [
									...pre[targetIndex].articles,
									cur
								].sort((a, b) => b.day - a.day)
							},
							...pre.slice(targetIndex + 1)
						];
					}
				}, []
			)
		})
	)

	return sortedByMonth
}

export default cleanData;
