import { prisma } from "../../../../databases/prismaClient";

export class UpdateTodoService {
    async execute(id: number) {
        const updatedTodo = await prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                completed: true,
                updatedAt: new Date(),
            },
        });

        return updatedTodo;
    }
}
