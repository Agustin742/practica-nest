import { Injectable } from '@nestjs/common';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TaskService {
  getTasks(): User {
    return {
      name: 'Jhon Doe',
      age: 40,
    };
  }

  createTask() {
    return 'Creando tarea';
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
