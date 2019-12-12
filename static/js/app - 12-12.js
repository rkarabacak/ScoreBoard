

var children = Array.from(document.getElementsByClassName('iter'));
// children.forEach(child => console.log(child.id))
children[0].focus();
console.log("Uzunluk: "+children.length)
tt = $('#id_player1_name').val();
console.log("id: "+tt)



// $(document).ready(function () {
//     $(function doConnect() { 
//         var websocket = new WebSocket(document.getElementById('id_url').value);
//         websocket.onopen = function(evt) { onOpen(evt) };
//         websocket.onclose = function(evt) { onClose(evt) };
//         websocket.onmessage = function(evt) { onMessage(evt) };
//         websocket.onerror = function(evt) { onError(evt) };
//     });
    
// });

// HOME BUTTON
$("#button_home-modal").click(function(){
         
    $('#btn2').click();
});

var run_list =[]
var p1_eys = []
var p1_avg = []
var p2_eys = []
var p2_avg = []

var run_obj = {
    player1_score:'',
    player2_score:'',
    innings:'',
    p1_eys1:'',
    p1_eys2:'',
    p1_scoreavg:'',
    p2_eys1:'',
    p2_eys2:'',
    p2_scoreavg:'',
    run:''
}
// BUTTON B PROGRESS
// var countdown_limit = [40, 40, 80, 120];
var frame_time = [400, 800, 1200, 1600];
var frame_time2 = 50;
var current_timeout = 0;
// var limit = countdown_limit[current_timeout];
var current_countdown_limit = 10;
var foul_value;
var bar;
var secons;
var isPaused = false;
var width = 100;
var elem;
var foul_limit_counter_2 =0;
var foul_limit_counter = 0;
var player_status = 1;



