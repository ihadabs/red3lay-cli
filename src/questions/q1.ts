import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '..';

export async function q1() {
	const { q1Answer } = await prompt({
		type: 'list',
		name: 'q1Answer',
		message: 'Please login or quit 🤬!',
		choices: ['Login', 'Quit'],
		filter: (val) => val.toLowerCase(),
	});

	if (q1Answer === 'quit') {
		console.log('elly ba3naa 5esar dl3na 👊');
		process.exit(0);
	}

	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: 'Enter your email 🥸 ',
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: 'Enter your password 🔑 ',
		},
	]);

	try {
		const result = await axios.post(baseUrl + '/login', {
			email,
			password,
		});
		const newToken = result.data.token;
		globalData.token = newToken;
	} catch (err: any) {
		console.log(err?.response?.data);
		process.exit(0);
	}
}
