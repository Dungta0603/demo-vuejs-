<template>
  <div class="ComTam4">
    <div
      v-for="(conta4, index) in conta4"
      v-bind:key="index"
      class="ComTam4-nava"
      :style="{ backgroundColor: conta4.color }"
    >
      <h1>{{ conta4.title1 }}</h1>
      <h2>
        {{ conta4.title2 }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam4",
  data: function () {
    return {
      conta4: [
        {
          id: "1",
          title1: "RESPONSIVE",
          title2:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat.",
          color: "rgba(158, 31, 246, 1)",
        },
        {
          id: "2",
          title1: "CUSTOMIZABLE",
          title2:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat.",
          color: "rgba(119, 21, 184, 1)",
        },
        {
          id: "3",
          title1: "MODERN",
          title2:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat.",
          color: " rgba(78, 10, 122, 1)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam4 {
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
.ComTam4-nava {
  width: 480px;
  height: 330px;
  padding: 80px;
}
.ComTam4-nava h1 {
  font-weight: 500;
  line-height: 1.2;
  color: var(--light-color);
  letter-spacing: 1px;
  font-size: 1.75rem;
  margin-bottom: 20px;
}
.ComTam4-nava h2 {
  font-size: 13px;
  color: var(--light-color);
  line-height: 1.5;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