$(document).ready(function(){
    current_timeout = parseInt($('#id_timeout_limit').val(), 10);
    foul_value = current_timeout    
    // BUTTON_1 FOUL PLUS PROGGRESS
    $('#btn_1-modal').click(function (e) {        
        console.log("foul_value_plus: "+foul_value)        
        console.log("foul_limit_counter_2: "+foul_limit_counter_2)        
        if (foul_value > 0){
            
            if(foul_limit_counter===foul_value){
                
            }else if (foul_value > foul_limit_counter){
                current_countdown_limit +=40;
                frame_time2 += 50;              
                    
                foul_limit_counter++;
                foul_limit_counter_2 = foul_limit_counter;
                $('#p'+player_status+'_f'+foul_limit_counter).removeClass('bg-success').addClass('bg-danger');
                console.log("foul_limit_counter_plus: "+foul_limit_counter)
            } 
               
                 
        }        
    });
    // BUTTON_2 FOUL MINUS
    $('#btn_2-modal').click(function (e) {        
        // console.log("foul_value_minus: "+foul_value)
        // console.log("foul_limit_counter_2: "+foul_limit_counter_2)
        // console.log("foul_limit_counter: "+foul_limit_counter)
        
        
        if ((foul_limit_counter <= 3) && (foul_limit_counter > 0)){
            console.log("Sec: "+current_countdown_limit)
            if (current_countdown_limit > 40){
                current_countdown_limit -=40;
            }            
            $('#p'+player_status+'_f'+foul_limit_counter).removeClass('bg-danger').addClass('bg-success');
            foul_limit_counter = foul_limit_counter -1;
            foul_limit_counter_2 = foul_limit_counter;

            console.log("foul_limit_counter_minus: "+foul_limit_counter)                      
        }         
    });
    // TIMEOUT LIMIT
    $('#id_timeout_limit').change(function (e) { 
        current_timeout = parseInt($('#id_timeout_limit').val(), 10);
        console.log("Change_time: "+current_timeout) 
        // return current_timeout;       
    });    
    
    $('#myModal').on('load', function() {               
        
     }) 
    // INIT PLAYER
    $('#player1-card').addClass('_player1-card');
    $('#button_a-modal').click(function (e) {
        let total_innings = parseInt($('#input_innings').val(), 10);
        if ($('#player1-card').hasClass('_player1-card')){
            $('#player1-card').removeClass('_player1-card');
            $('#player2-card').addClass('_player2-card');
            let p1_total_score = parseInt($('#player1_score').val(), 10);
            let p1_run_score =parseInt($('#run_score').val(), 10);            
            $('#player1_score').val( p1_total_score += p1_run_score );
            // ISTAKA                        
            $('#input_innings').val(total_innings +=1);
            // EYS
            run_obj.run = parseInt($('#run_score').val(), 10);
            p1_eys.push(p1_run_score)
            p1_eys_sort= p1_eys.slice().sort()             
            console.log("p1_eys: "+p1_eys)
            console.log("p1_eys_sort: "+ p1_eys_sort)            
            $('#p1_eys1').val(p1_eys_sort[p1_eys_sort.length - 1]);
            if (p1_eys_sort.length > 1){
                $('#p1_eys2').val(p1_eys_sort[p1_eys_sort.length - 2]);
            }
            // ORTALAMA
            $('#p1_scoreavg').val((p1_total_score / total_innings).toFixed(3));

            run_obj.player1_score = parseInt($('#player1_score').val(), 10);            
            run_obj.innings = parseInt($('#input_innings').val(), 10);
            run_obj.p1_eys1 = parseInt($('#p1_eys1').val(), 10);
            run_obj.p1_eys2 = parseInt($('#p1_eys2').val(), 10);
            run_obj.p1_scoreavg = parseFloat($('#p1_scoreavg').val(), 10).toFixed(3);           
            

            // console.log(
            //     "player1_score: "+run_obj.player1_score+"\n",
            //     "player2_score: "+run_obj.player2_score+"\n",
            //     "innings: "+run_obj.innings+"\n",
            //     "p1_eys1: "+run_obj.p1_eys1+"\n",
            //     "p1_eys2: "+run_obj.p1_eys2+"\n",
            //     "p1_scoreavg: "+run_obj.p1_scoreavg+"\n",
            //     "p2_eys1: "+run_obj.p2_eys1+"\n",
            //     "p2_eys2: "+run_obj.p2_eys2+"\n",
            //     "p2_scoreavg: "+run_obj.p2_scoreavg+"\n",
            //     "run: "+run_obj.run
            // ) 
            player_status = 2;
            frame_time2 = 400;
            console.log("width: "+width) 
            // if (width === 0){
            //     foul_limit_counter += 1;
            // }
            console.log("Foul_value: "+foul_limit_counter)           
                      
            
        } else{
            $('#player2-card').removeClass('_player2-card');
            $('#player1-card').addClass('_player1-card');
            let p2_total_score = parseInt($('#player2_score').val(), 10);
            let p2_run_score =parseInt($('#run_score').val(), 10);
            $('#player2_score').val( p2_total_score += p2_run_score );
            // ORTALAMA
            $('#p2_scoreavg').val((p2_total_score / total_innings).toFixed(3));
            // EYS
            run_obj.run = parseInt($('#run_score').val(), 10);
            p2_eys.push(p2_run_score)
            p2_eys_sort= p2_eys.slice().sort()  
            console.log("p2_eys: "+p2_eys)
            console.log("p2_eys_sort: "+p2_eys_sort)
            $('#p2_eys1').val(p2_eys_sort[p2_eys_sort.length - 1]);
            if (p2_eys_sort.length > 1){
                $('#p2_eys2').val(p2_eys_sort[p2_eys_sort.length - 2]);
            }
                                 
            run_obj.player2_score = parseInt($('#player2_score').val(), 10);
            run_obj.innings = parseInt($('#input_innings').val(), 10);            
            run_obj.p2_eys1 = parseInt($('#p2_eys1').val(), 10);
            run_obj.p2_eys2 = parseInt($('#p2_eys1').val(), 10);
            run_obj.p2_scoreavg = parseFloat($('#p2_scoreavg').val(), 10).toFixed(3);
             
            // console.log(total_score)
            // console.log(
            //     "player1_score: "+run_obj.player1_score+"\n",
            //     "player2_score: "+run_obj.player2_score+"\n",
            //     "innings: "+run_obj.innings+"\n",
            //     "p1_eys1: "+run_obj.p1_eys1+"\n",
            //     "p1_eys2: "+run_obj.p1_eys2+"\n",
            //     "p1_scoreavg: "+run_obj.p1_scoreavg+"\n",
            //     "p2_eys1: "+run_obj.p2_eys1+"\n",
            //     "p2_eys2: "+run_obj.p2_eys2+"\n",
            //     "p2_scoreavg: "+run_obj.p2_scoreavg+"\n",
            //     "run: "+run_obj.run
            // )
            player_status = 1;
            frame_time2 = 400;  
        }
        // const peopleArray = Object.keys(run_obj).map(i => run_obj[i])
        run_list.push(JSON.stringify(run_obj))
        console.log(run_list)
        $('#run_score').val(0);
        current_countdown_limit = 40;
        clearInterval(bar);
        clearInterval(secons);
        isPaused = false;
        width = 100;
        elem.style.width = width + '%';
        $('#span_time').html(current_countdown_limit);
        $('#mybar').removeClass('bg-danger').addClass('bg-success');
        
        // foul_limit_counter = 0;         
    });   
    
    //COUNTDOWN PROGRESS Bar olarak 
       
    $('#button_b-modal').click(        
        function start(e) {            
            console.log(isPaused)
            if (!isPaused){                
                // console.log("button_b")            
                elem = document.getElementById("mybar");                 
                console.log('current_countdown_limit'+current_countdown_limit)
                // console.log(countdown_limit[current_timeout])
                // console.log("start_time: "+current_timeout)                
                             
                bar = setInterval(frame, 1000);
                secons = setInterval(frame2, 1000);
                function frame() {
                    if (width <= 0) {
                        clearInterval(bar);
                    } else if ( foul_limit_counter === 0){
                        bar_width = width / current_countdown_limit;
                        // console.log("Bar-width: "+bar_width)
                        // console.log("width: "+width)
                        // console.log("Secons: "+current_countdown_limit)
                        width= width - bar_width        
                        elem.style.width = width + '%';
                        // console.log("frame_time: "+frame_time2)        
                    }else if ( foul_limit_counter == 1){
                        // console.log("Bar-width: "+bar_width)
                        // console.log("width: "+width)
                        // console.log("Secons: "+current_countdown_limit)
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width        
                        elem.style.width = width + '%';
                        // console.log("frame_time: "+frame_time2)
                    }else if ( foul_limit_counter == 2){
                        // console.log("Bar-width: "+bar_width)
                        // console.log("width: "+width)
                        // console.log("Secons: "+current_countdown_limit)
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width           
                        elem.style.width = width + '%';
                        // console.log("frame_time: "+frame_time2)
                    }
                    else if ( foul_limit_counter == 3){
                        // console.log("Bar-width: "+bar_width)
                        // console.log("width: "+width)
                        // console.log("Secons: "+current_countdown_limit)
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width              
                        elem.style.width = width + '%';
                        // console.log("frame_time: "+frame_time2)
                    }
                    return width
                }
                //COUNTDOWN PROGRESS Sayısal olarak
                function frame2() {
                    if (current_countdown_limit <= 0) {
                        clearInterval(secons);
                        $('#span_time').text(" FOUL");
                        elem.style.width = '100%';
                        
                    }else{    
                        $('#span_time').html(current_countdown_limit-=1);
                            if (current_countdown_limit <= 10){
                                $('#mybar').removeClass('bg-success').addClass('bg-danger');                    
                            }
                        // return current_countdown_limit                                        
                    }
                    
                }
                isPaused = true                  
            
            } else{               
                clearInterval(bar);
                clearInterval(secons);
                $('#span_time').text(current_countdown_limit+" PAUSED");
                isPaused = false;        
            }
        }
    );


    // BUTTON_A-MODAL SAYI EKLEME

    
        
        
   

    // FOUL BUTTON     
     $('#id_timeout_limit').change(function (e) { 
        foul_value = parseInt($("#id_timeout_limit").val(), 10);
        console.log("Foul Hakkı: "+foul_value)
        if (foul_value == 3){
            $('#player2_foul, #player1_foul').children().show();
        }else if (foul_value == 2){
            if (!$('#p1_f3, #p2_f3').hide()){
                $('#p1_f3, #p2_f3').hide();
            }
            $('#p1_f2, #p2_f2').show();
        }else if (foul_value == 1){
            $('#p1_f3, #p2_f3').hide();
            if (!$('#p1_f2, #p2_f2').hide()){
                $('#p1_f2, #p2_f2').hide();
                
            }
            $('#p1_f1, #p2_f1').show();
        }else if (foul_value == 0){
           $('#player2_foul, #player1_foul').children().hide();
        }
        return foul_value;
     });

     //PLAYER NAMES
     
     $('#btn-playerName-submit').click(function (e) { 
         let p1n = $('#player1-name-modal').val();
         let p2n = $('#player2-name-modal').val();
         console.log("p1_name:  "+p1n + " | "+"p2_name: "+p2n)
         $('#id_player1_name').val(p1n);
         $('#id_player2_name').val(p2n);
         
     });
    //  $('#id_player1_name, #id_player2_name').change(function (e) { 
    //     let player1_name = $('#id_player1_name').val();
    //     let player2_name = $('#id_player2_name').val();
    //     console.log("p1_name:  "+player1_name + " | "+"p2_name: "+player2_name)
    //     console.log("p2_name: "+player2_name)
         
    //  });
     
     

    // PLUS BUTTON
    $("#plus_id-modal").click(function(){
        let plus = 1;
        let value_ = parseInt($('#run_score').val(), 10);
        console.log("Plus: "+value_)        
        $('#run_score').val(value_ + 1);
    });
    // MINUS BUTTON
    $("#minus_id-modal").click(function(){
        let plus = 1;
        let value_ = parseInt($('#run_score').val(), 10);
        console.log("Minus: " + value_)
        if (value_ >= 1){
            $('#run_score').val(value_ - 1);
        }         
    });   
  });
  
