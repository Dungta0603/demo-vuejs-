<template>
  <div class="ComTam7">
    <h1>{{ title }}</h1>
    <hr class="we" />
    <div class="ComTam7-nac">
      <div v-for="(Coom, index) in Coom" v-bind:key="index" class="ComTam7-img">
        <img :src="Coom.imga" class="imgf" />
        <div class="Mark">
          <h2>{{ Coom.title1 }}</h2>
          <h3>{{ Coom.title2 }}</h3>
          <i><font-awesome-icon :icon="Coom.icon1" /></i>
          <i><font-awesome-icon :icon="Coom.icon2" /></i>
          <i><font-awesome-icon :icon="Coom.icon3" /></i>
          <i><font-awesome-icon :icon="Coom.icon4" /></i>
        </div>
      </div>
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
          title1: "SAMANTA L.",
          title2: "Architect",
          icon1: ["fab", "square-facebook"],
          icon2: ["fab", "twitter"],
          icon3: ["fab", "square-instagram"],
          icon4: ["fab", "linkedin-in"],
        },
        {
          id: "2",
          imga: require("../assets/img/img3.jpeg"),
          title1: "SAMANTA L.",
          title2: "Designer",
          icon1: ["fab", "square-facebook"],
          icon2: ["fab", "twitter"],
          icon3: ["fab", "square-instagram"],
          icon4: ["fab", "linkedin-in"],
        },
        {
          id: "3",
          imga: require("../assets/img/img2.jpeg"),
          title1: "SAMANTA L.",
          title2: " Planner",
          icon1: ["fab", "square-facebook"],
          icon2: ["fab", "twitter"],
          icon3: ["fab", "square-instagram"],
          icon4: ["fab", "linkedin-in"],
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
.ComTam7-nac {
  display: flex;
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
  position: relative;
}
.ComTam7-img :hover.Mark {
  opacity: 0.9;
}
.ComTam7-img:hover h2 {
  opacity: 0.9;
  animation: hu2 1s;
}
.ComTam7-img:hover h3 {
  opacity: 0.9;
  animation: hu3 1s;
}
:hover i {
  opacity: 0.9;
  animation: hui 1s;
}
.imgf {
  margin: 20px;
  width: 300px;
  height: 400px;
  object-fit: cover;
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
.Mark {
  opacity: 0;
  position: absolute;
  width: 300px;
  height: 400px;
  overflow: hidden;
  text-align: center;
  top: 0;
  left: 0;
  background-color: #ad00ff;
  margin-top: 20px;
}
h2 {
  margin: 20px 40px 0 40px;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 25px;
  padding-top: 120px;
}
h3 {
  font-size: 15px;
  position: relative;
  color: #fff;
  text-align: center;
  line-height: 2;
}
i {
  font-size: 18px;
  display: inline-block;
  padding: 20px 15px;
  color: #fff;
}
@keyframes hu2 {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes hu3 {
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes hui {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 100%);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
</style>
