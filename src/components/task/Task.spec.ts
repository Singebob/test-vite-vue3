import { mount } from '@vue/test-utils'
import Task from './Task.vue'

describe('Task', () => {
  it('should display header text', () => {
    const taskMsg = 'Hello Vue 3'
    const wrapper = mount(Task, { props: { taskMsg } })

    expect(wrapper.find('label').text()).toEqual(taskMsg)
  })
})