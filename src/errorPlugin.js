/**
 * 全局异常处理
 * @param {} error
 * @param {*} vm
 */
const errorHandler = (error, vm, info) => {
  console.error('======抛出全局异常======');
  console.error(vm);
  console.error(error);
  console.error(info);
};
const ErrorPlugin = {
  install: (Vue, options) => {
    console.log('options===', options);
    Vue.config.errorHandler = errorHandler;
    Vue.mixin({
      beforeCreate() {
        if (!this.$options.methods) {
          return;
        }
        const methods = this.$options.methods || {};
        console.log('this.$options.methods', this.$options.methods);
        Object.keys(methods).forEach(key => {
          const fn = methods[key];
          this.$options.methods[key] = (...args) => {
            const ret = fn.apply(this, args);
            if (ret && typeof ret.then === 'function' && typeof ret.catch === 'function') {
              return ret.catch(errorHandler);
            } else {
              // 默认错误处理
              return ret;
            }
          };
        });
      },
    });
    Vue.prototype.$throw = errorHandler;
  },
};
export default ErrorPlugin;
