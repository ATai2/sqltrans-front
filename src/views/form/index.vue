<template>
  <div class="app-container">
     <el-transfer v-model="value" :data="data"></el-transfer>

  </div>
</template>

<script>
 
export default {
  data(){
   return {
      form: {
          name: 'SA',
          url: 'jdbc:sqlserver://localhost:1433;databaseName=paas',
          driver: 'com.microsoft.sqlserver.jdbc.SQLServerDriver',
          pwd: 'asdfF@1234',
        }
   }
 },
 mounted(){
   this.form.name=   localStorage.getItem("sqltrans.name" );
   this.form.url= localStorage.getItem("sqltrans.url" );
   this.form.driver=  localStorage.getItem("sqltrans.driver" );
   this.form.pwd=   localStorage.getItem("sqltrans.pwd" );

    getTables()
 },
 
  methods: {

    getTables(){
this.$api.getTables(this.form).then(res=>{
  console.log(res)
})

    },
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

