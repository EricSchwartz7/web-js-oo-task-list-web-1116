'use strict';
//
// function idIncrement(){
//   return counter
//   counter++
// }

function ListsController() {

    this.$addListForm = $('#add_list')
    this.$listTitleInput = $('#list_title')
    this.$selectListMenu = $('#select_list')
    this.$addTaskForm = $('#add_task')
    this.$wrapper = $('#wrapper')

    this.init = function() {
      var futureThis = this
      this.$addTaskForm.hide()
      this.$addListForm.submit(function(e){
        e.preventDefault()
        var listTitle = futureThis.$listTitleInput.val()
        $("#add_task").show()
        var list = new List(listTitle)
        list.build()
        futureThis.delete()
      })
    }
    this.delete = function(){
      $("div.list :button").click(function(event){
        var button_id = parseInt(this.parentElement.parentElement.children[1].id.replace("list-", ""))
        $(`ul#list-${button_id}`).parent("div.list").remove()
        $(`option[value=${button_id}]`).remove()
      })
    }

}
