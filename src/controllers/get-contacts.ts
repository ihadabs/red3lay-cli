import axios from 'axios';
import { baseUrl, globalData } from '..';

export async function getContacts() {
	try {
		const { data: contacts } = await axios.get(baseUrl + '/contacts', {
			headers: {
				Authorization: 'Bearer ' + globalData.token,
			},
		});
		const formattedContacts = contacts.map((c: any) => ({ name: c.name, phone: c.phone }));
		console.table(formattedContacts);
	} catch (err: any) {
		console.log(err?.response?.data);
	}
}
