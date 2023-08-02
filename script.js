
let pts=0;

let be=false;

document.getElementById("name").addEventListener('keydown',function()
{
    let ele1=document.getElementsByClassName("warning")[0].style.visibility;
    let ele2=document.getElementsByClassName("inc")[0].style.visibility;

    if((ele1==="visible") && (ele2=="visible"))
    {
        be=true;
    document.getElementsByClassName("warning")[0].style.visibility="hidden";
    document.getElementsByClassName("inc")[0].style.visibility="hidden";
    }
})

document.getElementById("roll").addEventListener('keydown',function()
{
    let ele1=document.getElementsByClassName("warning")[1].style.visibility;
    let ele2=document.getElementsByClassName("inc")[1].style.visibility;

    if((ele1==="visible") && (ele2=="visible"))
    {
        be=true;
    document.getElementsByClassName("warning")[1].style.visibility="hidden";
    document.getElementsByClassName("inc")[1].style.visibility="hidden";
    }
})

document.getElementById("age").addEventListener('keydown',function()
{
    let ele1=document.getElementsByClassName("warning")[2].style.visibility;
    let ele2=document.getElementsByClassName("inc")[2].style.visibility;

    if((ele1==="visible") && (ele2=="visible"))
    {
        be=true;
    document.getElementsByClassName("warning")[2].style.visibility="hidden";
    document.getElementsByClassName("inc")[2].style.visibility="hidden";
    }
})

let age_inp=document.getElementById("age").value;
let data1=parseInt(age_inp);
if(data1>10 && data1<80)
    {
        be=true;
        document.getElementsByClassName("warning")[2].style.visibility="hidden";
        document.getElementsByClassName("inc")[2].style.visibility="hidden";
    }

for(let i=0;i<4;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {
      
        let ele1=document.getElementsByClassName("warning")[3].style.visibility;
        let ele2=document.getElementsByClassName("warn")[0].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[3].style.visibility="hidden";
        document.getElementsByClassName("warn")[0].style.visibility="hidden";
        }
    })
  
}


for(let i=4;i<8;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[4].style.visibility;
        let ele2=document.getElementsByClassName("warn")[1].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[4].style.visibility="hidden";
        document.getElementsByClassName("warn")[1].style.visibility="hidden";
        }
    })
  
}

for(let i=8;i<12;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[5].style.visibility;
        let ele2=document.getElementsByClassName("warn")[2].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[5].style.visibility="hidden";
        document.getElementsByClassName("warn")[2].style.visibility="hidden";
        }
    })
  
}

for(let i=12;i<16;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[6].style.visibility;
        let ele2=document.getElementsByClassName("warn")[3].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[6].style.visibility="hidden";
        document.getElementsByClassName("warn")[3].style.visibility="hidden";
        }
    })
  
}

for(let i=16;i<20;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[7].style.visibility;
        let ele2=document.getElementsByClassName("warn")[4].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[7].style.visibility="hidden";
        document.getElementsByClassName("warn")[4].style.visibility="hidden";
        }
    })
  
}

for(let i=20;i<24;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[8].style.visibility;
        let ele2=document.getElementsByClassName("warn")[5].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[8].style.visibility="hidden";
        document.getElementsByClassName("warn")[5].style.visibility="hidden";
        }
    })
  
}

for(let i=24;i<28;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[9].style.visibility;
        let ele2=document.getElementsByClassName("warn")[6].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[9].style.visibility="hidden";
        document.getElementsByClassName("warn")[6].style.visibility="hidden";
        }
    })
  
}

for(let i=28;i<32;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[10].style.visibility;
        let ele2=document.getElementsByClassName("warn")[7].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[10].style.visibility="hidden";
        document.getElementsByClassName("warn")[7].style.visibility="hidden";
        }
    })
  
}

for(let i=32;i<36;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[11].style.visibility;
        let ele2=document.getElementsByClassName("warn")[8].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[11].style.visibility="hidden";
        document.getElementsByClassName("warn")[8].style.visibility="hidden";
        }
    })
  
}

