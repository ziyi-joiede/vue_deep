<template>
  <div id="test">
    {{ text }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "abc",
    };
  },
};
</script>
<style lang="css">
#test {
  color: red;
}
</style>
