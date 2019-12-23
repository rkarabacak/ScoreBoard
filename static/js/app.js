

var children = Array.from(document.getElementsByClassName('iter'));
// children.forEach(child => console.log(child.id))
// children[0].focus();
// console.log("Uzunluk: "+children.length)

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
         
    $('#btn-match-switch').click();
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

var finish_status = {
    winner_player1:0,
    winner_player2: 1,
    draw: 2,
    cancelled: 3,
    postponed: 4,

}
// BUTTON B PROGRESS
var p1_foul_limit = 0;
var p2_foul_limit = 0;
var count_secons = 20;
var current_timeout = 0;
var current_countdown_limit = 10;
var foul_value;
var bar;
var secons;
var isPaused = false;
var width = 100;
var elem;
var minus = -1;
var plus = 1;
var value__;


var foul_limit_counter = 0;
var player_status = 1;
var player_switch = 0; // Oyuncu Yer değiştir
var p_name_switch = 0; // Oyun İsim kaydet
var color_switch = 0;
var Player1_name = 'OYUNCU 1';
var Player2_name= 'OYUNCU 2';



$(document).ready(function(){
    
    $('#btn-last-innings span').html(document.getElementById('id_last_shoot').options['selectedIndex', 0].text);
    $('#btn-drawn span').html(document.getElementById('id_allow_draw').options['selectedIndex', 0].text);
    $('#btn-btn-run-limit span').html(document.getElementById('id_active_run').options['selectedIndex', 0].text);
    $('#btn-innings-limit span').html(document.getElementById('id_inning_limit').options['selectedIndex', 0].text);
    $('#btn-timeout-limit span').html(document.getElementById('id_timeout_limit').options['selectedIndex', 0].text);
    $('#btn-run-limit span').html(document.getElementById('id_active_run').options['selectedIndex', 0].text);
    $('#btn-timer span').html(document.getElementById('id_time_force').options['selectedIndex', 0].text);
    $('#id_player1_name').val(Player1_name);
    $('#id_player2_name').val(Player2_name);
     // OYUNCU 1 ve 2  YER DEĞİŞİMİ
     $('#btn-name-switch').click(function (e) {
        // player_switch = (player_switch==0) ? (player_switch=1 ) : (player_switch=0);
        if (player_switch == 0){            
            $('#id_player1_name').val(Player2_name);
            $('#id_player2_name').val(Player1_name);            
            $('#id_positions_switched').val(player_switch);
            console.log("Player_status: "+player_switch+"| p1_name:  "+Player2_name + " | "+"p2_name: "+Player1_name)
            player_switch = 1;
            console.log(player_switch)
        }else { 
            $('#id_player1_name').val(Player1_name);
            $('#id_player2_name').val(Player2_name);            
            $('#id_positions_switched').val(player_switch);
            console.log("Player_status: "+player_switch+"| p1_name:  "+Player1_name + " | "+"p2_name: "+Player2_name)           
            
            player_switch = 0;
            console.log(player_switch)
        }      
      
    });
    // TOPLARI DEĞİŞİMİ
    $('#btn-color-switch').click(function (e) {
        // player_switch = (player_switch==0) ? (player_switch=1 ) : (player_switch=0);
        if (color_switch == 0){
            color_switch = 1;
            $('#player1-card div:first-child').removeClass('_text').addClass('_text_yellow');            
            $('#player2-card div:first-child').removeClass('_text_yellow').addClass('_text');            
            $('#player1_score').removeClass('_text').addClass('_text_yellow');            
            $('#player2_score').removeClass('_text_yellow').addClass('_text');
            $('#id_color_switched').val(color_switch);            
            
        }else {
            color_switch = 0;
            $('#player1-card div:first-child').removeClass('_text_yellow').addClass('_text');
            $('#player2-card div:first-child').removeClass('_text').addClass('_text_yellow');
            $('#player1_score').removeClass('_text_yellow').addClass('_text');            
            $('#player2_score').removeClass('_text').addClass('_text_yellow');
            $('#id_color_switched').val(color_switch);  
        }
        
        e.preventDefault();
        console.log('Player Status: '+player_switch)
    });
    // MAÇA DÖN btn-match-switch
    $('#btn-match-switch').click(function (e) {
        
        $('#p1_name').text($('#id_player1_name').val());
        $('#p2_name').text($('#id_player2_name').val());
        
    });
    // btn-player1_Name
    $('#btn-player1_Name').click(function (e) { 
        p_name_switch = 0;
        if(player_switch==0){
            $('#write').text(Player1_name);
        }else{
            $('#write').text(Player2_name);
        }
       
        
        
    });
    // btn-player2_Name
    $('#btn-player2_Name').click(function (e) { 
        p_name_switch = 1;
        if(player_switch==0){
            $('#write').text(Player2_name);
        }else{
            $('#write').text(Player1_name);
        }
        
        
    });
     //PLAYER NAMES     
     $('#btn-playerName-submit').click(function (e) {
        if (p_name_switch==0){
             
            Player1_name = $('#write').val();
        }else {
            Player2_name = $('#write').val();
         }
        // if ( player_switch==0){
        //     Player1_name = $('#player1-name-modal').val();
        //     Player2_name = $('#player2-name-modal').val();
        //     console.log("p1_name:  "+Player1_name + " | "+"p2_name: "+Player2_name)
            
        // } else{
        //     Player1_name = $('#player2-name-modal').val();
        //     Player2_name = $('#player1-name-modal').val();
            
        // }
        $('#p1_name').text(Player1_name);
        console.log("P1N:"+Player1_name)
        $('#id_player1_name').val(Player1_name);
        console.log("getp1n: "+$('#id_player1_name').val())
        $('#p2_name').text(Player2_name);
        $('#id_player2_name').val(Player2_name);
        console.log("Player_status: "+player_switch+"| p1_name:  "+Player1_name + " | "+"p2_name: "+Player2_name)
        
        
    });    
    
    $('#span_time').text(count_secons); // sayacın varsayılan dğerini atar
    current_timeout = parseInt($('#id_timeout_limit').val(), 10);
    foul_value = current_timeout    
    // BUTTON_1 FOUL PLUS PROGGRESS
    $('#btn_1-modal').click(function (e) {        
        console.log("foul_value_plus: "+foul_value)
        
        if(player_status==1){
            if (foul_value > 0){
                if(p1_foul_limit===foul_value){
                
                }else if (foul_value > p1_foul_limit){
                    current_countdown_limit +=count_secons;                        
                    p1_foul_limit++;                    
                    $('#p'+player_status+'_f'+p1_foul_limit).removeClass('bg-success').addClass('bg-danger');
                    console.log("p1_foul_limit: "+p1_foul_limit)
                }
            }     
        }else {
            if (foul_value > 0){
                if(p2_foul_limit===foul_value){
                
                }else if (foul_value > p2_foul_limit){
                    current_countdown_limit +=count_secons;                        
                    p2_foul_limit++;                    
                    $('#p'+player_status+'_f'+p2_foul_limit).removeClass('bg-success').addClass('bg-danger');
                    console.log("p2_foul_limit: "+p2_foul_limit)
                } 
            }   
        }
    });
    // BUTTON_2 FOUL MINUS
    $('#btn_2-modal').click(function (e) {        
        if(player_status==1){
            if ((p1_foul_limit <= 3) && (p1_foul_limit > 0)){                
                $('#p'+player_status+'_f'+p1_foul_limit).removeClass('bg-danger').addClass('bg-success');               
                if (current_countdown_limit > count_secons){ 
                    current_countdown_limit -=count_secons;                                                                  
                }
                if ( p1_foul_limit >0){                        
                    p1_foul_limit-=1;
                }                     
                console.log("p1_foul_limit: "+p1_foul_limit)                      
            }         
        }else{
            if ((p2_foul_limit <= 3) && (p2_foul_limit > 0)){ 
                $('#p'+player_status+'_f'+p2_foul_limit).removeClass('bg-danger').addClass('bg-success');               
                if (current_countdown_limit > count_secons){ 
                    current_countdown_limit -=count_secons;                                                                               
                }
                if ( p2_foul_limit >0){                        
                    p2_foul_limit-=1;
                }                                                  
                console.log("p2_foul_limit: "+p2_foul_limit)                      
            }      
        }     
    });
    // TIMEOUT LIMIT
    $('#id_timeout_limit').change(function (e) { 
        current_timeout = parseInt($('#id_timeout_limit').val(), 10);
        console.log("Change_time: "+current_timeout) 
        // return current_timeout;       
    });
    // MAC İPTAL    
    $('#btn-iptal-modal').click(function (e) {       
        $('#id_status').val(finish_status.cancelled);
    }); 
    //MAÇ HUKMEN OYUNCU 1 KAZANDI
    $('#p1-hukmen').click(function (e) {         
        $('#id_status').val(finish_status.winner_player1);        
    });
    // MAÇ HUKMEN OYUNCU 2 KAZANDI
    $('#p2-hukmen').click(function (e) {        
        $('#id_status').val(finish_status.winner_player2);        
    });   
    
    $('#match-save-modal').on('load', function() {
        
                       
        
     }) 
    // INIT PLAYER
    $('#player1-card').addClass('_player1-card');
    $('#button_a-modal').click(function (e) {
        let total_innings = parseInt($('#input_innings').val(), 10);
        if (current_countdown_limit==0){
            if ((p1_foul_limit<3)||(p2_foul_limit<3)){
                if(player_status===1) {  
                    p1_foul_limit +=1;
                    $('#p'+player_status+'_f'+p1_foul_limit).removeClass('bg-success').addClass('bg-danger');
                }else{
                    p2_foul_limit +=1;
                    $('#p'+player_status+'_f'+p2_foul_limit).removeClass('bg-success').addClass('bg-danger');
                }
            }    
        }    
            
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
        }
        // const peopleArray = Object.keys(run_obj).map(i => run_obj[i])
        run_list.push(JSON.stringify(run_obj))
        console.log(run_list)
        $('#run_score').val(0);
        current_countdown_limit = count_secons;
        clearInterval(bar);
        clearInterval(secons);
        isPaused = false;
        width = 100;
        elem.style.width = width + '%';
        $('#span_time').html(current_countdown_limit);
        $('#mybar').removeClass('bg-danger').addClass('bg-success');
    });   
    
    //COUNTDOWN PROGRESS Bar olarak 
       
    $('#button_b-modal').click(        
        function start(e) {            
            console.log(isPaused)
            if (!isPaused){                          
                elem = document.getElementById("mybar");                 
                console.log('current_countdown_limit'+current_countdown_limit)                 
                bar = setInterval(frame, 1000);
                secons = setInterval(frame2, 1000);
                function frame() {
                    if (width <= 0) {
                        clearInterval(bar);
                    } else if ( foul_limit_counter === 0){
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width        
                        elem.style.width = width + '%';                                
                    }else if ( foul_limit_counter == 1){                       
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width        
                        elem.style.width = width + '%';                        
                    }else if ( foul_limit_counter == 2){                        
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width           
                        elem.style.width = width + '%';                   
                    }
                    else if ( foul_limit_counter == 3){                       
                        bar_width = width / current_countdown_limit;                        
                        width= width - bar_width              
                        elem.style.width = width + '%';                       
                    }                    
                }
                //COUNTDOWN PROGRESS Sayısal olarak
                function frame2() {
                    if (current_countdown_limit <= 0) {
                        clearInterval(secons);
                        $('#span_time').text(" FOUL");
                        elem.style.width = '100%';                       
                    }else{    
                        $('#span_time').html(current_countdown_limit-=1);
                            if (current_countdown_limit <= (count_secons/5)){
                                $('#mybar').removeClass('bg-success').addClass('bg-danger');                    
                            }                                                               
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

    //btn-timer
    let timer_i=0;  
    $('#btn-timer').click(function (e) {        
        let x = document.getElementById('id_time_force')
        let xx = $('#id_time_force')        
        if (timer_i==0){
            xx.prop("selectedIndex", timer_i).val()           
            $('#btn-timer span').html(x.children[timer_i].text);
            timer_i=1;
        }else {
            xx.prop("selectedIndex", timer_i).val()           
            $('#btn-timer span').html(x.children[timer_i].text);
            timer_i=0;
        }       
    });  

    //btn-last-innings
    let lastshoot_i=0;  
    $('#btn-last-innings').click(function (e) {        
        let x = document.getElementById('id_last_shoot')
        let xx = $('#id_last_shoot')        
        if (lastshoot_i==0){
            xx.prop("selectedIndex", lastshoot_i).val()           
            $('#btn-last-innings span').html(x.children[lastshoot_i].text);
            lastshoot_i=1;
        }else {
            xx.prop("selectedIndex", lastshoot_i).val()           
            $('#btn-last-innings span').html(x.children[lastshoot_i].text);
            lastshoot_i=0;
        }       
    });  

    //btn-drawn
    let draw_i=0;  
    $('#btn-drawn').click(function (e) {        
        let x = document.getElementById('id_allow_draw')
        let xx = $('#id_allow_draw')        
        if (draw_i==0){
            xx.prop("selectedIndex", draw_i).val()           
            $('#btn-drawn span').html(x.children[draw_i].text);
            draw_i=1;
        }else {
            xx.prop("selectedIndex", draw_i).val()           
            $('#btn-drawn span').html(x.children[draw_i].text);
            draw_i=0;
        }       
    });  

    // btn-run-limit
    let active_i = 1;
    $('#btn-run-limit').click(function (event, value__) {
        let x = document.getElementById('id_active_run')
        let xx = $('#id_active_run')        
        if (active_i==x.length){
            active_i = 0;
        }else if(active_i < x.length){
            xx.prop("selectedIndex", active_i).val()           
            $('#btn-run-limit span').html(x.children[active_i].text);
            if ((value__< 0) && (active_i==0)){

                active_i = x.length;
            }
            active_i +=value__ 
        }       
    });  

    // btn-innings-limit
    let inning_i = 1;
    $('#btn-innings-limit').click(function (event, value__) {
        console.log("e.data.minus: "+value__)
        let x = document.getElementById('id_inning_limit')
        let xx = $('#id_inning_limit')        
        if (inning_i==x.length){
            inning_i = 0;
        }else if(inning_i < x.length){
            xx.prop("selectedIndex", inning_i).val()           
            $('#btn-innings-limit span').html(x.children[inning_i].text);
            if ((value__< 0) && (inning_i==0)){

                inning_i = x.length;
            }
            inning_i +=value__ 
        }       
    });
    
    // btn-timeout-limit
    let timeout_i = 1;
    $('#btn-timeout-limit').click(function (e) {
        
        let x = document.getElementById('id_timeout_limit')
        let xx = $('#id_timeout_limit')        
        if (timeout_i==x.length){
            timeout_i = 0;
        }else if(timeout_i < x.length){
            xx.prop("selectedIndex", timeout_i).val()
            $('#btn-timeout-limit span').html(x.children[timeout_i].text);
            timeout_i++;
        }       
    }); 
   

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
     });

    // BUTTON_A Maç Ayarları
    $('#button_a').click(function (e) { 
        value__ = plus        
        $(children[iter_current]).trigger('click',[value__])    
    });


    //BUTTON_PLUS-MODAL
    $("#plus_id-modal").click(function(){
        let plus = 1;
        let value_ = parseInt($('#run_score').val(), 10);
        console.log("Plus: " + value_)
        if (value_ >= 0){
            $('#run_score').val(value_ + plus);
        }    
    }); 
    //  BUTTON_PLUS
    let button_plus = 0;
    $("#button_plus").click(function(){
        value__= plus
        $(children[iter_current]).trigger('click',[value__])             
       
    });

    //BUTTON_MINUS-MODAL
    $("#minus_id-modal").click(function(){
        let minus = 1;
        let value_ = parseInt($('#run_score').val(), 10);
        console.log("Minus: " + value_)
        if (value_ >= 1){
            $('#run_score').val(value_ - minus);
        }    
    }); 
    // BUTTON_MINUS 
    $("#button_minus").click(function(){
        value__= minus
        $(children[iter_current]).trigger('click',[value__])       

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
    if ((iter_current - 4) < 0){

    }else{
        iter_current = iter_current -4        
    }   
    document.getElementById(children[iter_current].id).focus();  
    console.log("iter_up: "+iter_current)
    return iter_current
};
function downItem() {
    if (iter_current > (iterLength - 5)){

    }else{
        iter_current = iter_current + 4       
    }     
    document.getElementById(children[iter_current].id).focus();  
    console.log("iter_down: "+iter_current)
    return iter_current
};

function nextItem() {
    if (iter_current === (iterLength -1)){
        iter_current = 0;        
    }else{
        iter_current = iter_current + 1
        
    }      
    console.log("Element index: "+iter_current)
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
    console.log("Element index: "+iter_current)
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