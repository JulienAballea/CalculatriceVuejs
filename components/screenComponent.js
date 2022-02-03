app.component('screen-component',{
  //calcul display the current state of the calculation or nothing
  //result dispply the current value/result or 0
  template:`
  <div class="screen">
    <span class="calcul"> {{calcul || ' '}} </span>
    <span class="result"> {{result || 'Enter a value'}} </span>
  </div>
`,
props:{
  result:String, // get result value from main
  calcul:String // get calcul value from main
}
})
