export async function fakeLogin(userName, listName){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userName !== '' && listName !== '') {
				resolve('Logged in');
			} else {
				reject({ response: { data: 'Both Username and List name are required!' }});
			}
		}, 1000);
	});
}
