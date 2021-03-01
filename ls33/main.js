// // alert(1 || 1)
// // alert(0 || 1)
// // alert(1 || 0)
// // alert(0 || 0)
// let x = prompt("введите время")
//     if(x>10 && x>18)
//     {alert("магаз не работает")}
//     else{alert("магаз работает")}
// // alert(1 || "Den")
// // alert(null || 1)
// // alert(null || 0 || 1)
// // alert(null || 0)
// // alert("Den" || 1)
// alert(alert(1) || 2 || alert(3))

let fq = prompt("кто ты?")
if(fq != null){
    if(fq == "admin"){
    let qt = prompt("Введите пароль")
        if(qt != null){
            if(qt == "090909000999"){
                    alert("Приветствую")
            }
            else{alert("Пароль не верный")}
        }
        
    }
    else{
        let user1Pass = prompt("Введите пароль :")
        alert("Добро пожаловать к нам на сайт, " + fq )
    }        
}
