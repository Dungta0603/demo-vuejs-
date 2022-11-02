<template>
  <div class="ComTam8">
    <div
      class="ComTam8-nav1"
      v-for="(ComTam8, index) in ComTam8"
      v-bind:key="index"
    >
      <h1>{{ ComTam8.titlle1 }}</h1>
      <h2>{{ ComTam8.titlle2 }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam8",
  data: function () {
    return {
      ComTam8: [
        {
          id: "1",
          titlle1: "150",
          titlle2: "Clients",
        },
        {
          id: "1",
          titlle1: "620",
          titlle2: "Projects",
        },
        {
          id: "1",
          titlle1: "25",
          titlle2: "Awards",
        },
        {
          id: "1",
          titlle1: "940",
          titlle2: "Coffee",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam8 {
  background-color: rgba(160, 32, 246, 1);
  height: 360px;
  display: flex;
  justify-content: center;
}
.ComTam8-nav1 {
  height: 360px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 15px;
  margin: 0 15px;
}
.ComTam8-nav1 h1 {
  color: #fff;
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 10px;
  line-height: 2;
}
.ComTam8-nav1 h2 {
  font-size: 1.75rem;
  color: #fff;
  letter-spacing: 3px;
  line-height: 1.5;
}
</style>
