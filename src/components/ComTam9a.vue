<template>
  <div class="ComTam9a">
    <h1>{{ titil1 }}</h1>
    <button>{{ titil2 }}</button>
  </div>
</template>

<script>
export default {
  name: "ComTam9a",
  data: function () {
    return {
      titil1: "WANT TO DISCUSS YOUR NEW PROJECT?",
      titil2: "CONTACT US",
    };
  },
};
</script>

<style scoped>
.ComTam9a {
  height: 350px;
  background-color: rgba(160, 32, 246, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.ComTam9a h1 {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1.5;
}
.ComTam9a button {
  border: 3px solid #fff;
  background-color: rgba(160, 32, 246, 1);
  color: #fff;
  letter-spacing: 3px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  margin-top: 50px;
  animation: hitv2 3s infinite;
}
button:hover {
  background-color: #fff;
  color: rgba(160, 32, 246, 1);
}
</style>
