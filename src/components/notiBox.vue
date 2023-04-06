<template >
    <Transition name="floatin">
        <div class="wrapper" v-if="opennoti">
            <div class="header">
                <p>Notification</p>
            </div>
            <div>
                <ul>
                    <li v-for="(item,index) in notiList" :key="'item'+index">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAngMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQQGBwIDBQj/xAA9EAABAwMCAwYEAwUHBQAAAAABAAIDBAUREiEGMUETIlFhcYEHFDKRQqHBFSNDsdEkcoKSouHxJTM0U2L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQMCBAX/xAAiEQACAgICAQUBAAAAAAAAAAAAAQIRAzESIUEEEyIyUWH/2gAMAwEAAhEDEQA/ALgQhCBCpUiUJgKEBASoAELF7wzdxA9Sq347+JdPa45KW1yB0vIzgA4/ujr6rMpJbGlZOrtfLXZmB9zroacO+kPdgn2TA8a8ONxm6RYxnIa4j74Xmu436vr6o1D5XxukO8rjqkd/iPL2RbpJalsjpHOIaQdznx28zy9FjlI3xR6hp+IbLUlogulG8u5ATDJ8sLpgg4III55C8s08dQyQytzI5j8N32ypbZ+KeKaeogcLhNMwHvRu7zcDxyj3P0bxt6L6Qo3w9xLUXgt1UAjZgapA/YHrz/kpItxkpaJtNbBCVC0IRCVCABCEIA0IQhIBUoSBKEwFSlIsJX9nE9/PS0nfyQBUXxc40dSXN1oppv3UbG9todzcd9J/LKqHTV3OrdO6N8mrljcBOK6SW83qaWTeWoqS4jxLnK2LLY4qalijbEAQMHZcuTJx78nVixc1/Cp3W+4GIMdRyDS0gHR67paaGoiiZE2GRoz3iW9epV90NtjxgtBPmnzLZSN3dTxnHLuBTWdvwXl6eK8lIxx3WaIx09LNhw20sPut1NV3SySsFZA+OJxBc5zebf0V5xwRf+pv2CZ8Q2anutpqKZ0TdbmHQ7G4d0WrbROkiG8C3n5+rIdOWapC5kTcd3fr0VwQEmFpcSSfHmvOXAsPY3Adu1zDnuub4g7/APC9F0ufl4yXFxLQclVw+UQzI2oQhXIghCEACEJUANkqRCAFCUJEqAFTW8Z/Y9fpzq+Wkxjx0lOgsZdHZSdocM0nUSNsdUPQHlrhqJs/Elue5o0yS5I88ZV308ZaRgKnOFomjjGlghB0MqX4BGC0NDv6KyJZ+JKyZ7rTSwRwNOGmofjV5+64skbZ34nSJhTMIGQBlbHHu88eS4fD1VfhIY71BSBg/iQSA/kpEYu0Li3fO6yoFJSNdO7IynIbqUUutyv1BVllHbaZ8AdgPmqA3I9F07VWXl0ma+lp+yPMwyZwqRRGX6Rnhq2xDit9OW9w1UjjGRsNzgq1mgNAA5BV7w2xx4zqZHNPcklBOPP+pVhhUwrohm2gQhCuRBCEIAAlQhADVCEJAZBKFilCYGSZ3pj5bNXxxnD3U0gafPSU8Q5utjmH8Qwk9GoummU5brRAzjRldTvY5opXGQt6ybAn7LuXO1VF0MoFaYYTG5jGDUME8nZBBym9JSizV7aYkkS1L2nPNri05HplrcLuBrgMNC4XJo9PinJ0Qiktdxs9TBHHWSVWgaXuJPf32zkqzuH5XPYe0IL8b+SjzQ7ty1jdch6nkAu7ZKUxfixjmfFZg25WbyxisdEZ4w4YkvlY9s1TJEx2zHN/B5j9cqS2i3RUIjcx/wBLA0sYMNOOuPFOa5zO2DHDDlthAAwrx6dHLN2kNKKljjvVWWnEs0kcg25tAGfzUjXLtsLJpY6wjL9BDT4AnP8AT7LqK2NUjnzNWqBCEKhEVCEIAEIQgBolSISAyShYpUwMglWISoAjnGdsgNsluMbNNVA+OQOBwNnAEn2JXGp7xS/KOmlkY0xtBeCfpU4rKZlZRz0sv0TRujPkCMLz1epZrbLW26pdomY/sntPQjl7dR5YXPmhb6OnDkrZ2LnxZXXEyMslJMd8CYNO/oupQ3PiektMFHDaY3tczvuO4HljK5PDtNbHUYeyaobI05e6N5/MZ/ku9Z7pZzWtp45ax51d7Y49zlQVLo9BVKNyZ0afiKSKampbvRyU0u2mQfQTjoVKK2q+WpHlmDKWEsHsonxnb6apomOoXmOsYdTMuOXDqMea6NkljudXR07HFzGRgyNP4Q3x9Tge61HdHLlaomlDA2mpooWjGhgb9gnKxCyXYlRwsEIQmIVCEIAEIQgBohISkykBkhY5RlaA2BKFq1BrSTsBzJ6KJ8SfEWw2OGUR1Da2qa06Yad2oZ83cgk+hpN6JkFUnxb4fFbUVVZRt/tjGsJY3+K3A29R0Tiw8cXfiCgkq+1ipwXlnYQtHcx/9Hck+y3Rve6M9o4ucT3iTklcuTOuXFHTjwOrZVvD16kpXCkzojJPaNeMb46+6ldBdoKR5Otmd3EA7nZZ3nhy23KpEk8ZikP8WLuk+vit9r+HNqqXNE1VVvA56XhuoLL4yZSLnBUaIOJHXOqgpKOE1dZK/wDdtA325k+AxvlWjw1aGWWlke9/bVUp1zSAYzjk1vgB/um1h4ftPD0BjtdIyIu+qQ5c93q47rssdlh9FvpaJNuWx62tpywvdMyPHPtHBuPunDSHAOacgjmFw5adr/qAIPQjZVheeIZOGuLamm4emMMOIxLC06ow/cnDTsNjvjC3DK300L2L+rLsQoNYPiPQ1YbDdWmnmzjtGDLHe3Nv5qZ0tVT1cImpJo5ojyfG7UFUlPHKG0bkoSITMCoQhADHKTKRaauqho6WaqqXBkMLC97j0ASGZ1E8VNC6aolZFEwZc+RwaAPUqBcRfFO2UAdFaGfOzDlITpjHn4u/L1VT8TcR199qp6mqnlLHyO7OIvJbG3OAAOQXCLi5482pcmXjiS2SPiLjK934uFbWSCLJ/cRu0R/5Rz98qLue4u58uS3AZxn0WJYM+YWSlHY4PvbrNXuY939nmwHDwPQq14HtkaJIzlrgCCOqoyQHmrI+HV7bU0zrfVvAlj3jJ/E1c+XH3yKQlXRK6mIFodhdbh0mJxB3ymsLO0PZHfwKfQQ/KvB5YU49OzcqaokEmOzGOq2Qg4TOlnbUOABzhLcLjFQxOc87gclRyVWQUXpHC4/4obYLc9kTh8zIMN8vNUhBVSSPqK6Zxc9xcdRO5J6p9xtezfr1K4SZgjOCWnY+QXLkjd8o7pt+fgt44v7MvFV0jrmYsZCcnW8aiurbuIq6zTdrTTyM08y08x59D7qO104ZXdlvkFjQPAbLKrqAaaqd0YzT6kqpttUXPYviTFK9lPdotLyMiSPqMZ+nr7fZTe3XKiuUXaUNTFM0cw127fUcwvM76hzLnbMHcaAfcLt8KVszbpVVkEromxaGB7Sd3g7Y9tvRaOeWCMn8ej0QEqa26sZX0MNTERpkYCR4HqE6Wjiap0c3Kr34yXh1JZYLdE/S+rfqkx1Y3p7kj7KwVS/xne53E0LCSWtpWYHhlzsrL0Uwq5Fct77ZR4O1D3Wo7Fp8HLOlJ7T1ac/da3fR/iSOjwbphp9yCiQYeD0IRWHZnolk3YzPgkaZq9UkcktJMyWFzmuactc04LfRKfoHqsngaAnQqJ7wrx7FDNGy9MeWj+NE3Jx5t5/ZTW58acO1FIH0t0p3HH0uJY4eoIyqOpWh0UmoA6eXktc3dOATjHisPGh35Leg+Illt7HHtnzPxkMhYTn35KFcUcY3LiKR0UTTSUjttDTl7vU/oopFu4A8l0KdoB2CUcUUNSbMqWnaHMYPp1csJ3LzEYGxflZUgHbjbkFrJzUj3VCmhjcpP+omQHOHA59ESuP7OiZ+KomyfQbfzK03L/yD6rafqtQ6Yz/qSJt9s33KbFziIP8A28b+GAu1w+98dNpd3YoDjzfM7d2fQbffxUcqe9dmg7jtgPzCklvaPl6QY2cx0jvNxeclaRqD+ZcXw0uDpKeejkcdh2jP1/RTdVf8NHH9rRjJwY3Aj2VoLRy+pilkP//Z" alt="">
                        <div>
                            <h1>{{item.header}}</h1>
                            <p>{{item.lines}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="footer"><button>See more</button></div>
        </div>
    </Transition>
</template>
<script>
    export default{
        props:[
                "opennoti"
            ],
        data:() => {
            return{
                notiList:[
                    {
                        header:"Header",
                        lines:"Lorem ipsum dolor sit amet.",
                    },
                    {
                        header:"Header",
                        lines:"Lorem ipsum dolor sit amet.",
                    },
                    {
                        header:"Header",
                        lines:"Lorem ipsum dolor sit amet.",
                    },
                    {
                        header:"Header",
                        lines:"Lorem ipsum dolor sit amet.",
                    },
                    {
                        header:"Header",
                        lines:"Lorem ipsum dolor sit amet.",
                    },
                ]
            }
        }
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
}
.header p{
    color: #fff;
}
.footer{
   display: flex;
   flex-direction: row;
   justify-content: center;
   background-color: #bcbdbc;
   padding: 5px 0;
   border-radius: 10px;
}
.wrapper{
    background: #fff;
    box-shadow: 0 10px 15px rgba(6,0,8,.22);
    border-radius: 10px;
    position: absolute;
    width: 350px;
    transform: translateY(50px) translateX(-50px);
    transition: .3s;
    border-radius: 10px;
    background-color: white;
    display: block;
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