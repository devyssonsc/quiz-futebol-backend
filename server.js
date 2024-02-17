import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.get("/questions", () => {
    const questions = database.list();

    return questions
})

server.post("/questions", (request, reply) => {
    const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = request.body

    database.create({
        label,
        possibleAnswers,
        correctAnswer,
        levelDifficulty,
        points
    })

    return reply.status(201).send()
})

server.put("/questions/:id", () => {
    return "Funcionando"
})

server.delete("/questions/:id", () => {
    return "Funcionando"
})

server.listen({
    port: 3333,
})