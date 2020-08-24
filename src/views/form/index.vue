<template>
  <div class="app-container">
     <el-transfer v-model="value" :data="data"></el-transfer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableList: []
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

