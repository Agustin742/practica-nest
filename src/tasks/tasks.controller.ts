import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.taskService.getTasks();
  }

  @Post()
  createTask(@Body() task: any) {
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.taskService.updateTaskStatus();
  }
}
