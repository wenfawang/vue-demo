<template>
  <div class="about">
    <h1>Foo-{{ fooVal }}</h1>
    <Input v-model="fooVal" />
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data() {
    return {
      fooVal: '',
    };
  },
};
</script>
