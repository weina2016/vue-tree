<template>
  <!--  <div class="home">-->
  <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
  <!--  </div>-->
  <ConditionGroup
    :operator="conditionTree.operator"
    :children="conditionTree.children"
    :id="conditionTree.id"
    @update:children="refreshChildren"
  />
  <div>{{ conditionTree }}</div>
</template>

<script>
// @ is an alias to /src
import ConditionGroup from "@/components/ConditionGroup";

export default {
  name: "HomeView",
  components: {
    ConditionGroup,
  },
  data() {
    return {
      conditionTree: {
        id: 1,
        kind: "group",
        operator: "&",
        children: [
          { condition: "1==1", kind: "child", id: 1 },
          {
            id: 2,
            kind: "group",
            operator: "&",
            children: [{ condition: "1==1", kind: "child", id: 3 }],
          },
        ],
      },
    };
  },
  methods: {
    refreshChildren(newChildren) {
      this.conditionTree.children = newChildren;
    },
  },
};
</script>
