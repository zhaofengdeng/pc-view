<template>
  <div>
    <v-menu select="demo"></v-menu>
    <div class="search_form">
      <div class="head">
        <v-search-input label="账号" v-model="searchModel.account"></v-search-input>
        <v-search-select
          label="下拉列表"
          optionKey="id"
          optionLabel="name"
          v-model="searchModel.name"
          :objects="selects"
        ></v-search-select>
      </div>
    </div>
    <button type="primary" @click="showAlert">弹出框</button>
    <button type="primary" @click="showConfirm">确认框</button>
  </div>
</template>
  <script>
export default {
  name: "HelloWorld",
  data() {
    return {
      searchModel: {},
      selects: [
        { id: "1", name: "测试1" },
        { id: "2", name: "测试2" },
        { id: "3", name: "测试3" }
      ],
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    showAlert() {
      this.alert("alert 就是这么使用的").then(res => {
        console.log(res);
        console.log("=============ds");
      });
    },
    showConfirm() {
      this.confirm("确认是否删除").then(res => {
        console.log(res);
      });
    }
  }
};
</script>