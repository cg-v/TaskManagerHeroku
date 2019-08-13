import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webRequestService : WebRequestService) { }
//list section
  createList(title: string){ 
    return this.webRequestService.post('lists',{title});
  }

  
  getLists(){
    return this.webRequestService.get('lists');
  }
  updateList(id: string, title : string){ 
    return this.webRequestService.patch(`lists/${id}`,{title});
  }

  getTasks(listId: string){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }

  ///tasks section
  createTask(title: string, listId : string){
    return this.webRequestService.post(`lists/${listId}/tasks`,{title});
  }

  deleteList(id : string){
    return this.webRequestService.delete(`lists/${id}`);
  }

  updateTask(listId: string, taskId: string, title : string){
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`,{title});
  }

  deleteTask(listId: string, taskId : string){
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`);
  }

  complete(task : Task){
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`,{completed: !task.completed} );


  }
}
