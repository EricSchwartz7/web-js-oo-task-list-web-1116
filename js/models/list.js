'use strict';

class List {

  constructor(title){
    this.title = title
    this.tasks = []
    List.all.push(this)
    this.id = this.constructor.all.length - 1
  }

  listEl(){
    return `<div class="list"><h2><button class="destroy-list">x</button> ${this.title}</h2><ul id="list-${this.id}" data-id="${this.id}"></ul></div>`
  }

  optionEl(){
    return `<option value="${this.id}">${this.title}</option>`
  }

  build(){
    $('#select_list').append(this.optionEl())
    $('#lists').append(this.listEl())
  }

  assignTask(task){
    this.tasks.push(task)
  }
}
List.all = []
