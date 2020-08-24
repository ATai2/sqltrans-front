<template>
  <div class="dashboard-container">
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="driver">
    <el-input v-model="form.driver"></el-input>
  </el-form-item>

  <el-form-item label="url">
    <el-input v-model="form.url"></el-input>
  </el-form-item>
    <el-form-item label="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="pwd">
    <el-input v-model="form.pwd"></el-input>
  </el-form-item>



    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
 data(){
   return {
      form: {
          name: '',
          url: '',
          driver: '',
          pwd: '',
        }
   }
 },
 mounted(){
   this.form.name=   localStorage.setItem("sqltrans.name" );
   this.form.url= localStorage.setItem("sqltrans.url" );
   this.form.driver=  localStorage.setItem("sqltrans.driver" );
   this.form.pwd=   localStorage.setItem("sqltrans.pwd" );
 },
 beforeRouteLeave(to,from,next){
   localStorage.setItem("sqltrans.name", this.form.name);
    localStorage.setItem("sqltrans.url", this.form.url);
     localStorage.setItem("sqltrans.driver", this.form.driver);
      localStorage.setItem("sqltrans.pwd", this.form.pwd);
      next()
 }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
 
}
 .dashboard-container{
    width: 50%;
  }
</style>
