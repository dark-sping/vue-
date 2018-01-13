<template>
  <div class="login">
    <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="uname">
        <el-input type="name" v-model="uname" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="登录密码" prop="upwd">
        <el-input type="password" v-model="upwd" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >登陆</el-button>
        <el-button >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  height: 200px;
  position: relative;
  top: 25%;
  transform: translate(125%);
  background-color: pink;
}
</style>