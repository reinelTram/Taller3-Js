let etiquetaUserName=document.getElementById("nombreTrabajador");
let etiquetaUserHours=document.getElementById("horasTrabajador");
let userWeekSalary=document.getElementById("resultado");
let botonCalcular=document.getElementById("botonCalcular");
let hoursExtra;
let salaryExtra;

botonCalcular.addEventListener("click", weekSalary);

function weekSalary(userhours){
    
    let horas=Number(etiquetaUserHours.value)
    if(horas<=40){
        userWeekSalary.textContent=`su salario semanal es: ${horas*20000}`;
             
    }else{
        hoursExtra=horas-40;
        salaryExtra=hoursExtra*25000;
        userWeekSalary.textContent=`su salario semanal es: ${40*20000+salaryExtra}`;
        ;
    }
}

