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

server.put("/questions/:id", (request, reply) => {
    const questionId = request.params.id
    const { label, possibleAnswers, correctAnswer, levelDifficulty, points } = request.body

    database.update(questionId, {
        label,
        possibleAnswers,
        correctAnswer,
        levelDifficulty,
        points
    })

    return reply.status(204).send()
})

server.delete("/questions/:id", (request, reply) => {
    const questionId = request.params.id;

    database.delete(questionId);

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
