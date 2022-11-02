<template>
  <div class="ComTam12">
    <h1>{{ tilh1 }}</h1>
    <hr class="we" />
    <div class="Comtam12-nav1">
      <div
        v-for="(ComTam12, index) in ComTam12"
        v-bind:key="index"
        class="ComTam12-nasa1"
      >
        <h2>{{ ComTam12.tilh2 }}</h2>
        <h3 :style="{ color: ComTam12.color }">
          {{ ComTam12.tilh3 }}
        </h3>
      </div>
    </div>
    <div class="ComTam12-nav2">
      <input type="text" placeholder="NAME*" class="ComTam12-nav2-text" />
      <input type="text" placeholder="email*" class="ComTam12-nav2-text" />
    </div>
    <div class="ComTam12-nav3">
      <input type="text" placeholder="MESSAGE*" class="ComTam12-nav3-text" />
      <button class="bth-ComTam12">SEND</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComTam12",
  data: function () {
    return {
      tilh1: "CONTACT",
      ComTam12: [
        { tilh2: "ADDRESS", tilh3: "123 Street, New York (USA)" },
        { tilh2: "PHONE", tilh3: "+123 456 789" },
        {
          tilh2: "EMAIL",
          tilh3: "info@myemail.com",
          color: " rgba(160, 32, 246, 1)",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ComTam12 {
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ComTam12 h1 {
  margin: 50px;
}
.ComTam12 .we {
  margin: 20px;
}
.Comtam12-nav1 {
  width: 1000px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  align-content: center;
}
.ComTam12-nasa1 {
  margin: 80px;
}
.ComTam12-nasa1 h2 {
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: 500;
  line-height: 1.2;
}
.ComTam12-nasa1 h3 {
  font-weight: 400;
  font-size: 12px;
  line-height: 2;
  letter-spacing: 1px;
  color: #333;
}
.ComTam12-nav2 {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin: 20px;
}
.ComTam12-nav2-text {
  border: 0;
  border-bottom: 1px solid rgba(30, 30, 30, 0.3);
  padding: 10px 20px;
  width: 500px;
  margin: 20px;
  outline: none;
}
.ComTam12-nav3 {
  margin-top: 100px;
  display: flex;
  border-bottom: 100px;
  flex-direction: column;
  align-items: flex-end;
  width: 1000px;
}
.ComTam12-nav3-text {
  width: 1000px;
  border: 0;
  border-bottom: 1px solid rgba(30, 30, 30, 0.3);
  padding: 10px 20px;
  margin: 20px;
  outline: none;
}
.bth-ComTam12 {
  width: 120px;
  float: right;
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 3px;
  padding: 10px 30px;
  color: rgb(173 0 255);
  border: 3px solid rgb(173 0 255);
  background-color: rgb(0 0 0 / 0%);
  margin-top: 30px;
}
.bth-ComTam12:hover {
  background-color: rgba(160, 32, 246, 1);
  color: #fff;
}
</style>
