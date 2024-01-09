System.import('single-spa').then(({ registerApplication, start }) => {
  registerApplication({
    name: 'navbar',
    app: () => System.import('navbar'),
    activeWhen: () => true,
  });

  registerApplication({
    name: 'noop-zone',
    app: () => System.import('noop-zone'),
    activeWhen: location => location.pathname.startsWith('/noop-zone'),
  });


  registerApplication({
    name: 'home',
    app: () => System.import('home'),
    activeWhen: location => location.pathname.startsWith('/home'),
  });

  registerApplication({
    name: 'analyze',
    app: () => System.import('analyze'),
    activeWhen: location => location.pathname.startsWith('/analyze'),
  });

  registerApplication({
    name: 'configure',
    app: () => System.import('configure'),
    activeWhen: location => location.pathname.startsWith('/configure'),
  });

  registerApplication({
    name: 'interpret',
    app: () => System.import('interpret'),
    activeWhen: location => location.pathname.startsWith('/interpret'),
  });

  registerApplication({
    name: 'journal',
    app: () => System.import('journal'),
    activeWhen: location => location.pathname.startsWith('/journal'),
  });

  start();
});
