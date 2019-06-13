<script>
export default {
  props: {},
  name: 'ButtonHoc',
  data() {
    return {};
  },
  mounted() {
    console.log('HOC succeed');
  },
  methods: {
    // 防抖函数
    debounce(func, delay, context, event) {
      clearTimeout(func.timer);
      func.timer = setTimeout(function() {
        func.call(context, event);
      }, delay);
    },
    handleClickLink(event) {
      let that = this;
      // that.$listeners.click为绑定在新组件上的click函数
      this.debounce(that.$listeners.click, 300, that, event);
    },
  },
  render(h) {
    console.log('this', this);
    const slots = Object.keys(this.$slots)
      .reduce((arr, key) => arr.concat(this.$slots[key]), [])
      .map(vnode => {
        vnode.context = this._self;
        return vnode;
      });
    return h(
      'Button',
      {
        on: {
          click: this.handleClickLink, //新组件绑定click事件
        },
        props: this.$props,
        // 透传 scopedSlots
        scopedSlots: this.$scopedSlots,
        attrs: this.$attrs,
      },
      slots
    );
  },
};
</script>
