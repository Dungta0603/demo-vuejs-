<template>
  <div class="ComTam6">
    <div class="ComTam6-nav">
      <h1>{{ tile1 }}</h1>
      <div class="imfko">
        <a href=""> {{ tile2 }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam6",
  data: function () {
    return {
      tile1: "WE CREATE AWESOME PROJECTS",
      tile2: "GET STARTED",
    };
  },
};
</script>

<style scoped>
.ComTam6 {
  height: 500px;
}
.ComTam6-nav {
  background-color: var(--primary-color);
  height: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.ComTam6-nav h1 {
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  letter-spacing: 10px;
  line-height: 2;
  margin-bottom: 30px;
}
.imfko {
  border: 1px solid #fff;
  width: 200x;
  height: 50px;
  display: flex;
  align-items: center;
}
.imfko a {
  color: var(--light-color);
  text-decoration: none;
  padding: 40px;
  letter-spacing: 3px;
}
</style>
