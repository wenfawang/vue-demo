<template>
  <div class="about">
    <h1 @click="add">Test - {{ testVal }}</h1>
    <Input v-model="testVal" />
    <Button @click="minus">-Test</Button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: 'Test',
  data() {
    return {
      testVal: '',
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
