export const throttleHandle = (fn, wait = 3000) => {
  console.log('fn', fn);
  // 上一次执行 fn 的时间
  let previous = 0;
  // 将 throttle 处理结果当作函数返回
  return function(...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date();
    console.log('now', now);
    // 将当前时间和上一次执行函数的时间进行对比
    // 大于等待时间就把 previous 设置为当前时间并执行函数 fn
    if (now - previous > wait) {
      previous = now;
      fn.apply(this, args);
    }
  };
};
// 全局指令
export const throttle = {
  install(vue) {
    vue.directive('throttle', {
      inserted(el) {
        console.log('el', el);
        el.addEventListener('click', e => {
          console.log('e===', e);
          if (!el.disabled) {
            el.disabled = true;
            const timer = setTimeout(() => {
              el.disabled = false;
              clearTimeout(timer);
            }, 2000);
          }
        });
      },
    });
  },
};
