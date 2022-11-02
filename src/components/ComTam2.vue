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
  font-size: 100px;
  font-weight: 600;
  letter-spacing: 15px;
  margin-bottom: 10px;
  animation: ComTam1a 3s infinite;
}
.ComTam2-nava h2 {
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 20px;
  animation: ComTam1b 3s infinite;
}
@keyframes ComTam1a {
  0% {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 2;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ComTam1b {
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 2;
    transform: translate3d(0, 0, 0);
  }
}
</style>
