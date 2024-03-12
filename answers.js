  // Question 1 ===========================================\
  function celciusToFahrenheight(){
    var celcius = 18
    let fahrenheit = (celcius*1.8) + 32
    console.log(`Answer 1: Celcius = ${celcius}, Fahrenheit = ${fahrenheit}`)
  }

  celciusToFahrenheight()
  // ======================================================/

  
  // Question 2 ===========================================\
    function isLeapYear(){
      var year = 2024;
      if ((year%4 == 0 && year%100 != 0) || (year%400 ===0)) {
        console.log(`Answer 2: ${year} is a leap year.`)
      } else {console.log(`Answer 2: ${year} is not a leap year.`)}
    }

    isLeapYear()
  // ======================================================/


  // Question 3 ===========================================\
    function factorial(){
      var num = 5
      var count = 1
      for (i=1; i<=num; i++){
        count = count * i
      }
      console.log(`Answer 3: The factorial of ${num} is ${count}`)
    }
    
    factorial()
  // ======================================================/


  // Question 4 ===========================================\
    function printNum(){
      var array = []
      for (i=1; i<=100; i++){
        if (i%3 == 0 && i%5 == 0)        {array.push('fizzbuzz')} 
          else if (i%3 == 0 || i%5 == 0) {array.push('fizz')}
          else                           {array.push(i)}
      }
      console.log(`Answer 4: ${array}`)
    }

    printNum()
  // ======================================================/


  // Question 5 ===========================================\
    function getNaturalSum(){
      n = 20
      Count = 0
      for (j=1; j<=n; j++){
        Count = Count + j
      }
      console.log(`Answer 5: The natural sum of ${n} is ${Count}`)
    }

    getNaturalSum()
  // ======================================================/