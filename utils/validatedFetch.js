// server side poly-fill
require('es6-promise').polyfill();
require('isomorphic-fetch');

// (str, obj, string) -> promise
const validatedFetch = (
	getState,
	url,
	options
) => fetch(
	url,
	{
		method: 'get',
		...options,
		headers: {
			...(options && options.headers)
		}
	}
).then(
	response => response.json()
);

export default validatedFetch;