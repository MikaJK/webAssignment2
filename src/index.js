import "./styles.css";

function1();
function $(x) {
  return document.getElementById(x);
}

function checkTable(table, username) {
  for (let row of table.rows) {
    console.log(row.cells.item(0).innerText);
    if (row.cells.item(0).innerText === username) {
      return row;
    }
  }
  return 0;
}

function function1() {
  const emtpy = document.getElementById("empty-table");
  emtpy.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll("#menu-table td")
      .forEach((item) => item.remove());
  });

  const form = document.getElementById("theForm");

  const image_input = document.querySelector("#input-image");
  const img1 = document.createElement("img");
  img1.width = 64;
  img1.height = 64;
  ///const img1 = new Image();

  image_input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      img1.src = URL.createObjectURL(this.files[0]); // set src to blob url
    }
  });

  form.addEventListener("submit", function handleSubmit(event) {
    event.preventDefault();
    var username = $("input-username").value;
    const table1 = document.getElementById("menu-table");
    var editTable = checkTable(table1, username);
    var row;
    if (editTable === 0) {
      row = table1.insertRow();
    } else {
      row = editTable;
      row.deleteCell(0);
      row.deleteCell(0);
      row.deleteCell(0);
      row.deleteCell(0);
      row.deleteCell(0);
    }
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    //const submit = document.getElementById("submit-data");

    cell1.innerHTML = username;
    cell2.innerHTML = $("input-email").value;
    cell3.innerHTML = $("input-address").value;
    var checked = $("input-admin").checked;
    var x = "";
    if (checked) {
      x = "X";
    }

    cell4.innerHTML = x;
    if (cell1 === "" || cell2 === "" || cell3 === "") {
      row.remove();
    }
    cell5.appendChild(img1);
    form.reset();
  });
}
