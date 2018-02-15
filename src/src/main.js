// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;

  // Initialize Firebase
var config = {
  apiKey: "AIzaSyDW6wG6cUdjMZfDtCZFuw8rphd00TsotxA",
  authDomain: "drm-app-e6869.firebaseapp.com",
  databaseURL: "https://drm-app-e6869.firebaseio.com",
  projectId: "drm-app-e6869",
  storageBucket: "drm-app-e6869.appspot.com",
  messagingSenderId: "474362826095"
};

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});
