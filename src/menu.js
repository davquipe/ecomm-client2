
const menus = [
  {
    path: '/home',
    title: 'Home!',
    icon: 'home',
  },
  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon: 'fa',
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon: 'list',
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon: 'list',
      },
      {
        path: '/tacos/cart',
        title: 'cart!',
        icon: 'yelp',
      }
    ]
  },
  
  {
    path: '/xtacos2',
    title: 'tacos2!',
    icon: 'list',
    routes: [
      {
        path: '/xtacos2/bus2',
        title: 'bus2!',
        icon: 'gg',
      },
      {
        path: '/xtacos2/cart2',
        title: 'cart2!',
        icon: 'send',
      }
    ]
  },
  {
    path: '/catalogo',
    title: 'catalogo!',
    icon: 'list',
    routes: [
      {
        path: '/catalogo/categorias',
        title: 'categorias!',
        replace: '/catalogo/categorias/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/categorias/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/categorias/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/categorias/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/diagnosticos',
        title: 'diagnosticos!',
        replace: '/catalogo/diagnosticos/list',
        icon: 'usb',
        routes: [
          {
            path: '/catalogo/diagnosticos/list',
            title: 'list cat!',
          },
          {
            path: '/catalogo/diagnosticos/new',
            title: 'new cat!',
          },
          {
            path: '/catalogo/diagnosticos/edit/:id',
            title: 'edit cat!',
          }
        ]

      },
      {
        path: '/catalogo/autors',
        title: 'autors!',
        replace: '/catalogo/autors/list',
        icon: 'qq',
        routes: [
          {
            path: '/catalogo/autors/list',
            title: 'list autors!',
          },
          {
            path: '/catalogo/autors/list2',
            title: 'new autors2',
          }
        ]
      }
    ]
  }
]

export { menus }
