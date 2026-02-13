import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  getTasks() {
    return ['task 1', 'task 2', 'task 3'];
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
