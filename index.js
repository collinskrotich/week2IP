
    document.getElementById("submit").onclick = function(event) {
        event.preventDefault();

        var birthday = document.getElementById("bdate").value;
        var gender = document.querySelector('input[name="gender"]:checked').value;
        
        if (!birthday){
            alert("Enter correct birthday!");
        }else if(!gender){
                alert("Please enter your gender");
            }else {
        


        function getDayOfWeek(date) {
            const dayOfWeek = new Date(date).getDay();    
            return isNaN(dayOfWeek) ? null : 
              ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
          }

          day = getDayOfWeek(birthday);

          if(gender == "Male" && day == "Sunday"){
            var akan = "Kwasi";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Monday")
          {
            var akan = "Kwadwo";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Tuesday")
          {
            var akan = "Kwabena";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Wednesday")
          {
            var akan = "Kwaku";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Thursday")
          {
            var akan = "Yaw";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Friday")
          {
            var akan = "Kofi";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Male" && day == "Saturday")
          {
            var akan = "Kwame";
            document.getElementById("akan_name").innerHTML = akan;

          }
            else if(gender == "Female" && day == "Sunday")
          {
            var akan = "Akosua";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Monday")
          {
            var akan = "Adwoa";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Tuesday")
          {
            var akan = "Abenaa";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Wednesday")
          {
            var akan = "Akua";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Thursday")
          {
            var akan = "Yaa";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Friday")
          {
            var akan = "Afua";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else if(gender == "Female" && day == "Saturday")
          {
            var akan = "Ama";
            document.getElementById("akan_name").innerHTML = akan;
          }
            else
          {
            alert("Something is wrong");
          }
         }
        }
