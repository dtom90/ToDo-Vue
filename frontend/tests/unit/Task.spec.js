import { shallowMount } from '@vue/test-utils'
import moment from 'moment'

import Task from '@/components/Task.vue'

describe('Task', () => {
  
  describe('Incomplete', () => {
    
    const task = {
      id: 1,
      name: 'new task 1',
      createdDate: new Date(),
      completedDate: null,
      completed: false
    }
    
    const wrapper = shallowMount(Task, {
      propsData: { task }
    })
    
    it('renders the task name', () => {
      
      expect(wrapper.text()).toMatch(task.name)
      
    })
    
    it('renders the created date', () => {
      
      expect(wrapper.text()).toMatch('Created on')
      expect(wrapper.text()).toMatch(moment(task.createdDate).format('ddd MMM DD YYYY,'))
      expect(wrapper.text()).toMatch(moment(task.createdDate).format('h:mm a'))
      
    })
    
    it('does not render "Created On"', () => {
      
      expect(wrapper.text()).not.toMatch('Completed on')
      
    })
    
  })
  
  describe('Complete', () => {
    
    const task = {
      id: 1,
      name: 'new task 1',
      createdDate: new Date(),
      completedDate: moment(new Date()).add(30, 'm').toDate(),
      completed: true
    }
    
    const wrapper = shallowMount(Task, {
      propsData: { task: task }
    })
    
    it('renders the task name', () => {
      
      expect(wrapper.text()).toMatch(task.name)
      
    })
    
    it('renders the completed date', () => {
      
      expect(wrapper.text()).toMatch('Completed on')
      expect(wrapper.text()).toMatch(moment(task.completedDate).format('ddd MMM DD YYYY,'))
      expect(wrapper.text()).toMatch(moment(task.completedDate).format('h:mm a'))
      
    })
    
    it('does not render the created date', () => {
      
      expect(wrapper.text()).not.toMatch('Created on')
      expect(wrapper.text()).not.toMatch(moment(task.createdDate).format('h:mm a'))
      
    })
    
  })
  
})