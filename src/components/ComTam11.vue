<template>
  <div id="ComTam11">
    <div
      v-for="(ComTam11, index) in ComTam11"
      v-bind:key="index"
      class="ComTam11-nav"
    >
      <img :src="ComTam11.imga" :alt="ComTam11.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam11",
  data: function () {
    return {
      ComTam11: [
        {
          id: "img1",
          imga: require("../assets/img/logo-chentri/logo-client1.png"),
        },
        {
          id: "img2",
          imga: require("../assets/img/logo-chentri/logo-client2.png"),
        },
        {
          id: "img3",
          imga: require("../assets/img/logo-chentri/logo-client3.png"),
        },
        {
          id: "img4",
          imga: require("../assets/img/logo-chentri/logo-client4.png"),
        },
        {
          id: "img5",
          imga: require("../assets/img/logo-chentri/logo-client5.png"),
        },
        {
          id: "img6",
          imga: require("../assets/img/logo-chentri/logo-client6.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#ComTam11 {
  background-color: rgb(247, 247, 247);
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ComTam11-nav {
  width: 100px;
  height: 100px;
  margin: 50px;
}
.ComTam11-nav img {
  width: 100px;
  height: 100px;
}
</style>
