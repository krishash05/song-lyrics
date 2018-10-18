$(document).ready(function(){
$('#find-lyrics').on("submit", function(e){
    e.preventDefault();
    $(".lyric-container").text("loading...")

    var artist = $('#artist').val();
    var song = $('#song').val();

    var url = "https://api.lyrics.ovh/v1/" + artist + "/" + song +"";
    
         // fetch(url).then(function(response){
        //     var processedLyrics = response.json();
        //     return processedLyrics;

    fetch(url).then(response => {
        var processedLyrics = response.json();
        return processedLyrics;
    }).then(processedLyrics => {
        $(".lyric-container").html("<p>" + processedLyrics.lyrics + "</p>");
    }).catch(error => {
        console.log(error);
        alert("Please enter a valid artist or title")
    });

//     $.ajax({
//         type: "GET",
//         url: "https://api.lyrics.ovh/v1/" + artist + "/" + song +"",
//         dataType: "json",
//         success: function(data) { 
//             $(".lyric-container").html("<p>" + data.lyrics + "</p>");
//         },
//         error: function(xhr, status, e) {
//             console.log(status, e);
//             //$(".lyric-container").html("<p>Please enter a valid song or artist</p>");
//             alert("Please enter a valid artist or song");
//     }
// });
});
});