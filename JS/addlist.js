function addSubject(){
    var subject = document.getElementById("subject").value.trim();
    // if(subject =="") {
    //     alert("Please input your subject!");
    //     return;
    // }
    // else {
    //   // validation duplicate value
    //   if(isDuplicate(subject)){
    //      alert("The subject has already exist!");
    //       listsubject.focus();
    //       listsubject.value="";
    //      return;
    //   }
        var listsubject = document.getElementById("subject");

        if(subject==""){
        alert("Please input your subject!");
        return;

   }else{
      // validation duplicate value
        if(isDuplicate(subject)){
         alert("The subject has already exist!");
          listsubject.focus();
          listsubject.value="";
         return;
      }
        var li= document.createElement("li");
        // li.textContent = subject;
        li.className = "listItem";
        var span= document.createElement("span");
        span.textContent =subject;
        span.className="subject-text";

        var btncontainer = document.createElement("div");
        btncontainer.className="btncontainer";

        var editBtn = document.createElement("button");
        editBtn.textContent= "Edit";
        editBtn.onclick=function(){
            var newSubject=prompt("Edit Subject :" , span.textContent);
            // if(newSubject!=null && newSubject!=""){

            //     span.textContent = newSubject;
            if (newSubject === null) return;

                newSubject = newSubject.trim();

            if (newSubject == "") {
                alert("Subject cannot be empty!");
                return;
            }
            if (isDuplicate(newSubject, span)) {
                alert(" Please enter a new value to edit!");
                return;
            }
            span.textContent = newSubject
        };
        // create element button delete
        var deletebtn=document.createElement("button");
        deletebtn.textContent="Delete";
        deletebtn.onclick= function(){
            if(confirm("Are you sure to delete this subject?")){
                li.remove();
                } 
            }

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deletebtn);
        li.appendChild(btncontainer);
        btncontainer.appendChild(editBtn);
        btncontainer.appendChild(deletebtn);
        document.getElementById("listsubject").appendChild(li);
        document.getElementById("subject").value="";

        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "action-btn edit-btn";

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "action-btn delete-btn";
    }
}
// create function for duplicated values 
    function isDuplicate(subject) {
    var list = document.getElementById("listsubject");
    var items = list.getElementsByClassName("subject-text");

    subject = subject.toLowerCase().trim();

   for (var i = 0; i < items.length; i++) {
      if (items[i].textContent.toLowerCase().trim() == subject) {
        return true; // duplicate found
      }
   }
   return false; // no duplicate
}
