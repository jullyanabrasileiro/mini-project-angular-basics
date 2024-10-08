import { Component, EventEmitter, Input,
  OnInit, Output } from '@angular/core';
import { Task } from './types';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  
}



