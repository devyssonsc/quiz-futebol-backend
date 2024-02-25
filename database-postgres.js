import { sql } from './app.js'

export class DataBasePostgres {
    #sequentialId = 0;

    async create(question) {
        const questionId = this.generateSequentialId().toString();

        const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = question;

        await sql`insert into questions (id, label, possibleAnswers, correctAnswer, levelDifficulty, points) VALUES (${questionId}, ${label}, ${possibleAnswers}, ${correctAnswer}, ${levelDifficulty}, ${points})`
    }

    async list() {
        let questions

        questions = await sql`select * from questions`

        return questions
    }

    async update(id, question) {
        const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = question;

        await sql`update questions set label = ${label}, possibleAnswers = ${possibleAnswers}, correctAnswer = ${correctAnswer}, levelDifficulty = ${levelDifficulty}, points = ${points} WHERE id = ${id}`
    }

    async delete(id) {
        await sql`delete from questions where id = ${id}`
    }

    generateSequentialId() {
        return this.#sequentialId++;
    }
}
