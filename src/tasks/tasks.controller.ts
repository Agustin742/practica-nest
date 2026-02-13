import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TaskController {
  @Get('/tasks')
  getAllTasks() {
    // Buscar en una db
    //Peticion a otro backend
    return 'Obteniendo todas las tareas';
  }
}
