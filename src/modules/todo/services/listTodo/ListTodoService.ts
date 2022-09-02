import { prisma } from "../../../../databases/prismaClient";

export class ListTodoService {
    async execute() {
        const allTodos = await prisma.todo.findMany();

        return allTodos;
    }
}
