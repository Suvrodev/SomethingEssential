const ApplyBackgroundButton=document.getElementById('backgroundid');
ApplyBackgroundButton.addEventListener('click',()=>{
    const MyFriends=document.getElementsByClassName('Friend');
    
   // MyFriends.style.backfroundColor='green';

    for(const friendcontainer of MyFriends){
       // console.log(friendcontainer);
        friendcontainer.style.backgroundColor='green';
        friendcontainer.classList.add('mpset')
    }
})

document.getElementById('centerLast').addEventListener('click',()=>{
     const LastFrined=document.getElementById('lastfrined');
     LastFrined.style.backgroundColor='orange';
     LastFrined.style.textAlign='center';
     LastFrined.classList.add('mpset');
})

document.getElementById('newfrined').addEventListener('click',()=>{
    const FrinedContainer=document.getElementById('frinedboxid');
    const Friend=document.createElement('div');
    Friend.innerHTML=`
       <h3>Suvrodeb Howlader </h4>
       <p>Actually this is me </p>
    `;

    Friend.classList.add('Friend');

    FrinedContainer.appendChild(Friend);
})


////Practice 2
const InputBox=document.getElementById('inputid1');
const ListContainer=document.getElementById('listcontainerid');

InputBox.addEventListener('keyup',(e)=>{
    const Data=e.target.value;
    console.log(Data);
})
document.getElementById('subid').addEventListener('click',()=>{
    // console.log("Button Clicked");
    const Data=InputBox.value;
    // console.log(Data);
    const li=document.createElement('li');
    li.innerText=Data;
    //li.innerHTML=
    li.classList.add('liclass');
    ListContainer.appendChild(li);


    ////End
    InputBox.value='';
});

ListContainer.addEventListener('click',function(e){
    const Data=e.target.innerText;
    const Data1=e.target;
    // console.log(Data);
    Data1.parentNode.removeChild(e.target);
})

////Practice2
const L=document.getElementById('inp1');
const W=document.getElementById('inp2');
const ResultContainer=document.getElementById('ResultContainer');

document.getElementById('subid2').addEventListener('click',()=>{
    console.log("Submit Area Button Clicked");
    const Length=parseFloat(L.value);
    const Width=parseFloat(W.value);
    // console.log(`
    //    Length: ${Length} and Datatype: ${typeof Length}
    //    Width: ${Width} and Datatype ${typeof Width}
    // `);
    const Area=Length*Width;

    const li=document.createElement('li');
    const ConvertButton=document.createElement('button');
    ConvertButton.classList.add('bi');
    ConvertButton.classList.add('bi-arrow-counterclockwise')

    const DeleteButton=document.createElement('button');
    DeleteButton.classList.add('bi');
    DeleteButton.classList.add('bi-scissors');

    li.innerHTML=`Area: ${Area} m <sup>2</sup> `;
    li.classList.add('liclass');
    li.appendChild(ConvertButton);
    li.appendChild(DeleteButton);

    ResultContainer.appendChild(li);

    ConvertButton.addEventListener('click',function(){
        alert(`
          Area: ${Area} Meter 
          Area: ${Area*100} CM
        `);
    })

    DeleteButton.addEventListener('click',function(e){
        const Value=e.target.parentNode.parentNode.removeChild(e.target.parentNode);
       // alert(Value);
    })


    ////Last Work
    L.value="";
    W.value="";

})

////Toggle Button
const ToggleButton1=document.getElementById('togglebtn1');
const ToggleButton2=document.getElementById('togglebtn2');

ToggleButton1.addEventListener('click',()=>{
    console.log("Toggle Button-1");
    ToggleButton1.classList.toggle('Toggleclas')
})

ToggleButton2.addEventListener('click',(e)=>{
    console.log("Toggle Button-2")
    const Value=e.target.innerText;
    console.log(Value);
    if(Value==='Remove Background'){
        ToggleButton2.innerText='Set Background'
        document.getElementById('toggle_container').style.backgroundColor='transparent'
    }
    if(Value==='Set Background'){
        ToggleButton2.innerText='Remove Background'
        document.getElementById('toggle_container').style.backgroundColor='yellow'
    }
    // ToggleButton2.toggle(
    //     ToggleButton2.style.backgroundColor='red'
    // )
})