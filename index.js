
    document.getElementById("submit").onclick = function(event) {
        event.preventDefault();

        var birthday = document.getElementById("bdate").value;
        console.log(birthday);
        console.log(new Date().toJSON().slice(0, 10));

        if(!(document.querySelector('input[name="gender"]:checked')) && (!birthday)){
          alert("Gender & Birthday cannot be blank!"); 
        }
        else if (!birthday){
          alert("Enter your birthday!"); 
        }
        else if(!(document.querySelector('input[name="gender"]:checked'))){
          alert("Please enter your gender!");
        }
        else if ((birthday < "1900-01-01") || (birthday > new Date().toJSON().slice(0, 10))){
          alert("Please enter a date between 1900 and today")
        }else{

          var gender = document.querySelector('input[name="gender"]:checked').value;

          const MALE_NAMES = ['Kwasi', 'Kwado', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
          const FEMALE_NAMES = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

          var day = new Date(birthday).getDay();

          if(gender == "Male"){
            var akan = MALE_NAMES[day];
          }else {
             akan = FEMALE_NAMES[day];
          }

          document.getElementById("akan_name").innerHTML = akan;

         }
        }
      
