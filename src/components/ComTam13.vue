<template>
  <div class="ComTam13">
    <img :src="imga" alt="img1" class="center-img1" />
    <div class="ComTam13-nav">
      <div
        class="ComTam13-icon"
        v-for="(ComTam13, index) in ComTam13"
        v-bind:key="index"
      >
        <font-awesome-icon :icon="ComTam13.icon" />
      </div>
    </div>
    <div class="ComTam13-nav2">
      <h1>© 2017. Crucio. All Rights Reserved.</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam13",
  data: function () {
    return {
      imga: require("../assets/img/img1.jpg"),
      ComTam13: [
        { id: "1", icon: ["fab", "square-facebook"] },
        { id: "1", icon: ["fab", "twitter"] },
        { id: "1", icon: ["fab", "square-instagram"] },
        { id: "1", icon: ["fab", "linkedin-in"] },
        { id: "1", icon: ["fab", "dribbble"] },
        { id: "1", icon: ["fab", "youtube"] },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam13 {
  height: 250px;
  background-color: #000000;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.ComTam13 img {
  height: 60px;
  width: 220px;
  margin-top: 10px;
}
.ComTam13-nav {
  color: #fff;
  font-size: 30px;
  display: flex;
  justify-content: center;
  margin: 30px;
}
.ComTam13-icon {
  margin: 20px 30px;
}
.ComTam13-nav2 {
  width: 100%;
  height: 100%;
  background-color: rgb(87, 0, 128);
}
.ComTam13-nav2 h1 {
  font-size: 11px;
  letter-spacing: 3px;
  padding-top: 12px;
  text-align: center;
  color: #fff;
  font-weight: 300;
  line-height: 2;
}
</style>
