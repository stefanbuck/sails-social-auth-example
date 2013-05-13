/*---------------------
	:: User
	-> model
---------------------*/
module.exports = {

    adapter: 'mongo',

	attributes	: {

		// Simple attribute:
		// name: 'STRING',

		// Or for more flexibility:
		// phoneNumber: {
		//	type: 'STRING',
		//	defaultValue: '555-555-5555'
		// }

        provider: 'STRING',
        uid: 'INTEGER',
        name: 'STRING'
	}

};