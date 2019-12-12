

$.ajax({
    url:  '/match/main',
    type:  'get',
    dataType:  'json',
    success: function  (data) {
        let rows =  '';
        data.matchs.forEach(match => {
        rows += `
        <tr id="match-${match.id}">
            <td>${match.id}</td>
            <td>${match.status}</td>
            <td>${match.palyer1_name}</td>
            <td>${match.player2_name}</td>
            <td>${match.player1_id}</td>
            <td>${match.player2_id}</td>
            <td>${match.runs}</td>
            <td>${match.seconds}</td>
            <td>${match.active_run}</td>
            <td>${match.allow_draw}</td>
            <td>${match.last_shoot}</td>
            <td>${match.score_limit}</td>
            <td>${match.inning_limit}</td>
            <td>${match.timeout_limit}</td>
            <td>${match.player1_timeout}</td>
            <td>${match.player2_timeout}</td>
            <td>${match.player1_timeavg}</td>
            <td>${match.player2_timeavg}</td>
            <td>${match.positions_switched}</td>
            <td>${match.color_switched}</td>
            <td>${match.time_force}</td>
            <td>${match.tour_name}</td>
            <td>${match.group_name}</td>
            <td>
                <button class="btn deleteBtn" onClick="deleteMatch(${match.id})">Delete</button>
                <button class="btn updateBtn" onClick="updateMatch(${match.id})">Update</button>
            </td>
        </tr>`;
    });
    $('#Match-Table > tbody').append(rows);
    
    }
});

function  deleteMatch(id){
    console.log(id)
    let action = confirm("Silmek istediğinizden emin misiniz?");
    if (action != false){
        $.ajax({
            url:  '{% url "match_delete" %}',
            data: {
                'id': id,
            },                    
            dataType:  'json',
            success:  function (data) {
                if (data.deleted){
                    $('#Match_Table #match-' + id).remove();
                }                
            }
        });
    }  
}