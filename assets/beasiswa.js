// fungsi dropdown
function dropdownFunction() {
  document.getElementById("dropdownTampil").classList.toggle("tampil");
}
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("dropdownTampil");
    if (myDropdown.classList.contains("tampil")) {
      myDropdown.classList.remove("tampil");
    }
  }
};