const app = Vue.createApp({
  data(){
    return {
      result:'', // current value process
      calcul:'', // current calculation
      formula:null, // current operation
      operatorChar:'', // current operator character
      firstArg:'', // first argument of current operation
      secondArg:'', // second argument of current operation
      operatorClicked:false, // track if an operation was clicked
      history:[ ] // track all calcul
    }
  },
  methods: {
    // number() get the value of the button press (from 0 to 9) and add it to result
    number(value){

      //reset result value if the first argument is set

      if(this.firstArg != ''){
        if(this.secondArg == ''){
          this.result = '';
          this.secondArg ='ready to be use';
        }
        if(this.calcul.includes('=')){
          this.result='';
          this.firstArg = '';
          this.secondArg='';
          this.calcul='';
          this.formula=null;
          this.operatorChar='';
        }
      }
      // add value to result
      if(this.result.length<16){
        if(this.result.length != 1 || value != '0' || this.result !=0){
          this.result= this.result + value;
        }
      }
    },
    operation([operatorChar , formula]){
      // check if a value was enter
      if(this.result != ''){
        //if it's the second time we press a operator and both arguments have a value we can do the operation
        if(this.operatorClicked && this.firstArg != '' && this.secondArg != ''){
          this.secondArg=this.result;
          this.result = `${this.formula(parseFloat(this.firstArg), parseFloat(this.secondArg))}`;
          this.history.push({firstArg:this.firstArg, secondArg:this.secondArg, operatorChar: this.operatorChar, formula: this.formula, result:this.result });
        }
        // the first argument and current state of calculation are set
        this.secondArg='';
        this.firstArg = this.result;
        this.formula = formula;
        this.operatorChar = operatorChar;
        this.calcul = this.firstArg + operatorChar;
        this.operatorClicked=true;
      }
    },
    equal(){
      // check if we have the value necessary to do the calculation
      if(this.result != '' && this.firstArg != ''){
        // we can press = multiple time to aplly the same operation or set secondArg value and proceed as normal
        this.calcul.includes('=') ? this.firstArg = this.result : this.secondArg = this.result ;
        this.calcul = this.firstArg + this.operatorChar + this.secondArg + ' =' ;
        this.result = `${this.formula(parseFloat(this.firstArg), parseFloat(this.secondArg))}`;
        this.history.push({firstArg:this.firstArg, secondArg:this.secondArg, operatorChar: this.operatorChar, formula: this.formula, result:this.result });
        this.operatorClicked=false;
      }

    },
    // reset all data value
    clear(){
      this.result='',
      this.calcul = '',
      this.formula = null,
      this.operatorChar ='',
      this.firstArg ='',
      this.secondArg ='',
      this.operatorClicked = false,
      this.history=[ ]
    },
    //remove the last numbre add to current value
    del(){
      if(this.result!=''&& this.result!=this.firstArg ){
        this.result=this.result.slice(0, -1);
      }
    },
    // add or remove a minus signe to current value
    signe(){
      if (this.result != ''){
        this.result = this.result.charAt(0) === '-' ? this.result.slice(1) : '-'+ this.result;
      }
    },
    // add or remove a dot  to current value
    dot(){
      if(this.result.includes('.')){
        if(this.result.indexOf('.') == this.result.length -1){
          this.result=this.result.slice(0, -1);
        }
      }
      else{
        if(this.result === ''){
          this.result = '0.';
        }
        else{
          this.result= this.result + '.';
        }
      }
    },
    // get calcul from history
    getcalcul(calcul){
      this.firstArg = calcul.firstArg;
      this.secondArg = calcul.secondArg;
      this.operatorChar = calcul.operatorChar;
      this.formula = calcul.formula;
      this.result = `${this.formula(parseFloat(this.firstArg), parseFloat(this.secondArg))}`;
      this.calcul = this.firstArg + this.operatorChar + this.secondArg + ' =' ;
    },

  }
})
