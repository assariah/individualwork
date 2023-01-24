showNotes();
const months= ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addName = document.getElementById("name");
  let addTxt = document.getElementById("addTxt");
let date= new Date(),
        month = months[date.getMonth()],
        day = date.getDate(),
        year = date.getFullYear();
  let notes = localStorage.getItem("notes");
  
  
  if (notes == null) {
    notesObj = [];
  
  } else {
    notesObj = JSON.parse(notes);
  }
  
  notesObj.push(addName.value,addTxt.value,date);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addName.value = "";
  
  showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
      html += `
              <div class="noteCard my-2 mx-2 card "w3-panel w3-border"" style="width: 18rem;">
                      <div class="card-body">
                          <p class="card-text"> ${element}</p>
                      </div>
                  </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
      notesElm.innerHTML = html;
    } else {
      notesElm.innerHTML = `Ei täällä ole mittä vielä`;
    }
  }
 
function deleteNote(index) {
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
   
 