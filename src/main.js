// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */

// var admin = require('firebase-admin')
let app

var config = {
  apiKey: 'AIzaSyAycnhCNM03TwdtUnbKZuxHkSoyJJvOfKg',
  authDomain: 'dolomiterisk.firebaseapp.com',
  databaseURL: 'https://dolomiterisk.firebaseio.com',
  projectId: 'dolomiterisk',
  storageBucket: 'dolomiterisk.appspot.com',
  messagingSenderId: '136501758034'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
