import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: false,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  taskList: {id:number, name:string}[] = [];
  newTask: string = '';
  editedTaskName: string = '';
  editingTaskId:number=0;

  addTask() {
    const task = { id: this.taskList.length + 1, name: this.newTask };
    this.taskList.push(task);
    this.newTask = '';
  }
  clearTasks() {
    this.taskList = [];
  }
  removeTask(taskId: number) {
    this.taskList = this.taskList.filter(task => task.id !== taskId);
  }
  
  editTask(taskId: number) {
    this.editingTaskId = taskId;
    const task = this.taskList.find(task => task.id === taskId);
    if (task) {
      this.editedTaskName = task.name;
    }
  }
  saveTask(editTaskId: number) {
    const task = this.taskList.find(task => task.id === this.editingTaskId);
    if (task) {
      task.name = this.editedTaskName;
      this.editedTaskName = '';
      this.editingTaskId = 0;
    }
  }
  cancelEdit(){
    this.editedTaskName = '';
    this.editingTaskId = 0;
  }

}
