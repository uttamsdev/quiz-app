let selectArray = [];
const result = ["javascript","true","alert","function2","call3","if1","if4"];
let count = 0;
document.getElementById("submit").addEventListener("click", () => {
  count = 0;
  selectArray = [];
  let quiz1 = document.getElementsByName("quiz1");
  let quiz2 = document.getElementsByName("quiz2");
  let quiz3 = document.getElementsByName("quiz3");
  let quiz4 = document.getElementsByName("quiz4");
  let quiz5 = document.getElementsByName("quiz5");
  let quiz6 = document.getElementsByName("quiz6");
  let quiz7 = document.getElementsByName("quiz7");

  for (i = 0; i < quiz1.length; i++) {
    if (quiz1[i].checked) {
      selectArray.push(quiz1[i].value);
    }
  }
  for (i = 0; i < quiz2.length; i++) {
    if (quiz2[i].checked) {
      selectArray.push(quiz2[i].value);
    }
  }
  for (i = 0; i < quiz3.length; i++) {
    if (quiz3[i].checked) {
      selectArray.push(quiz3[i].value);
    }
  }
  for (i = 0; i < quiz1.length; i++) {
    if (quiz4[i].checked) {
      selectArray.push(quiz4[i].value);
    }
  }
  for (i = 0; i < quiz5.length; i++) {
    if (quiz5[i].checked) {
      selectArray.push(quiz5[i].value);
    }
  }
  for (i = 0; i < quiz6.length; i++) {
    if (quiz6[i].checked) {
      selectArray.push(quiz6[i].value);
    }
  }
  for (i = 0; i < quiz7.length; i++) {
    if (quiz7[i].checked) {
      selectArray.push(quiz7[i].value);
    }
  }
  console.log(selectArray);

  if(selectArray.length != 7){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please answer all the questions'
    })
    return;
  }

  for(let i = 0; i <result.length; i++){
    if(result[i] === selectArray[i]){
      count++;
    }
  }
  Swal.fire({
    title: `Your Score is: ${count}/${result.length}`,
    imageUrl: 'https://i.postimg.cc/Vk9R4fWY/cong.png',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url()',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://i.ibb.co/Hdq1F7G/running-Cat.gif")
      left top
      no-repeat
    `
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  })
  console.log('your score', count);
});
