const routes = {
        "/": "/pages/home.html",
        "/about": "/pages/about.html",
        "/contato": "/pages/contato.html",
        404: "/pages/404.html",
      };

      function route(event) {
        event = event || window.event;
        event.preventDefault();

        
        window.history.pushState({}, "", event.target.href);
        handle();
      }

      function handle() {
        const { pathname } = window.location;

        const route = routes[pathname] || routes[404];

        fetch(route).then(dados=> dados.text())
        .then(html => {
          document.querySelector('#app').innerHTML = html
        })

      }
      
      handle()

      window.onpopstate = ()=> handle()

      window.route = ()=> route()