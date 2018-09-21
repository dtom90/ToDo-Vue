import { shallowMount, createLocalVue } from '@vue/test-utils'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const localVue = createLocalVue();
localVue.component('font-awesome-icon', FontAwesomeIcon)

import TaskList from '@/components/TaskList.vue'

describe('TaskList.vue', () => {
  it('renders props.name when passed', () => {
    const tasks = [
      {id: 1, name: 'new task 1'},
      {id: 2, name: 'new task 2'},
      {id: 3, name: 'new task 3'}
    ]
    const wrapper = shallowMount(TaskList, {
      propsData: { tasks: tasks },
      localVue
    })
    const renderedTasks = wrapper.findAll('li')
    renderedTasks.wrappers.forEach((elem, i) => {
      expect(elem.text()).toMatch(tasks[i].name)
    })
  })
})