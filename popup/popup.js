

var counter = 2700;

document.addEventListener('DOMContentLoaded', generateCreditCard  , false);




    function generateCreditCard() 
{    
    document.getElementById('check_btn').addEventListener('click', 
      function() { 
       var firstTwelveDigitsOfVCC = "406068214220";
       //4060682142204506

       //This card worked 5364 4149 8498 6804
       //var firstTwelveDigitsOfVCC = "536441498498";
       
        pad(counter,4);


        //Display Credit Card
        var generatedVCC = firstTwelveDigitsOfVCC+pad(counter,4);

       
        do {
            generatedVCC = firstTwelveDigitsOfVCC+pad(counter,4);
            counter++;
          }
          while (valid_credit_card(generatedVCC) === false);

       
        document.getElementById("firstText").innerText= generatedVCC;
        document.getElementById("thirdText").innerText= valid_credit_card(generatedVCC);


        

    });


}






function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }





// Takes a credit card string value and returns true on valid number
function valid_credit_card(value) {
    // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;
  
      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (var n = value.length - 1; n >= 0; n--) {
          var cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
  }