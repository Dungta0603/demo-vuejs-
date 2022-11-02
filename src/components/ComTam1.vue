<template>
  <div class="ComTam1-nava">
    <div class="nava1">
      <img src="../assets/img/img1.jpg" />
    </div>
    <div class="nava2">
      <ul class="nava2-contem">
        <li v-for="(conta, index) in conta" v-bind:key="index">
          <a href=""> {{ conta.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam1 ",
  data: function () {
    return {
      conta: [
        {
          id: "1 ",
          title: "HOME",
        },
        {
          id: "2 ",
          title: "ABOUT",
        },
        {
          id: "3 ",
          title: "SERVIES",
        },
        {
          id: "4 ",
          title: "TEAM",
        },
        {
          id: "5 ",
          title: "PORTFOLIO",
        },
        {
          id: "6 ",
          title: "BLOG",
        },
        {
          id: "7 ",
          title: "CONTACT",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam1-nava {
  background: #000000;
  display: inline-block;
  height: 100px;
  width: 100%;
  position: fixed;
  z-index: 99999;
}
.nava1,
img {
  height: 100px;
  width: 300px;
  display: inline-block;
}
.nava2 {
  float: right;
  width: 700px;
  height: 100px;
  display: inline-block;
  line-height: 100px;
}
.nava2-contem,
li {
  display: inline-block;
}
.nava2-contem a {
  text-decoration: none;
  color: #ffffff;
  font-size: 15px;
  margin: 0 10px 0 10px;
}
</style>
