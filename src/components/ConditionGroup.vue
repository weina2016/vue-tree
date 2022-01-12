<template>
  <p>{{ operator }}</p>
  <button @click="deleteMyself">删除组</button>
  <button @click="addCondition">添加条件</button>
  <button @click="addGroup">添加条件组</button>
  <div v-for="child in tempChildren" :key="child">
    <SingleCondition
      v-if="child.kind === 'child'"
      :id="child.id"
      :condition="child"
      @delete-child="deleteChild"
    />
    <ConditionGroup
      v-else
      :operator="child.operator"
      :children="child.children"
      :id="child.id"
      @delete-group="deleteGroup"
      @update:children="refreshChildren"
    />
  </div>
</template>

<script>
import SingleCondition from "@/components/SingleCondition";

export default {
  name: "ConditionGroup",
  emits: ["delete-group", "delete-child"],
  components: { SingleCondition },
  props: ["operator", "children", "id"],
  computed: {
    tempChildren: {
      get() {
        return this.children;
      },
      set(value) {
        this.$emit("update:children", value, this.id);
      },
    },
  },
  methods: {
    refreshChildren(newChildren, childId) {
      this.tempChildren.forEach((child) => {
        if (child.id === childId) child.children = newChildren;
      });
    },
    deleteChild(childId) {
      this.tempChildren = this.tempChildren.filter(
        (child) => child.id !== childId
      );
    },

    deleteMyself() {
      this.$emit("delete-group", this.id);
    },

    deleteGroup(groupId) {
      this.tempChildren = this.tempChildren.filter(
        (child) => child.id !== groupId
      );
    },
    addCondition() {
      this.tempChildren.push({ id: 6, condition: "1111!== 33", kind: "child" });
    },
    addGroup() {
      this.tempChildren.push({
        id: 7,
        operator: "|",
        kind: "group",
        children: [],
      });
    },
  },
};
</script>

<style scoped></style>
