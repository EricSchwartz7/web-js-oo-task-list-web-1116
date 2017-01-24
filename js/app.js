// Initialize

$(function() { // on document ready
  listsController = new ListsController();
  listsController.init();
  tasksController = new TasksController();
  tasksController.init();
});
