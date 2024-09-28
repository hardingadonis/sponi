import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { DATABASE_NAME } from '@/constants/commons';

const db = SQLite.openDatabaseSync(DATABASE_NAME);

export const loadDatabase = async () => {
	const dbName = DATABASE_NAME;
	const dbUri = Asset.fromModule(require('@/assets/sponi.database.db')).uri;
	const dbFilePath = `${FileSystem.documentDirectory}database/${dbName}`;

	const fileInfo = await FileSystem.getInfoAsync(dbFilePath);

	console.debug('Database file info:', fileInfo);
	console.debug('Database file path:', dbFilePath);
	console.debug('Database file uri:', dbUri);

	if (!fileInfo.exists) {
		// Create directory if not exists
		await FileSystem.makeDirectoryAsync(
			`${FileSystem.documentDirectory}database/`,
			{
				intermediates: true,
			},
		);

		console.debug('Database file not found, copying from assets...');

		// Copy database file from assets to document directory
		await FileSystem.downloadAsync(dbUri, dbFilePath);

		console.debug('Database file copied successfully!');
	}
};

export default db;
