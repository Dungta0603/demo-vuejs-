<template>
  <div class="ComTam5">
    <div class="ComTam5-SERVICES">
      <h1>{{ title1 }}</h1>
      <hr class="we" />
      <h2>
        {{ title2 }}
      </h2>
    </div>
    <div class="ComTam5-logo">
      <div class="ComTam5-logo-nav1">
        <div class="logo" v-for="(conta5, index) in conta5" v-bind:key="index">
          <font-awesome-icon :icon="conta5.titleg2" />
          <h1>{{ conta5.titleg1 }}</h1>
        </div>
      </div>
      <div class="ComTam5-logo-nav2">
        <div
          class="logo"
          v-for="(conta5a, index) in conta5a"
          v-bind:key="index"
        >
          <font-awesome-icon :icon="conta5a.titlega2" />
          <h1>{{ conta5a.titlega1 }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam5",
  data: function () {
    return {
      title1: "SERVICES",
      title2:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmo tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex eacommodi consequat. Quis aute iure reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecatcupiditat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.",
      conta5: [
        { id: "1", titleg1: "WEB DESIGN", titleg2: ["fas", "desktop"] },
        { id: "2", titleg1: "BRAND DESIGN", titleg2: ["far", "images"] },
        { id: "3", titleg1: "UI/UX DESIGN", titleg2: ["fas", "keyboard"] },
        { id: "4", titleg1: "GRAPHIC DESIGN", titleg2: ["fas", "palette"] },
      ],
      conta5a: [
        { id: "5", titlega1: "PHOTOGRAPHY", titlega2: ["fas", "camera"] },
        { id: "6", titlega1: "VIDEO EDITING", titlega2: ["fas", "video"] },
        {
          id: "7",
          titlega1: "DATA ANALYSIS",
          titlega2: ["fas", "wave-square"],
        },
        { id: "8", titlega1: "CLIENT ASSISTANCE", titlega2: ["fas", "user"] },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam5 {
  height: 790px;
  margin-top: 40px;
}
.ComTam5-SERVICES {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
}
.ComTam5-SERVICES h1 {
  letter-spacing: 5px;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  color: rgb(119 119 119);
  margin-bottom: 20px;
}
.ComTam5-SERVICES h2 {
  width: 1100px;
  font-size: 14px;
  font-weight: 300;
  line-height: 2;
  letter-spacing: 1px;
  margin: 20px 0 20px 0;
}
.ComTam5-logo-nav1,
.ComTam5-logo-nav2 {
  display: flex;
  justify-content: center;
  margin: 50px;
}
.logo {
  color: var(--primary-color);
  font-size: 50px;
  margin: 30px 50px 0 50px;
  text-align: center;
}
.logo h1 {
  font-weight: 500;
  line-height: 1.2;
  color: rgb(17 17 17);
  text-align: center;
  letter-spacing: 1px;
  font-size: 1.5rem;
}
</style>
