app.component('history-component',{
 // display list of previous calculations
  template:`
  <div class="history">
    <div v-for="calcul in reverseArray" class="calcul" @click="$emit('getcalcul',calcul)">
    <span> {{calcul.firstArg}} {{calcul.operatorChar}} {{calcul.secondArg}} = {{calcul.result}} </span>
    </div>
  </div>
`,
props:{
  history:Array, // get history value from main
},
computed: {
  // a computed getter
  reverseArray() {
    // reverse history and limit it to 10 value
    return this.history.slice().reverse().slice(0, 10);
  }
}

})
