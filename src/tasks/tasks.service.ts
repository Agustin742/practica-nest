import { Injectable, NotFoundException } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TaskService {
  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);

    if (!taskFound) {
      return new NotFoundException(`task with id ${id} not found`);
    }

    return taskFound;
  }

  createTask(task: any) {
    console.log(task);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }

  updateTask() {
    return 'Actualizando tarea';
  }

  deleteTask() {
    return 'Borrado tarea';
  }

  updateTaskStatus() {
    return 'Actualizando estado de la tarea';
  }
}
