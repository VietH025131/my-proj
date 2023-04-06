<template>
    <Transition class="floatin">
        <div class="wrapper" v-if="openchat">
            <div class="header">
                <p>Chat with us</p>
                <div>
                    <img src="img\tải xuống.jfif" alt="">
                    <img src="img\tải xuống.jfif" alt="">
                    <img src="img\tải xuống.jfif" alt="">
                    <img src="img\tải xuống.jfif" alt="">
                    <img src="img\tải xuống.jfif" alt="">
                </div>
            </div>
            <div>
                <ul>
                    
                </ul>
            </div>
            <div class="footer"><input type="text" placeholder="Your message here">
          
            </div>
        </div>
    </Transition>
</template>
<script>
    export default{
        props:[
                "openchat"
            ]
    }            
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: 'Fira Sans', sans-serif;
  box-sizing: border-box;
}
.header{
    background-color: #64c5b1;
    padding: 5px 10px; 
    border-radius: 10px;
    padding-bottom: 20px;
}
.header p{
    color: #fff;
}
.footer{
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: #f8f9fa;
   padding: 5px 0 ;
   border-radius: 10px;
   font-size: 15px;

   .icon{
    color: #828bb2;
   }
}

input{
    width: 100%;
    padding: 10px;
    border: transparent;
    background-color: #f8f9fa;
}
input:focus{
    outline: none;
}
.wrapper{
    background: #fff;
    box-shadow: 0 10px 15px rgba(6,0,8,.22);
    border-radius: 10px;
    position: absolute;
    
    width: 400px;
    transform: translateY(50px) translateX(30px);
    transition: .3s;
    border-radius: 10px;
    background-color: white;
    display: block;
}
img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
img:hover{
    transform: translateY(1px) translateX(1px);
    transition: .3s;
}
ul{
    list-style: none ;
    overflow-y: scroll;
    height: 300px;
}
li{
    display: flex;
    flex-direction: row;
    padding: 0 15px 0 0;

    p{
        font-size: 15px;
        color: #828bb2;
    }
}
h1{
    font-weight: 400;
    font-size: 20px;
}

img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateY(20px);
    margin-right: 5px;
  }
button{
    box-sizing: border-box;
    padding: 12px;
    border-radius: 5px;
    background-color: rgb(60, 60, 222);
    border: none;
    color: #f3f4f3;
    font-size: medium;
    font-weight: 400;
  }
  button:hover{
    box-shadow: 0 1px 5px rgb(60,60,222,0.5);
    transition: color .3s, border .3s, background .3s, opacity .3s;
  }
  .floatin{
    &-enter{
        opacity: 0;
      }
    &-leave-to{
        opacity: 0;
        transform: translateX(-50px);
    }  
      &-enter-active, &-leave-active{
        transition: all .3s;
      }
  }
</style>