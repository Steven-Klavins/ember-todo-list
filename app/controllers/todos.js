import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodosController extends Controller {
    @tracked newTodoTitle = "";
    @tracked todos = [];

    @action
    updateNewTodoTitle(event) {
        this.newTodoTitle = event.target.value;
    }

    @action
    addTodo(){
        // create a new instance of the array as @action will now recognise a push event
        this.todos = [...this.todos, this.newTodoTitle];
        this.newTodoTitle = "";
    }
}