for(let i=36;i<40;i++)
{

    let ele=document.body.getElementsByClassName("btn")[i].addEventListener('click',function()
    {

        let ele1=document.getElementsByClassName("warning")[12].style.visibility;
        let ele2=document.getElementsByClassName("warn")[9].style.visibility;
    
        if((ele1==="visible") && (ele2=="visible"))
        {
            be=true;
        document.getElementsByClassName("warning")[12].style.visibility="hidden";
        document.getElementsByClassName("warn")[9].style.visibility="hidden";
        }
    })
  
}



let check =()=>
{
    pts=0;
    be=true;
    // for warning
    let ele=document.querySelector("a");
    let det1=document.getElementById("name").value;
    if(det1=='')
    {
        be=false;
       ele.href="#user_name";
       document.getElementsByClassName("warning")[0].style.visibility="visible";
       document.getElementsByClassName("inc")[0].style.visibility="visible";
       return;
    }


    let det2=document.getElementById("roll").value;
    if(det2=='')
    {
        be=false;
         ele.href="#user_roll";
         document.getElementsByClassName("warning")[1].style.visibility="visible";
         document.getElementsByClassName("inc")[1].style.visibility="visible";
         return;
    }

    let det3=document.getElementById("age").value;
    if(det3=='')
    {
        be=false;
        ele.href="#user_age";
        document.getElementsByClassName("warning")[2].style.visibility="visible";
        document.getElementsByClassName("inc")[2].style.visibility="visible";
        return;
    }
    
    let data=parseInt(det3);
    if(data<=10 || data>=80)
    {
        be=false;
         ele.href="#user_age";
        document.getElementsByClassName("warning")[2].style.visibility="visible";
        document.getElementsByClassName("inc")[2].style.visibility="visible";
        return;
    }

    // for question 1
    let q1=0;
    
    for(let i=0;i<4;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q1=1;
         }
    }

    if(q1==0)
    {
        be=false;
        ele.href="#Q1";
        document.getElementsByClassName("warning")[3].style.visibility="visible";
        document.getElementsByClassName("warn")[0].style.visibility="visible";
        return;
    }

    // for question 2
    let q2=0;
    
    for(let i=4;i<8;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q2=1;
         }
    }

    if(q2==0)
    {
        be=false;
        ele.href="#Q2";
        document.getElementsByClassName("warning")[4].style.visibility="visible";
        document.getElementsByClassName("warn")[1].style.visibility="visible";
        return;
    }

    // for question 3

    let q3=0;
    
    for(let i=8;i<12;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q3=1;
         }
    }


    if(q3==0)
    {
        be=false;
        ele.href="#Q3";
        document.getElementsByClassName("warning")[5].style.visibility="visible";
        document.getElementsByClassName("warn")[2].style.visibility="visible";
        return;
    }

    // for question 4

    let q4=0;
    
    for(let i=12;i<16;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q4=1;
         }
    }

    if(q4==0)
    {
        be=false;
        ele.href="#Q4";
        document.getElementsByClassName("warning")[6].style.visibility="visible";
        document.getElementsByClassName("warn")[3].style.visibility="visible";
        return;
    }

    // for question 5
    let q5=0;
    
    for(let i=16;i<20;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q5=1;
         }
    }

    if(q5==0)
    {
        be=false;
        ele.href="#Q5";
        document.getElementsByClassName("warning")[7].style.visibility="visible";
        document.getElementsByClassName("warn")[4].style.visibility="visible";
        return;
    }

    // for question 6
    let q6=0;
    
    for(let i=20;i<24;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q6=1;
         }
    }

    if(q6==0)
    {
        be=false;
        ele.href="#Q6";
        document.getElementsByClassName("warning")[8].style.visibility="visible";
        document.getElementsByClassName("warn")[5].style.visibility="visible";
        return;
    }

    // for question 7
    let q7=0;
    
    for(let i=24;i<28;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q7=1;
         }
    }

    if(q7==0)
    {
        be=false;
        ele.href="#Q7";
        document.getElementsByClassName("warning")[9].style.visibility="visible";
        document.getElementsByClassName("warn")[6].style.visibility="visible";
        return;
    }

    // for question 8
    let q8=0;
    
    for(let i=28;i<32;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q8=1;
         }
    }

    if(q8==0)
    {
        be=false;
        ele.href="#Q8";
        document.getElementsByClassName("warning")[10].style.visibility="visible";
        document.getElementsByClassName("warn")[7].style.visibility="visible";
        return;
    }

    // for question 9
    let q9=0;
    
    for(let i=32;i<36;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q9=1;
         }
    }

    if(q9==0)
    {
        be=false;
        ele.href="#Q9";
        document.getElementsByClassName("warning")[11].style.visibility="visible";
        document.getElementsByClassName("warn")[8].style.visibility="visible";
        return;
    }

     // for question 10
    let q10=0;
    
    for(let i=36;i<40;i++)
    {
         let a=document.getElementsByClassName("btn")[i].checked;
         
         if(a)
         {
            q10=1;
         }
    }

    if(q10==0)
    {
        be=false;
        ele.href="#Q10";
        document.getElementsByClassName("warning")[12].style.visibility="visible";
        document.getElementsByClassName("warn")[9].style.visibility="visible";
        return;
    }
     
   

   
}



