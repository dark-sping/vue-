<template>
  <div>

  </div>
</template>

<script>
  export default {
    export default {
      data() {
 
        // 校验账号, 将来配置到下面的validator配置项
        function unameFn(rule, value, callback) {
            if(value == '') {
                callback(new Error('账号不能为空'))
            }else {
                callback();
            }
        }
 
        // 校验密码, 将来配置到下面的validator配置项
        function upwdFn(rule, value, callback) {
            if(value == '') {
                callback(new Error('密码不能为空'))
            }else {
                callback();
            }
        }
        return {
            // 表单提交的数据
            formLabelAlign: {
                uname: '',
                upwd: ''
            },
 
            // 表单校验规则
            rules: {
                uname: [ 
                    {validator: unameFn, trigger: 'blur'} 
                ],
                upwd: [ 
                    {validator: upwdFn, trigger: 'blur'} 
                ]
                   }
    },
    },   
  
    // 组件初始化完毕, 自动调用
    created() {
        // 测试
        this.$http.get(this.$api.islogin).then(res => {
            console.log(res.data);
        });
    }
    methods: {
 
        // 登陆
        login() {
            this.$http.post(this.$api.login, this.formLabelAlign).then(res => {
                if(res.data.status == 0) {
                    this.$alert('登陆成功, 马上跳转到首页');
                }else {
                    this.$alert(res.data.message);
                }
            });
        },
 
        // 表单提交
        submitForm(formName) {
            this.$refs[formName].validate(vali => {
                if(vali) {
                    this.login();
                }else {
                    this.$alert('哥们! 不带这么玩的');
                }
            });
        }
    },
      }
  }
</script>

<style scoped>

</style>