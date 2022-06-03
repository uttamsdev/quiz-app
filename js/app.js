let selectArray = [];
const result = ['javascript'];
document.getElementById("submit").addEventListener("click", () => {
    selectArray = [];
    var ele = document.getElementsByName("quiz1");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        selectArray.push(ele[i].value);
      }
    }
    console.log(selectArray);
});
