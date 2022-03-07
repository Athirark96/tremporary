function validate() {    
            var fname = document.form.fname.value;    
            var pass = document.form.pass;    
            var address = document.form.address;    
            var gender = document.form.gender;    
            var email = document.form.email;    
            var mobile = document.form.mobile;    
            var course = document.form.course;
            var ren=/[0-9!@#$%^&*]/

            if (fname == "") {    
                alert("Name is required");    
            }
            else if(ren.test(fname))
            {
            	alert("valid name ");
            }
           

           if (pass.value.length <= 0) {    
                alert("PASS is required");    
                    
            }    
            if (address.value.length <= 0) {    
                alert("Address is required");    
                    
            }    
            if (gender.value.length <= 0) {    
                alert("Gender is required");    
                    
            }    
            if (email.value.length <= 0) {    
                alert("Email Id is required");    
                    
            }    
            if (mobile.value.length <= 0) {    
                alert("Mobile number is required");    
                mobile.focus();    
                return false;    
            }    
            if (course.value == "select course") {    
                alert("Course is required");    
                    
            }    
            
           }

        
        
        
        
     <!DOCTYPE!>
<html>
<head>
    <title></title>
     <script src="main.js">
    </script>
     <link rel="stylesheet" href="main.css">
</head>
<body>
<center><h1> Registration form </h1></center>
<form name="form" onsubmit="return validate()">
<table>
    <tr>
        <td>
           <label>FirstName : </label>
       </td>
       <td>
           <input type="text" name="fname" placeholder="firstname">
       </td>
    </tr>
    <tr>    
                <td><label>DOB: </label></td>    
                <td>    
                    <input type="date" id="dob" name="dob">    
                </td>    
            </tr> 
    <tr>
        <td>
            <label>password : </label> 
        </td>
        <td>
            <input type="password" name="pass" >
        </td>
    </tr>
     <tr>    
                <td><label>Address: </label></td>    
                <td>    
                    <input type="textarea" size="50" name="address" placeholder="Address">    
                </td>    
            </tr>     
    <tr>
        <td> 
            <label>Gender :</label>
        </td>
        <td>
             <input type="radio" name="gender" value="male">Male 
             <input type="radio" name="gender" value="female">feMale 
        </td>
     <tr>
        <td>
            <label>course : </label>
        </td>
        <td>
            <select name="course">    
                        <option value="select course">select course</option>    
                        <option value="HTML">HTML</option>    
                        <option value="CSS">CSS</option>    
                        <option value="JavaScript">JAVASCRIPT</option>    
                        <option value="Java">JAVA</option>    
            </select>  
        </td>
    </tr> 
    <tr>    
                <td><label>Email Id: </label></td>    
                <td>    
                    <input type="text" name="email" placeholder="example@gmail.com">    
                </td>    
            </tr>
    <tr>
        <td>
           <input type="checkbox"  name="vehicle1" value="Bike">
           <label for="vehicle1"> I have a bike</label>
        </td>
        <td>

          <input type="checkbox"  name="vehicle2" value="Car">
           <label for="vehicle2"> I have a car</label>
       </td>
        
    </tr>
    <tr>
        <td>
            <input type="submit" name="submit" value="Submit" >  
         
            <input type="reset" name="reset" value="Reset"> 
        </td>
    </tr>
</table>
</form>
</body>
</html> 
  

 body{  
        font-family: Calibri;  
    }
 form{    
            text-align: center;    
            font-family: Calibri;    
            font-size: 20px;    
            border: 3px solid black;    
            width: 600px;    
            margin: 20px auto;    
        } 
 input[type=checkbox], input[type=radio] {
  vertical-align: middle;
  position: relative;
  bottom: 1px;
}
