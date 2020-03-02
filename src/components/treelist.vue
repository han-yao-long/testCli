<template>
  <div>
    <ul>
      <li>
        <span @click="isshow()">{{treelist.name}}</span>
        <tree
          v-for="item in treelist.children"
          v-if="isFolder"
          v-show="open"
          :treelist="item"
          :key="item"
        ></tree>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tree",
  props: ["treelist"],
  data() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      return this.treelist.children;
    }
  },
  methods: {
    isshow() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    }
  }
};
</script>
<style lang="less">
    ul,
    li,
    p {
      padding: 0;
      margin: 0;
      list-style: none;
    }
</style>