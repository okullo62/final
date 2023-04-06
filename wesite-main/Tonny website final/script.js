function message(){
    var firstname= document.getElementById('firstname');
    var lastname= document.getElementById('lastname');
    var email= document.getElementById('email');
    var message= document.getElementById('message');
    
    const successful= document.getElementById('successful');
    const danger= document.getElementById('danger');

if (firstname value===''|| lastname value===''|| email value==='' || message value=''){
    danger,style.display='block';

}
else{
    setTimeout()=>{
        firstname.value='';
        lastname.value='';
        email.value='';
        message.value='';

    }, 2000);

    successful.style.display='block';
}


}






