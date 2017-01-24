'use strict';
// Tasks Controller
function TasksController(){

    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
    this.addTaskFormListener = function (){
      var futureThis = this
      this.$addTaskForm.submit(function(e){
        e.preventDefault()
        var list_id = parseInt(futureThis.$selectListMenu.val())
        var taskDescription = futureThis.$taskDescriptionInput.val()
        var taskPriority = futureThis.$taskPriorityInput.val()
        var task = new Task(taskDescription, taskPriority, List.all[list_id])
        task.build()
      })
    }

    this.delete = function(){
      var futureThis = this
      this.$wrapper.on('click', '.destroy-task', function(){
      // $(".destroy-task").on('click', (function() {
        var list_id = parseInt($(this).parents('div.list').children('ul').attr('data-id'))
        var task_id = parseInt($(this).parent('li').attr('data-id'))
        var list = List.all[list_id]
        list.tasks.splice(task_id, 1, null)
        $(this).parent('li').remove()
      })
    }

    this.init = function(){
      this.addTaskFormListener()
      this.delete()

    }

}
