<template>
  <div class="about">
    <h1 @click="add">About{{ aboutVal }}</h1>
    <Input v-model="aboutVal" />
    <Button @click="minus">-About</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'About',
  data() {
    return {
      aboutVal: '',
    };
  },
  methods: {
    ...mapMutations(['includeAdd', 'includeMinus']),
    add() {
      this.includeAdd(this.$options.name);
    },
    minus() {
      this.includeMinus(this.$options.name);
    },
  },
};
</script>
