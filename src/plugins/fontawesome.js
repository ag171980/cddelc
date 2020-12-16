import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone,faInbox,faMapMarkerAlt,faEye,faBullseye,faBars} from '@fortawesome/free-solid-svg-icons'

import { faFacebookSquare,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faPhone,faInbox,faMapMarkerAlt,faEye,faBullseye,faBars)
library.add(faFacebookSquare,faInstagramSquare)
Vue.component('font-awesome-icon', FontAwesomeIcon)