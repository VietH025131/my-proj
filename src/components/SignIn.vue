<template>
    <div class="outer">
        <div class="log-in">
            <div><h1>Đăng nhập</h1></div>
            <form class="log-in-form" action="#">
                <div class="form-box">
                    <label for="acc-name">Tài khoản hoặc địa chỉ email</label>
                    <input type="text" class="main-input" id="acc-name">
                </div>
                <div class="form-box">
                    <label for="pass">Mật khẩu</label>
                    <input type="password" class="main-input" id="pass">
                </div>
                    <button><router-link to="/">ĐĂNG NHẬP</router-link></button> 
                <div class="other">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </form>
        </div>
    </div>
    
</template>
<script>
import { RouterLink } from 'vue-router';

export default{
    name: "SignIn",
    components: { RouterLink }
}
</script>
<style scoped lang="scss">
*{
    font-family: 'Fira Sans', sans-serif;
}
.outer{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-image: url(D:\Vuejs\demo\img\1.jpg);
    background-repeat: no-repeat;
    justify-content: center;
}
.main-input{
    width: 100%;
    max-width: 100%;
    cursor: pointer;
}

button{
    width: 100px;
    padding: 10px;
    margin-top: 5px;
    color: white;
    background-color:  #0dcaf0;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    border: 1px solid transparent;
    font-weight: bold;
    border-radius: 5px;
}
    button:hover{
        box-shadow: 0 1px 5px rgb(60,60,222,0.5);
        transition: color .5s, border .5s, background .5s, opacity .5s;
      }

a{
    text-decoration: none;
    color: #fff;
}
.log-in{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    box-sizing: border-box;
    padding: 0 30px 30px;
    position: relative;
    border: 2px solid rgb(255,255,255,0.5);
    background-color: rgb(255,255,255,0.3);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    box-shadow: 0 0px 40px rgb(60,60,222,0.3);
    align-items: center;
}
.form-box{
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
    margin: 30px 0;
    width: 100%;
    input{
        border: none;
        background: transparent;
        padding: 10px;
        outline: none;
        border-radius: 10px;
        margin: 10px 0;
    }
    input:focus{
        border: none;
        background: transparent;
        padding: 10px;
        outline: none;
    }
}
.log-in-form{
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
}


</style>