import { fastify } from 'fastify';
import { DataBasePostgres } from './database-postgres.js';

const server = fastify();
const database = new DataBasePostgres();

server.get("/questions", async () => {
    const questions = await database.list();

    return questions
})

server.post("/questions", async (request, reply) => {
    const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = request.body

    await database.create({
        label,
        possibleAnswers,
        correctAnswer,
        levelDifficulty,
        points
    })

    return reply.status(201).send()
})

server.put("/questions/:id", async (request, reply) => {
    const questionId = request.params.id
    const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = request.body

    await database.update(questionId, {
        label,
        possibleAnswers,
        correctAnswer,
        levelDifficulty,
        points
    })

    return reply.status(204).send()
})

server.delete("/questions/:id", async (request, reply) => {
    const questionId = request.params.id;

    await database.delete(questionId);

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
