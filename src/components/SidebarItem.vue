<template>
    <Transition Name="drop"
    @enter="enter"
    @afterEnter="afterEnter"
    @leave="leave"
        >
        <ul v-show="sidebarTree.open" class="wrapper">
            <li class="sub-menu" v-for="(item,index) in sidebarTree.subMenu" :key="index">
                {{ item }}
            </li>
        </ul>    
    </Transition>
</template>
<script>
    export default{
        props: [
            'sidebarTree'
        ],
        methods: {
            enter(el) {
            
                el.style.height = 'auto';
                
                const height = getComputedStyle(el).height;

                el.style.height = 0;
            
                getComputedStyle(el);
            
                setTimeout(() => {
                el.style.height = height;
                });        
            },
            afterEnter(el) {
                el.style.height = 'auto';
            },
            leave(el) {
                el.style.height = getComputedStyle(el).height;
                
                getComputedStyle(el);
                setTimeout(() => {
                el.style.height = 0;
                });
            }
        }
    };
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
  font-family: 'Fira Sans', sans-serif;
  box-sizing: border-box;
  font-size: 15px;
}
    .wrapper{
        list-style: none;

        .sub-menu{
            padding: 10px 0;
        }
    }


    .drop-enter-active, .drop-leave-active{
        transition: height .5s ease-in-out;
        overflow: hidden;
    }

</style>