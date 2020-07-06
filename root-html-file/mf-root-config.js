System.import('single-spa').then(function (singleSpa) {

    function regApplication(appName, appRoute) {
      singleSpa.registerApplication(
          appName,
          function() {
              return System.import(appName);
          },
          function(location) {
              return location.pathname.startsWith(appRoute);
          }
      );
    }

    singleSpa.registerApplication(
      'navbar',
      function () {
        layout =  System.import('navbar');
        layout.then(()=> {

          regApplication('app1', '/app1');
          regApplication('app2', '/app2');

        })
        return layout
      },
      function (location) {
        return true;
      }
    )




    singleSpa.start();
  })