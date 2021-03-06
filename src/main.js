import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash, faCaretDown, faCaretUp, faStar, faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGooglePlusG, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.config.productionTip = false



// Font Awesome
library.add(faEye, faEyeSlash, faCaretDown, faCaretUp, faStar, faBars, faFacebookF, faGooglePlusG, faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)



// Register base components automatically
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /App[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )


  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})



new Vue({
  render: h => h(App),
}).$mount('#app')
