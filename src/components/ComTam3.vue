<template>
  <div class="ComTam3">
    <div class="ComTam3-nava">
      <h1>{{ title1 }}<strong :style="{ color: clolor }">CRUCIO</strong></h1>
      <h2>{{ title2 }}</h2>
      <h3>
        {{ title3 }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam3",
  data: function () {
    return {
      title1: "WELCOME TO",
      titleStrong: " CRUCIO",
      title2: "WE CREATE AWESOME WEBSITES",
      title3:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat. Quis aute iure reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit animid est laborum. ",
      clolor: "  rgba(160, 32, 246, 1)",
    };
  },
};
</script>

<style>
.ComTam3 {
  height: 700px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ComTam3-nava {
  text-align: center;
  line-height: 2;
  font-weight: 300px;
  width: 1400px;
}
.ComTam3-nava h1,
strong {
  margin-bottom: 30px;
  font-size: 45px;
  font-weight: 90;
  word-spacing: 20px;
}
.ComTam3-nava h2 {
  font-size: 35px;
  margin-bottom: 50px;
  word-spacing: 10px;
  letter-spacing: 10px;
  font-weight: 600;
}
.ComTam3-nava h3 {
  opacity: 0.7;
  line-height: 2;
  font-weight: 300;
  letter-spacing: 1px;
  font-style: 25px;
}
strong {
  font-weight: bolder;
  margin: 20px;
}
</style>
