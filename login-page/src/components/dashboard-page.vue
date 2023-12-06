<script>
import * as data from "/src/items.js";
export default {
  name: "dashboard",
  components: {},
  data: function () {
    return {
      filteredItems: [],
      searchPayload: "",
    };
  },
  watch: {
    searchPayload: function () {
      this.filteredItems = data.items.filter((item) =>
        item.title.toLowerCase().includes(this.searchPayload.toLowerCase())
      );
    },
  },
  created: function () {
    this.filteredItems = data.items;
  },
};
</script>

<template>
  <!-- Title-->
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <div class="nexa-font text-color-white">
          <div class="typewriter-still">
            <a style="text-decoration: none; color: white" href="dashboard">
              <h1>NoteTaker</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Search -->
  <div class="dash">
    <div class="nexa-font container mt-5 mx-auto text-white text-center">
      <h1>Search</h1>
      <input
        type="search"
        class="search form-control mx-auto bg-transparent underline text-white"
        placeholder="Search"
        id="search"
        style="width: 30%"
        v-model="searchPayload"
      />
    </div>
    <div class="items-wrapper" id="items-wrapper">
      <div class="item-card" v-for="item in filteredItems" :key="item.code">
        <h4 class="item-card-title">{{ item.title }}</h4>
        <h5 class="item-card-code">{{ item.code }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.items-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* item card */
.item-card {
  min-width: 160px;
  min-height: 180px;
  background-color: #f6f6f6;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 0;
}

.item-card-title {
  font-weight: 500;
  color: #464141;
  margin: 15px auto 15px auto;
  text-transform: lowercase;
  text-transform: capitalize;
}

.item-card-code {
  color: #36b16c;
  margin: 15px auto 0 auto;
}
</style>