function doConnect(){
    websocket = new WebSocket(document.getElementById('id_url').value);
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
}


// $(function onOpen(){    
//     writeToScreen("connected\n");
//     $("#id_connectButton").disabled = true;
//     $("#id_disconnectButtonn").disabled = false;
// });
function onOpen(evt){
    writeToScreen("connected\n");
    document.myform.connectButton.disabled = true;
    document.myform.disconnectButton.disabled = false;
};

// $(function onClose(){
//     writeToScreen("disconnected\n");
//     $("#id_connectButton").disabled = false;
//     $("#id_disconnectButtonn").disabled = true;
// });
function onClose(evt){
    writeToScreen("disconnected\n");
    document.myform.connectButton.disabled = false;
    document.myform.disconnectButton.disabled = true;
};

function onMessage(evt){
    // let wii_nunCheck = 'wii_nunChecks.'+evt.data;
    // console.log("ab"+wii_nunCheck)
    // if (!evt.data){
    //     throw new Error(" Hatalı İşlem")
    // }
    switch (evt.data){
        case 'UP':            
            upItem()           
            break;     
        
        case 'DOWN':            
            downItem()
            break;   

        case 'PREVIOUS':
            prevItem()
            break; 
    
        case 'NEXT':           
            nextItem()            
            break;

        case 'MINUS':
            number_minus()
            break; 
    
        case 'PLUS':           
            number_plus()            
            break;
    }
    writeToScreen(evt.data + '\n');    
    
};

