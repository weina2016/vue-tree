<template>
  <p>{{ tempCondition.condition }}</p>
  <button @click="deleteMyself">移除</button>
</template>

<script>
export default {
  name: "SingleCondition",
  props: ["condition", "id"],
  computed: {
    tempCondition: {
      get() {
        return this.condition;
      },
      set(value) {
        this.$emit("update:condition", value);
      },
    },
  },
  methods: {
    deleteMyself() {
      this.$emit("delete-child", this.id);
    },
  },
};
</script>

<style scoped></style>
