Package.describe({
  name: 'ankitv89:instamojo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Instamojo Payment gateway package',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.5.1');
  api.use(['ecmascript','underscore', 'ejson']);
  api.use('http' ,{ weak: true });
  api.mainModule('instamojo.js');

  api.addFiles('instamojo.js',"server");
  api.export('Instamojo',["client","server"]);
  api.export('HEADERS',"server");


});

Package.onTest(function(api) {
  api.use(['ecmascript','http'] );

  api.use('tinytest');
  api.use('ankitv89:instamojo');
  api.mainModule('instamojo-tests.js');
});