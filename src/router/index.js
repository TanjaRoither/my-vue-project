import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Steps from '@/components/Steps'
import FooA from '@/components/Fooa'
import FooB from '@/components/Foob'
import Todoapp from '@/components/Todoapp'
import TodoMVC from '@/components/TodoMVC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/steps',
      component: Steps
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo,
      children: [
        { path: 'fooa', component: FooA},
        { path: 'foob', component: FooB},
      ]
    },
    {
      path: '/todoapp',
      component: Todoapp
    },
    {
      path: '/todox',
      component: TodoMVC,
      redirect: '/todox/all',
      props: { filter: 'all' }
    },
    {
      path: '/todox/:filter',
      component: TodoMVC,
      props: true
    },
  ]
})
