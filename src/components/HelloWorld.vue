<template>
  <div class="dragTree">
    <div id="dragTree">
      <div class="dragTreeItem" v-for="(item,key) in treeData" :key="key">
        <div v-if="item.treeNode==1" class="item-head">
          <div class="item-icon" @click="showTreeItem(item)">
            <svg
              width="16"
              height="16"
              v-show="item.children && !!item.children.length"
              :class="[item.open ?'p-tree-icon-rotate':'p-tree-icon-svg']"
            >
              <path
                fill="#C3C6CB"
                d="M7.364 6.479c.351-.423.928-.416 1.273 0l2.287 2.754c.351.424.19.767-.369.767h-5.11c-.554 0-.713-.35-.368-.767L7.364 6.48z"
              />
            </svg>
          </div>
          <div class="checkItem" @click="checkItem(item)">
            <a-checkbox :key="key" :checked="item.checked"></a-checkbox>
            <p>{{item.name}}</p>
            <span>{{item.children? item.children.length :0}}</span>
          </div>
        </div>
        <div v-else class="item-head-child" @click="checkItem(item)">
          <span class="status"></span>
          <a-checkbox :key="key" :checked="item.checked"></a-checkbox>
          <p>{{item.name}}</p>
          <span class="text-1">{{item.type}}</span>
          <span class="text-2">分向</span>
        </div>
        <ul
          id="dragTreechild"
          class="item-body"
          v-show="item.open"
          v-if="(item.treeNode == 1) && item.children.length !==0"
        >
          <li @click="checkItem(chid,item)" v-for="(chid,index) in item.children" :key="index">
            <span class="status"></span>
            <a-checkbox :key="key" :checked="chid.checked"></a-checkbox>
            <p>{{chid.name}}</p>
            <span class="text-1">{{chid.type}}</span>
            <span class="text-2">分向</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="data">
      {{treeData}}
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
      forceFallback: true,
      onAdd: function(/**Event*/ evt) {
        console.log("onAdd", evt);
        // same properties as onEnd
      },

      // 列表内元素顺序更新的时候触发
      onUpdate: function(/**Event*/ evt) {
        console.log("onUpdate", evt);
        // same properties as onEnd
      },
      // 结束拖拽
      onEnd: function(/**Event*/ evt) {
        var itemEl = evt.item; // dragged HTMLElement
        evt.to; // target list
        evt.from; // previous list
        evt.oldIndex; // element's old index within old parent
        evt.newIndex; // element's new index within new parent
        evt.clone; // the clone element
        evt.pullMode; // when item is in another sortable: `"clone"` if cloning, `true` if moving
        console.log( evt.to,evt.from)
      }
    });
  },
  methods: {
    // 点击打开树状图
    showTreeItem(item) {
      if (item.treeNode == 1 && item.children.length !== 0) {
        item.open = !item.open;
      }
    },
    // 点击check选中
    checkItem(item, parent = null) {
      this.$set(item, "checked", !item.checked);
      if (item.children && !!item.children.length) {
        item.children.map(i => {
          i.checked = item.checked;
        });
      } else if (parent) {
        this.$set(parent, "checked", true);
        parent.children.forEach((item, key) => {
          if (!item.checked) {
            this.$set(parent, "checked", false);
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.dragTree {
  width: 322px;
  font-size: 14px;
  color: #1f2329;
  margin: 50px auto;
  border: 1px solid #ccc;
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
      .item-head {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .item-icon {
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .checkItem {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
          p {
            margin-left: 10px;
          }
          span {
            margin-left: 10px;
            background: #e4e5e7;
            padding: 0 4px 0 4px;
            border-radius: 4px;
          }
        }
        .p-tree-icon-svg {
          vertical-align: text-bottom;
          transform: rotate(90deg);
          transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
        }
        .p-tree-icon-rotate {
          transform: rotate(180deg);
          vertical-align: text-bottom;
          transition: transform 0.3s ease 0s, -webkit-transform 0.3s ease 0s;
        }
      }
      .item-head-child {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 24px;
        box-sizing: border-box;
        cursor: pointer;
        .status {
          background: #8ee085;
          border-radius: 50% 50%;
          width: 12px;
          height: 12px;
          display: block;
          margin-right: 8px;
        }
        p {
          margin: 0 8px 0 8px;
        }
        .text-1 {
          margin-left: 10px;
          background: #8d8e91;
          padding: 0 4px 0 4px;
          border-radius: 4px;
        }
        .text-2 {
          margin-left: 10px;
          background: #e1f2ff;
          padding: 0 4px 0 4px;
          border-radius: 4px;
        }
      }
      .item-body {
        box-sizing: border-box;
        li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          height: 40px;
          padding-left: 34px;
          box-sizing: border-box;
          cursor: pointer;
          .status {
            background: #8ee085;
            border-radius: 50% 50%;
            width: 12px;
            height: 12px;
            display: block;
            margin-right: 8px;
          }
          p {
            margin: 0 8px 0 8px;
          }
          .text-1 {
            margin-left: 10px;
            background: #8d8e91;
            padding: 0 4px 0 4px;
            border-radius: 4px;
          }
          .text-2 {
            margin-left: 10px;
            background: #e1f2ff;
            padding: 0 4px 0 4px;
            border-radius: 4px;
          }
        }
        li:hover {
          background: #eff0f1;
        }
      }
    }
    .dragTreeItem:hover {
      background: #e1f2ff;
      p {
        color: #0491ff;
      }
    }
  }
}
</style>
