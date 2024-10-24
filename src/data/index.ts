import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import migrations from '@/data/migrations';
import schema from '@/data/schema';

const adapter = new SQLiteAdapter({
	dbName: 'sponi-database',
	schema: schema,
	migrations: migrations,
	jsi: true,
	onSetUpError: (error) => {
		console.error(error);
	},
});

const database = new Database({
	adapter,
	modelClasses: [],
});