// $(function onError(){
//     writeToScreen('error: ' + evt.messages + '\n');
//     websocket.close();
//     $('$id_connectButton').disabled = false;
//     $('$id_disconnectButton').disabled = true;

// });
function onError(evt){
    writeToScreen('error: ' + evt.messages + '\n');
    websocket.close();
    document.myform.connectButton.disabled = false;
    document.myform.disconnectButton.disabled = true;
};

// $(function doSend(message) { 
//     writeToScreen("sent: " + message + '\n');
//     websocket.send(message);
// });
function doSend(message){
    writeToScreen("sent: " + message + '\n');
    websocket.send(message);
};

// $(function writeToScreen(message) { 
//     $('#id_outputtext').value += message
//     $('id_outputtext').scrollTop();
// });
function writeToScreen(message){
    document.myform.outputtext.value += message
    document.myform.outputtext.scrollTop = document.myform.outputtext.scrollHeight;

}
function sendText() {
    doSend( "Test" );
}

$(function clearText() { 
    ('#id_outputtext').value = '';
})
// function clearText() {
//     document.myform.outputtext.value = "";
// }


// $(function doDisconnect() { 
//     websocket.close();
// });
function doDisconnect() {
    websocket.close();
};

const wii_nunChecks = {
    UP:"UP",
    DOWN:"DOWN",
    PREVIOUS:"PREVIOUS",
    NEXT:"NEXT",
    BUTTON_A:"BUTTON_A",
    BUTTON_B:"BUTTON_B",
    MINUS:"MINUS",
    PLUS:"PLUS",
    HOME:"HOME",
    BUTTON_1:"BUTTON_1",
    BUTTON_2:"BUTTON_2"   

}

