// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/angular-course-project'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
// kaaaaaaaaaarmaaaaaaaaa
// n3m 3ayz twreny eh?
// lol ana kont 3ayz a4of 
// bs bzmtk msh bttoh f kol el files de
// el files monzma atooh fe eh
// kter gdaaa
// 34an Angular m3mool ll m4aree3 el kbeera f dh tby3y
// fuck angular
// Fuck React
// Fuck Lo dash
// Vue 7lwa
// yes but i think im react fanboy heheheheh
// tyb kont 3ayz t4of eh?
// wla 7aga ro7 nam ya
// tb thwany hgrb ana ok ok
// hmmmm hyft7 3nde ?
// wow byft7
// eh hwa?
// ana lsa 
// by loading now2olt
// wellm, msh hy4t8la
// el angularg kper f45
// 3ayz tnam awy ?// grbt localhost:4200?