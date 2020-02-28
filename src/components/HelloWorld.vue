<template>
  <div class="dragTree">
    <div id="dragTree">
      <div class="dragTreeItem" v-for="(item,key) in treeData" :key="key">
        <p>{{item.name}}</p>
        <ul id="dragTreechild" v-if="(item.treeNode == 1) && item.children.length !==0">
          <li v-for="(chid,index) in item.children" :key="index">{{chid.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Sortable from "sortablejs";
import treeData from "./data.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      treeData
    };
  },
  mounted() {
    let dragTree = document.getElementById("dragTree");
    let dragTreechild = document.getElementById("dragTreechild");
    let sortable = new Sortable(dragTree, {
      group: "name",
      forceFallback: true
    });
    let sortable1 = new Sortable(dragTreechild, {
      group: "name",
      forceFallback: true
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dragTree {
  width: 322px;
  font-size: 14px;
  color: #1f2329;
  margin: 0 auto;
  #dragTree {
    ul,
    li,
    p {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    .dragTreeItem {
      width: 100%;
      min-height: 40px;
      padding-top: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
