import navConfig from './nav.config.json'

const registerRoute = (navs) => {
  let route = []
  route.push({
    path: '/component',
    redirect: '/component/installation',
    component: require('./components/component.vue'),
    children: []
  })
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(nav => {
          addRoute(nav)
        })
      })
    } else if (nav.children) {
      nav.children.forEach(nav => {
        addRoute(nav)
      })
    } else {
      addRoute(nav)
    }
  })
  function addRoute (page) {
    console.log(page)
    const component = page.path === '/changelog'
      ? require('./pages/changelog.vue')
      : require(`./docs${page.path}.md`)
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description
      },
      name: 'component-' + (page.title || page.name),
      component: component.default || component
    }

    route[0].children.push(child)
  }

  return route
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function () {
  let guideRoute = {
    path: '/guide', // 指南
    redirect: '/guide/design',
    component: require('./pages/guide.vue'),
    children: [{
      path: 'design', // 设计原则
      name: 'guide-design',
      component: require('./pages/design.vue')
    }, {
      path: 'nav', // 导航
      name: 'guide-nav',
      component: require('./pages/nav.vue')
    }]
  }

  let resourceRoute = {
    path: '/resource', // 资源
    name: 'resource',
    component: require('./pages/resource.vue')
  }

  let indexRoute = {
    path: '/', // 首页
    name: 'home',
    component: require('./pages/index.vue')
  }

  return [guideRoute, resourceRoute, indexRoute]
}

route = route.concat(generateMiscRoutes())

export default route
