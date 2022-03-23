console.log("this is test")
window.onload = function funLoad() { 
    document.getElementById('createusers').style.display ='none';
    document.getElementById('updateusers').style.display = 'none';
    document.querySelector("#createusersoption").addEventListener('click',show1);
    document.querySelector("#updateusersoption").addEventListener('click',show2);
  function show1(){
    document.getElementById('createusers').style.display ='inherit';
    document.getElementById('updateusers').style.display = 'none';
    document.getElementById('usermanagementsteps').style.display = 'inherit';
  }
  function show2(){
    document.getElementById('createusers').style.display ='none';
    document.getElementById('updateusers').style.display = 'inherit';
    document.getElementById('usermanagementsteps').style.display = 'inherit';
  }
} 
