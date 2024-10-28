import db from './clients/db.mysql.js';

(async () => {
	try {
		await db.execute(`
            CREATE TABLE IF NOT EXISTS items (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL     
            )
        `);

		await db.execute(`
            CREATE TABLE IF NOT EXISTS combinations (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                combination JSON NOT NULL,  
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

		await db.execute(`
            CREATE TABLE IF NOT EXISTS responses (
                id BIGINT AUTO_INCREMENT PRIMARY KEY,
                combinationId BIGINT NOT NULL,  
                response JSON NOT NULL,        
                FOREIGN KEY (combinationId) REFERENCES combinations(id)
            )
        `);

		console.log('DB tables initialized');
	} catch (error) {
		console.error('Error initializing DB tables:', error);
	}
})();
