import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faSearch, faBell, faPowerOff, faUser, faCogs, faTh, faShareAlt, faStar, faComment,faEnvelope,faXmark,faPlay,faTableCellsLarge,faHouse, faFaceSmile, faChevronRight, faBorderAll, faFile, faToolbox} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faSearch, faBell, faPowerOff, faUser, faCogs, faTh, faShareAlt, faStar, faComment,faEnvelope,faXmark,faPlay,faTableCellsLarge,faHouse,faFaceSmile,faChevronRight,faBorderAll,faFile,faToolbox)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
