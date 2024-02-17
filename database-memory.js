import { randomUUID } from "crypto"

export class DatabaseMemory {
    #questions = new Map()

    create(question) {
        const questionId = randomUUID()

        this.#questions.set(questionId, question)
    }

    list() {
        return Array.from(this.#questions.entries()).map((questionArray) => {
            const id = questionArray[0];
            const data = questionArray[1];

            return{
                id,
                ...data,
            }
        })
    }

    update(id, question) {
        this.#questions.set(id, question)
    }

    delete(id) {
        this.#questions.delete(id);
    }
}
