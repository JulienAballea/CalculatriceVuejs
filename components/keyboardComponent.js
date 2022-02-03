app.component('keyboard-component',{
  // for loop of keyx ofbjets to display each keyboard key's attribute, action and name
  template:`
  <div class="keyboard">
    <div v-for="key in keys" :class="key.class" @click="$emit(key.action , key.value)" >
    <span> {{key.name}} </span>
    </div>
  </div>
  `,
  data() {
    return {
      // objet with all keyboard keys
      keys: [
        { name:'C', class:'key', action:'clear' },
        { name:'Del', class:'key', action:'del' },
        { name:'+/-', class:'key', action:'signe' },
        { name:'÷', class:'key operation', action:'operation', value:[' ÷ ', (a,b) => a/b ]},
        { name:'7', class:'key', action:"number", value:"7" },
        { name:'8', class:'key', action:"number", value:"8" },
        { name:'9', class:'key', action:"number", value:"9" },
        { name:'x', class:'key operation', action:'operation', value:[' x ', (a,b) => a*b ] },
        { name:'4', class:'key', action:"number", value:"4" },
        { name:'5', class:'key', action:"number", value:"5" },
        { name:'6', class:'key', action:"number", value:"6" },
        { name:'-', class:'key operation', action:'operation', value:[' - ', (a,b) => a-b ] },
        { name:'1', class:'key', action:"number", value:"1" },
        { name:'2', class:'key', action:"number", value:"2" },
        { name:'3', class:'key', action:"number", value:"3" },
        { name:'+', class:'key operation', action:'operation', value:[' + ', (a,b) => a+b ] },
        { name:'0', class:'key zero ', action:"number", value:"0" },
        { name:'.', class:'key', action:'dot' },
        { name:'=', class:'key equal ', action:'equal' }
      ]
    }
  },

})
