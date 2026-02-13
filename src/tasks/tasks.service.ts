import { Injectable } from '@nestjs/common';

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

  createTask(task: any) {
    console.log(task);
    this.tasks.push(task);
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
