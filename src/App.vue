<template>
  <div id="add">
    <ComTam1 />
    <ComTam2 />
    <ComTam3 />
    <ComTam4 />
    <ComTam5 />
    <ComTam6 />
    <ComTam7 />
    <ComTam8 />
    <ComTam9 />
    <ComTam9a />
    <ComTam10//>
    <ComTam11 />
    <ComTam12 />
    <ComTam13 />
  </div>
</template>

<script>
import ComTam1 from "./components/ComTam1.vue";
import ComTam2 from "./components/ComTam2.vue";
import ComTam3 from "./components/ComTam3.vue";
import ComTam4 from "./components/ComTam4.vue";
import ComTam5 from "./components/ComTam5.vue";
import ComTam6 from "./components/ComTam6.vue";
import ComTam7 from "./components/ComTam7.vue";
import ComTam8 from "./components/ComTam8.vue";
import ComTam9 from "./components/ComTam9.vue";
import ComTam9a from "./components/ComTam9a.vue";
import ComTam10 from "./components/ComTam10.vue";
import ComTam11 from "./components/ComTam11.vue";
import ComTam12 from "./components/ComTam12.vue";
import ComTam13 from "./components/ComTam13.vue";
export default {
  name: "App",
  components: {
    ComTam1,
    ComTam2,
    ComTam3,
    ComTam4,
    ComTam5,
    ComTam6,
    ComTam7,
    ComTam8,
    ComTam9,
    ComTam9a,
    ComTam10,
    ComTam11,
    ComTam12,
    ComTam13,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
}
:root {
  --text-color: #777;
  --primary-color: #ad00ff;
  --secondary-color: #56007f;
  --hover-color: #c64cff;
  --light-color: #f7f7f7;
  --dark-color: #111;
}
hr.we {
  height: 4px;
  width: 80px;
  background-color: rgba(160, 32, 246, 1);
  display: inline-block;
  border: none !important ;
  margin: 20px;
}
</style>
