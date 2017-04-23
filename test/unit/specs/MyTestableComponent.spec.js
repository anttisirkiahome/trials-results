import Vue from 'vue'
import MyTestableComponent from 'src/components/MyTestableComponent'

function getRenderedText (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el.textContent
}

const component = new Vue(MyTestableComponent)

describe('MyTestableComponent', () => {
  it('has a created hook', () => {
    expect(typeof MyTestableComponent.created)
      .to.equal('function')
  })

  it('render correctly with no props', () => {
    expect(getRenderedText(MyTestableComponent, {}))
      .to.equal('Static text')
  })

  it('render correctly with different props', () => {
    expect(getRenderedText(MyTestableComponent, { msg: 'Hello' }))
      .to.equal('Static text, props text: Hello')

    expect(getRenderedText(MyTestableComponent, { msg: 'Bye' }))
      .to.equal('Static text, props text: Bye')
  })

  it('can call a function', () => {
    expect(component.someMethod())
      .to.equal('someValue from someMethod')
  })
})
