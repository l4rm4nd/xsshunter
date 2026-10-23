'use strict';

require('./instrument.js');

const get_app_server = require('./app.js');

const database = require('./database.js');
const database_init = database.database_init;

(async () => {
	// Ensure database is initialized.
	await database_init();

	const app = await get_app_server();

	const port = process.env.PORT;

	app.listen(port, () => {
		console.log(`XSS Hunter listening on port ${port}`)
	});
})();
