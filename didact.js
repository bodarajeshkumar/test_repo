console.log("this is test")
window.onload = function funLoad() { 
    document.getElementById('createusersteps').style.display ='none';
    document.getElementById('updateusersteps').style.display = 'none';
    document.querySelector("#createusersoption").addEventListener('click',show1);
    document.querySelector("#updateusersoption").addEventListener('click',show2);

    document.getElementById('createcategoriessteps').style.display ='none';
    document.getElementById('updatecategoriessteps').style.display = 'none';
    document.querySelector("#createcategoriesopt").addEventListener('click',show3);
    document.querySelector("#updatecategoriesopt").addEventListener('click',show4);

    function show1(){
      document.getElementById('createusersteps').style.display ='inherit';
      document.getElementById('updateusersteps').style.display = 'none';
    
    }
    function show2(){
      document.getElementById('createusersteps').style.display ='none';
      document.getElementById('updateusersteps').style.display = 'inherit';
    }
    function show3(){
      document.getElementById('createcategoriessteps').style.display ='inherit';
      document.getElementById('updatecategoriessteps').style.display = 'none';
    
    }
    function show4(){
      document.getElementById('createcategoriessteps').style.display ='none';
      document.getElementById('updatecategoriessteps').style.display = 'inherit';
    }
} 
