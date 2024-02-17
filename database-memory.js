import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #questions = new Map()

    create(question) {
        const questionId = randomUUID()    // Universally Unique ID

        this.#questions.set(questionId, question)
    }

    list(question, questionId) {
        return this.#questions.values()
    }
}