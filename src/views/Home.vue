<template>
  <div class="self home">
    <Button v-if="isShow" type="primary" v-debounce="[() => add(2), 5000]">
      Home
    </Button>
    <h2>{{ count }}</h2>
    <!-- <h2 @click="add">Home-{{ homeVal }}</!-->
    <Input v-model="homeVal" />
    <Button type="primary" :loading="loading" v-throttle="[minus, 2000]">-home</Button>
    <h2>{{ num }}</h2>
    <ButtonHoc type="primary" @click="add(2)">Hello</ButtonHoc>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import { setTimeout } from 'timers';
// import { throttleHandle } from '../throttle.js';

export default {
  name: 'Home',
  data() {
    return {
      value5: false,
      value6: false,
      isShow: true,
      homeVal: '',
      count: 0,
      num: 99,
      loading: false,
    };
  },
  created() {
    console.log('created');
  },
  methods: {
    ...mapMutations(['includeAdd', 'includeMinus']),
    add(i) {
      this.$Message.error('error ~');
      this.count += i;
      console.log('add');
      this.includeAdd(this.$options.name);
    },
    minus() {
      console.log('minus');
      this.num--;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      // this.isShow = !this.isShow;
      // console.log('minus');
      // throttleHandle(() => {
      //   this.includeMinus(this.$options.name);
      //   console.log('HHH');
      // });
    },
  },
};
</script>
