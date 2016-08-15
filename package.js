Package.describe({
  name: 'kristoferjoseph:flexboxgrid',
  version: '0.6.3',
  summary: 'Grid based off of CSS3 flexbox specification',
  git: 'https://github.com/kristoferjoseph/flexboxgrid',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.8');
  api.use('ecmascript');
  api.addFiles('dist/flexboxgrid.css');
});
