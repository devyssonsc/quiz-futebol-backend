import { sql } from './app.js'

// sql`DROP TABLE IF EXISTS questions`.then(() => {
//     console.log('tabela deletada')
// })

sql`
    CREATE TABLE questions (
        id                  TEXT PRIMARY KEY,
        label               TEXT NOT NULL,
        possibleAnswers     TEXT[] NOT NULL,
        correctAnswer       TEXT NOT NULL,
        levelDifficulty     TEXT NOT NULL,
        points              INTEGER NOT NULL
    );
`.then(() => {
    console.log('tabela criada')
})
