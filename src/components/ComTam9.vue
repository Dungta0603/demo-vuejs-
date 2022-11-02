<template>
  <div class="ComTam9">
    <div class="ComTam9-nav1">
      <h1>OUR PORTFOLIO</h1>
      <hr class="we" />
      <div class="ComTam9-contona">
        <a v-for="(ComTam9a, index) in ComTam9a" v-bind:key="index" href=""
          >{{ ComTam9a.title }}
        </a>
      </div>
    </div>
    <div class="ComTam9-nav2">
      <div
        v-for="(ComTam9b, index) in ComTam9b"
        v-bind:key="index"
        class="project"
      >
        <img :src="ComTam9b.imga" alt="img" />
      </div>
    </div>
    <div class="ComTam9-nav3">
      <button class="bth-ComTam9-nav3">Load more</button>
    </div>
    <div class="ComTam9-nav4">
      <h1>Subscribe To Our Newsletter</h1>
      <input
        type="text"
        placeholder="Enter your email..."
        class="text-ComTam9-nav4-text"
      />
      <button class="bth-ComTam9-nav4">SUBSCRIBE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam9",
  data: function () {
    return {
      ComTam9a: [
        { id: "1", title: "All" },
        { id: "2", title: "Graphic Design" },
        { id: "3", title: "Web Design" },
        { id: "4", title: "Web Development " },
      ],
      ComTam9b: [
        {
          id: "1",
          imga: require("../assets/img/img_OUR PORTFOLIO/work1.jpeg"),
        },
        {
          id: "2",
          imga: require("../assets/img/img_OUR PORTFOLIO/work2.jpeg"),
        },
        {
          id: "3",
          imga: require("../assets/img/img_OUR PORTFOLIO/work3.jpeg"),
        },
        {
          id: "4",
          imga: require("../assets/img/img_OUR PORTFOLIO/work4.jpeg"),
        },
        {
          id: "5",
          imga: require("../assets/img/img_OUR PORTFOLIO/work5.jpeg"),
        },
        {
          id: "6",
          imga: require("../assets/img/img_OUR PORTFOLIO/work6.jpeg"),
        },
        {
          id: "7",
          imga: require("../assets/img/img_OUR PORTFOLIO/work7.jpeg"),
        },
        {
          id: "8",
          imga: require("../assets/img/img_OUR PORTFOLIO/work8.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam9 {
  height: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.ComTam9-nav1 {
  margin-top: 50px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.ComTam9-contona {
  height: 300px;
  display: flex;
  align-items: center;
}
.ComTam9-nav1 h1 {
  margin: 15px;
  letter-spacing: 5px;
  font-size: 25px;
  color: rgb(17 17 17);
  font-weight: 500;
  line-height: 1.2;
}
.ComTam9-contona a {
  text-decoration: none;
  margin: 20px;
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
  color: rgb(119, 119, 119);
}
.ComTam9-nav2 {
  display: flex;
  flex-wrap: wrap;
}

.project img {
  width: 360px;
  height: 230px;
}
.we {
  margin: 20px;
}
.ComTam9-nav3 {
  background-color: rgb(247 247 247);
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
}
.bth-ComTam9-nav3 {
  border: 3px solid rgb(17 17 17);
  letter-spacing: 3px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}
.ComTam9-nav4 {
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.ComTam9-nav4 h1 {
  color: #333;
  margin-bottom: 50px;
  letter-spacing: 3px;
  font-size: 1.75rem;
  font-weight: 500;
}
.text-ComTam9-nav4-text {
  width: 80%;
  max-width: 800px;
  text-align: center;
  border: 0;
  border-bottom: 1px solid rgba(30, 30, 30, 0.3);
  padding: 10px 20px;
}
.bth-ComTam9-nav4 {
  margin-top: 50px;
  color: rgba(160, 32, 246, 1);
  border: 3px solid rgba(160, 32, 246, 1);
  background-color: #fff;
  letter-spacing: 3px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
