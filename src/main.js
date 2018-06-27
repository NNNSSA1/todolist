import 'todomvc-app-css/index.css'

import Vue from 'vue'
import {
  get
} from 'https';
import { EDESTADDRREQ } from 'constants';


var filters = {
  all(lists) {
    return lists.filter((list) => {
      return list
    })
  },
  active(lists) {
    return lists.filter((list) => {
      return !list.completed
    })
  },
  completed(lists) {
    return lists.filter((list) => {
      return list.completed
    })
  }
}

new Vue({
  el: '.todoapp',
  data: {
    banner: 'todoMVC',
    newtodo: '',
    lists: [{
      content: 'vue',
      completed: false,
    }],
    editable :false
  },
  methods: {
    addtodo() {
      if(!this.newtodo){
        return 
      }
      this.lists.push({
        content: this.newtodo,
        completed: false,
      })
      this.newtodo = ''
    },
    removelist(index) {
      this.lists.splice(index, 1)
    },
    Edit(list){
      this.catch = list.content
      this.editable = list
    },
    doneEdit(list,index){
      this.editable = false
      if(!list.content){
        return this.removelist(index)
      }
    },
    escEdit(list){
      this.editable = false
      list.content = this.catch
    },
  },
  computed: {
    remain() {
      return filters.active(this.lists).length
    },
    isAll:{
      get(){  
        return this.remain === 0
      },
      set(value){
        this.lists.forEach((list)=>{
          list.completed = value
        })
      }
    }
  },


})
