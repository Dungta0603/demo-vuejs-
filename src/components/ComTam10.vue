<template>
  <div class="ComTam10">
    <h1>{{ title1 }}</h1>
    <hr style="background-color: #fff" class="we" />
    <div class="ComTam10-nav">
      <p>
        {{ title2 }}
      </p>
      <p class="mini-text">{{ title3 }} -</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam10 ",
  data: function () {
    return {
      title1: "TESTIMONIALS",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat. Quis aute iure reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.",
      title3: "- John K. ",
    };
  },
};
</script>

<style scoped>
.ComTam10 {
  height: 500px;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ComTam10 h1 {
  color: #fff;
  margin: 25px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 5px;
}
.ComTam10-nav {
}
.ComTam10-nav p {
  margin: 30px;
  width: 1000px;
  color: #fff;
  text-align: center;
}
.mini-text {
  letter-spacing: 0;
  line-height: 1;
  font-size: 12px;
}
</style>