let fx=()=>
{
    check();
    
    let rad1=document.getElementById("Q1-c").checked;
    if(rad1)
    {
        pts++;
        console.log(pts);
    }

    let rad2=document.getElementById("Q2-b").checked;
    if(rad2)
    {
        pts++;
        console.log(pts);
    }

    let rad3=document.getElementById("Q3-a").checked;
    if(rad3)
    {
        pts++;
        console.log(pts);
    }

    let rad4=document.getElementById("Q4-b").checked;
    if(rad4)
    {
        pts++;
        console.log(pts);
    }

    let rad5=document.getElementById("Q5-c").checked;
    if(rad5)
    {
        pts++;
        console.log(pts);
    }

    let rad6=document.getElementById("Q6-b").checked;
    if(rad6)
    {
        pts++;
        console.log(pts);
    }

    let rad7=document.getElementById("Q7-a").checked;
    if(rad7)
    {
        pts++;
        console.log(pts);
    }

    let rad8=document.getElementById("Q8-b").checked;
    if(rad8)
    {
        pts++;
        console.log(pts);
    }

    let rad9=document.getElementById("Q9-a").checked;
    if(rad9)
    {
        pts++;
        console.log(pts);
    }

    let rad10=document.getElementById("Q10-d").checked;
    if(rad10)
    {
        pts++;
        console.log(pts);
    }
    
    let str=document.getElementById("name").value;
 
    if(be)
    {
    for(let i=0;i<document.getElementsByClassName("mk-blur").length;i++)
    {
        document.getElementsByClassName("mk-blur")[i].style.display="none";
    }


  

    document.getElementsByClassName("back-color-container")[0].style.display="block";
    document.getElementsByClassName("marks-container")[0].style.display="block";
    document.getElementsByClassName("user")[0].innerHTML=str;
    document.getElementsByClassName("marks")[0].innerHTML=pts+" / 10";
    }
    
}



document.getElementsByClassName("sub-btn")[0].addEventListener("click", fx )


document.querySelector(".clr-btn").addEventListener("click",function()
{
    document.getElementsByClassName("clr-container")[0].style.visibility="visible";
    document.body.style.background="rgba(0, 0, 0, 0.5)";
    
    for(let i=0;i<document.body.getElementsByClassName("mk-blur").length;i++)
    {
           document.getElementsByClassName("mk-blur")[i].style.opacity="0.7";
    }


    document.getElementsByClassName("clr-cancel")[0].addEventListener("click",function()
    {
          document.getElementsByClassName("clr-container")[0].style.visibility="hidden";
          document.body.style.background="rgba(0, 0, 0, 0.5)";
    
          for(let i=0;i<document.body.getElementsByClassName("mk-blur").length;i++)
          {
                 document.body.style.removeProperty("background-color");
                 document.getElementsByClassName("mk-blur")[i].style.opacity="1";
          }
          
    })

})