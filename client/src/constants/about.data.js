//function that fetches the data for the about section

const retrieveAboutData = async (client, query) => {
	try {
		const response = await client.fetch(query);

		const data = await response;
		return data;
	} catch (err) {
		console.error(err);
		return [];
	}
};

export default retrieveAboutData;
