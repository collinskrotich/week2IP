
    document.getElementById("submit").onclick = function(){

        var birthday = document.getElementById("bdate").value;
        if (!birthday){
            alert("Enter correct birthday!");
        }else{
                alert("Your birthday is " + birthday);
            }
        
        var gender = document.querySelector('input[name="gender"]:checked').value;

        function getDayOfWeek(date) {
            const dayOfWeek = new Date(date).getDay();    
            return isNaN(dayOfWeek) ? null : 
              ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
          }
          day = getDayOfWeek(birthday);

          alert("Your birthdate is " + day);
        }

        
    


