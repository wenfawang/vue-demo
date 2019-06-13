import Vue from 'vue';
// import ErrorPlugin from './errorPlugin.js';
import iView from 'iview';
import App from './App.vue';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
// import { throttle } from './throttle.js';
import ButtonHoc from './views/ButtonHoc.vue';

Vue.config.productionTip = false;

// Vue.use(throttle);
Vue.use(iView);

const throttle = (func, time = 50, ctx) => {
  // 上一次执行 fn 的时间
  let previous = 0;
  // 将 throttle 处理结果当作函数返回
  return function(...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date();
    // 将当前时间和上一次执行函数的时间进行对比
    // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
    if (now - previous > time) {
      previous = now;
      func.apply(ctx, args);
    }
  };
};
Vue.directive('throttle', {
  bind(el, { value }, vnode) {
    const [target, time] = value;
    const debounced = throttle(target, time, vnode);
    el.addEventListener('click', debounced);
    el._debounced = debounced;
    console.log('el', el);
  },
  destroy(el) {
    console.log('destroy', el);
    el.removeEventListener('click', el._debounced);
  },
});

const debounce = (func, time, ctx, immediate = false) => {
  let timer;
  const rtn = (...params) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && !timer) {
      func.apply(ctx, params);
    }
    timer = setTimeout(() => {
      func.apply(ctx, params);
    }, time);
  };
  return rtn;
};
Vue.directive('debounce', {
  bind(el, { value }, vnode) {
    const [target, time] = value;
    const debounced = debounce(target, time, vnode);
    el.addEventListener('click', debounced);
    el._debounced = debounced;
  },
  destroy(el) {
    console.log('destroy', el);
    el.removeEventListener('click', el._debounced);
  },
});

Vue.component('ButtonHoc', ButtonHoc);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
