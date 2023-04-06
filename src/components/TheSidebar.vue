<template>
  <transition name="show">
    <div class="sidebar" v-if="open">
        <div class="logo-details">
          <div class="close-btn">
            <font-awesome-icon icon="fa-solid fa-xmark" size="2x" class="elementIcon" @click="$emit('togglenav')"/>
          </div>
        </div>
        <ul class="menu">
          <li v-for="(item,index) in sidebarTree" :key="index" >
            <div class="title-wrapper">
              <div class="title" @click="item.open = !item.open">
                <font-awesome-icon :icon="['fas', item.icon]" class="icon"/>
                {{ item.title }}
              </div>
              <font-awesome-icon icon="fa-solid fa-chevron-right" :class="{'open': item.open }"  class="righticon" />
            </div>
            <SidebarItem :sidebarTree="item"/>
          </li>
        </ul>
      </div>
  </transition>
</template>

<script>
import SidebarItem from './SidebarItem.vue'
  
export default {
  props: [
        "open"
    ],
    data: () =>{
      return {
      sidebarTree:[
        {
          title:"Dashboard",
          icon: 'house',
          open: false,
          subMenu:[
            "Sale","default","Dark menu"
          ]

        },
        {
          title: "Apps",
          icon: 'border-all',
          open:false,
          subMenu:[
            "Editor","Mail box", "FAQ"
          ]
        },
        {
          title: 'UI Kit',
          icon: 'toolbox',
          open:false,
          subMenu:[
            "Color","alert","Buttons"
          ]
        },
      ]
      }
    },
    components: { SidebarItem }
}
</script>

<style scoped lang="scss" src="D:\Vuejs\my-proj\src\style\Sidebar.scss">

</style>