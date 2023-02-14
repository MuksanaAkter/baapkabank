document.getElementById('btn-login').addEventListener('click', function()
{
    //console.log("cnnet")


    const mailF = document.getElementById('mail');
    const emails = mailF.value;
   // console.log(emails)


    const passF = document.getElementById('pass');
    const passW = passF.value;
    //console.log("passW")

    if(emails==="shanta" && passW==="shanta"){
        //console.log("valid")
        //window.location.href = 'balance.html'
        window.location.href="./balance.html"
    }
    else {
        //console.log("INvalid User")
        alert('you are a cheater fool ');
    }
})