<template>
  <div class="ComTam2-nava">
    <div class="ComTam2-nav">
      <h1>{{ title1 }}</h1>
      <hr class="we" />
      <h2>{{ title2 }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam2",
  data: function () {
    return {
      title1: "CRUCIO",
      title2: "POWERFUL WEBSITES",
    };
  },
};
</script>

<style scoped>
.ComTam2-nava {
  background: #000000;
  height: 790px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.ComTam2-nav {
  color: #ffffff;
  text-align: center !important;
  margin-top: 290px;
}
.ComTam2-nava h1 {
  font-size: 70px;
  margin-bottom: 10px;
}
.ComTam2-nava h2 {
  font-size: 50px;
  margin-top: 10px;
  font-weight: 100;
}
</style>
