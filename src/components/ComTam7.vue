<template>
  <div class="ComTam7">
    <h1>{{ title }}</h1>
    <hr class="we" />
    <div class="ComTam7-img">
      <img
        :src="Coom.imga"
        v-for="(Coom, index) in Coom"
        v-bind:key="index"
        class="imgf"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam7",
  data: function () {
    return {
      title: "OUR TEAM",
      Coom: [
        {
          id: "1",
          imga: require("../assets/img/img4.jpeg"),
        },
        {
          id: "2",
          imga: require("../assets/img/img3.jpeg"),
        },
        {
          id: "3",
          imga: require("../assets/img/img2.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam7 {
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ComTam7 h1 {
  letter-spacing: 5px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 30px;
}
.ComTam7-img {
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  margin: 30px 20px 20px 20px;
}
.imgf {
  margin: 20px;
  width: 300px;
  height: 400px;
  object-fit: cover;
}
</style>
