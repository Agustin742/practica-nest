import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('/tasks')
export class TaskController {
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }

  @Post()
  createTask() {
    return this.taskService.createTask();
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
