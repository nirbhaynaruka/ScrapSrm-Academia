function insert() {
    $.ajax({
        url: "../static/Data/json/TT_{{data}}.json",
        dataType: "json",
        success: function (data) {
            $(data).each(function (index, value) {
                var count=0,i,h,a;
                h = parseInt(value.Hours);
                a = parseInt(value.Absent);
                 for(i=0;i<10;i++){
                     if((h+1)-(a+1)*4 >= 0)
                     {
                         count++;
                         h++;
                         a++;
                     }
                 }  
                var lab1 = value.Courese_title+"<br>"+"<hr>"+value.Room_no+"<br>"+"<hr>"+value.Faculty_name;
                var rec = value.Courese_title+" ( "+value.Percent+" %) ";
                var rec1 = value.Absent+" out of "+value.Hours;
                var rec3 = value.Absent*4-value.Hours+" you need to attend";
                var count = count+" you can miss";
                if(value.Slot == "P1-P2-"){
                    $("#lab12").append(lab1);
                    $("#lab12rec").append(rec);
                    $("#lab12rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab12count").append(count);
                    else
                    $("#lab12count").append(rec3);
                }if(value.Slot == "P3-P4-"){
                    $("#lab34").append(lab1);
                    $("#lab34rec").append(rec);
                    $("#lab34rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab34count").append(count);
                    else
                    $("#lab34count").append(rec3);
                }if(value.Slot == "P17-P18-"){
                    $("#lab1718").append(lab1);
                    $("#lab1718rec").append(rec);
                    $("#lab1718rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab1718count").append(count);
                    else
                    $("#lab1718count").append(rec3);
                }if(value.Slot == "P19-P20-"){
                    $("#lab1920").append(lab1);
                    $("#lab1920rec").append(rec);
                    $("#lab1920rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab1920count").append(count);
                    else
                    $("#lab1920count").append(rec3);
                }if(value.Slot == "P21-P22-"){
                    $("#lab2122").append(lab1);
                    $("#lab2122rec").append(rec);
                    $("#lab2122rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab2122count").append(count);
                    else
                    $("#lab2122count").append(rec3);
                }if(value.Slot == "P23-P24-"){
                    $("#lab2324").append(lab1);
                    $("#lab2324rec").append(rec);
                    $("#lab2324rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab2324count").append(count);
                    else
                    $("#lab2324count").append(rec3);
                }if(value.Slot == "P37-P38-"){
                    $("#lab3738").append(lab1);
                    $("#lab3738rec").append(rec);
                    $("#lab3738rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab3738count").append(count);
                    else
                    $("#lab3738count").append(rec3);
                }if(value.Slot == "P39-P40-"){
                    $("#lab3940").append(lab1);
                    $("#lab3940rec").append(rec);
                    $("#lab3940rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab3940count").append(count);
                    else
                    $("#lab3940count").append(rec3);
                }if(value.Slot == "P41-P42-"){
                    $("#lab4142").append(lab1);
                    $("#lab4142rec").append(rec);
                    $("#lab4142rec1").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#lab4142count").append(count);
                    else
                    $("#lab4142count").append(rec3);
                }if(value.Slot == "P43-P44-"){
                    $("#lab4344").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P7-P8-"){
                    $("#lab78").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P9-P10-"){
                    $("#lab910").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P11-P12-"){
                    $("#lab1112").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P13-P14-"){
                    $("#lab1314").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P27-P28-"){
                    $("#lab2728").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P29-P30-"){
                    $("#lab2930").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P31-P32-"){
                    $("#lab3132").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P33-P34-"){
                    $("#lab3334").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P47-P48-"){
                    $("#lab4748").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P49-P50-"){
                    $("#lab4950").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P7-P8-"){
                    $("#lab78").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P7-P8-"){
                    $("#lab78").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P7-P8-"){
                    $("#lab78").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
                if(value.Slot == "P7-P8-"){
                    $("#lab78").append(lab1);
                    $("#a1").append(rec);
                    $("#a2").append(rec1);
                    if(parseInt(value.Percent) >= 75)
                    $("#a3").append(count);
                    else
                    $("#a3").append(rec3);
                }
            });

        }
    });

}