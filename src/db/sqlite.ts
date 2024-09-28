import * as SQLite from 'expo-sqlite';
import { DATABASE_NAME } from '@/constants/sql/commons';
import { CREATE_TABLES_SQLITE } from '@/constants/sql/init.sql';

// --------------------------------------------------

export const loadDatabase = async () => {
	const db = await SQLite.openDatabaseSync(DATABASE_NAME);

	console.info('Database loaded');

	// Create tables if not exists
	await db.execAsync(CREATE_TABLES_SQLITE);

	console.info('Tables created if not exists');
};