// next prev hazır *****************************************



var iterLength = children.length;
var iter_current = 0;

// var current_time = 40;

// function count_down(){
//     if (current_time >= 1){
//         current_time = current_time -1;
//         countdown = document.getElementById('countdown').value=current_time;         
//     }
//     if (current_time == 0){
//         clearTimeout(count_down)
//         document.getElementById('button_b').disabled = false;
//     }    
// };

function upItem() {
    if ((iter_current - 5) < 0){

    }else{
        iter_current = iter_current -5        
    }   
    document.getElementById(children[iter_current].id).focus();  
    console.log(iter_current)
    return iter_current
};
function downItem() {
    if (iter_current > (iterLength - 6)){

    }else{
        iter_current = iter_current + 5       
    }     
    document.getElementById(children[iter_current].id).focus();  
    console.log(iter_current, children[iterLength].nodeName)
    return iter_current
};

function nextItem() {
    if (iter_current === (iterLength -1)){
        iter_current = 0;        
    }else{
        iter_current = iter_current + 1
        
    }      
    console.log(iter_current)
    document.getElementById(children[iter_current].id).focus()    
    return iter_current
};


function prevItem() {
    if (iter_current === (iterLength % iterLength)){
        iter_current = (iterLength -1)
    }else{
        iter_current = iter_current - 1
    }
    document.getElementById(children[iter_current].id).focus()       
    console.log(iter_current)
    return iter_current
       
};
function number_plus(){    
    let input_value = parseInt(document.getElementById(children[iter_current].id).value,10);   
    input_value+=1;
    document.getElementById(children[iter_current].id).value=input_value
    document.getElementById(children[iter_current].id).focus();
       
};
function number_minus(){    
    let input_value = parseInt(document.getElementById(children[iter_current].id).value,10);
    if (input_value >= 1) {
        input_value-=1;
    };
    
    document.getElementById(children[iter_current].id).value=input_value
    document.getElementById(children[iter_current].id).focus();
       
};

// window.addEventListener('load', function (evt) {     
    // document.getElementsByName('url').value = "ws://localhost:5500/";
    // document.myform.inputtext.value = "Hello World!"
    // this.document.getElementsByName('disconnectButton').disabled = true;
    // this.document.getElementById('websocket_url').value = "ws://localhost:5500/";  
    // document.myform.disconnectButton.disabled = true;  
    
    //PREV BUTTON        
    // document.getElementById('prev_button').addEventListener(
    //     'click',                
    //     function (e) {
    //         wii_minus = 1;            
    //         prevItem(wii_minus);
    //         document.getElementById(children[iter_current].id).focus();
                
    //     }     
    // );
     // NEXT BUTTON
    // document.getElementById('next_button').addEventListener(
    //     'click',                
    //     function (e) {   
    //         wii_plus = 1;            
    //         nextItem(wii_plus);
    //         document.getElementById(children[iter_current].id).focus();                    
                              
    //     }     
    // );
    // //UP BUTTON        
    // document.getElementById('up_button').addEventListener(
    //     'click',                
    //     function (e) {
    //         wii_minus = 1;            
    //         upItem(wii_minus);
    //         document.getElementById(children[iter_current].id).focus();
            
                
    //     }     
    // );
    //DOWN BUTTON        
    // document.getElementById('down_button').addEventListener(
    //     'click',                
    //     function (e) {
    //         wii_minus = 1;            
    //         downItem(wii_minus);
    //         document.getElementById(children[iter_current].id).focus();
                
    //     }     
    // );
    //COUNTDOWN BUTTON_B        
//     document.getElementById('button_b').addEventListener(
//         'click',                
//         function (e) {
//             setInterval(count_down,1000)

//             document.getElementById('button_b').disabled = true;            
                
//         }     
//     );        
    
// });