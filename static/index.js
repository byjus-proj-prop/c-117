//Crie a variável de data

var date = new Date();
console.log(date);

let display_date = "DATA: "+date.toLocaleDateString("pt-BR", {weekday:"short", year:"numeric", 
                                                              month:"short", day:"numeric"})
console.log(display_date)
//Carregue o DOM HTML
$(document).ready(function() {
    $("#display_date").html(display_date);
});
//Defina a variável para armazenar a emoção prevista


//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML

//seletor jQuery e ação de clique
let predict_emotion;
$(function () {
    $("#predict_button").click(function () {
        let input_data = {text: $("#text").val()};
        //chamada AJAX

        $.ajax({
            type: "POST",
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            contentType: 'application/json',
            success: function (result) {
                
                // Resultado recebido do Flask ----->JavaScript
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                
                // Exibir resultado usando JavaScript----->HTML
                $("#prediction").html(predicted_emotion)
                $('#prediction').css("display", "block");

                $("#emo_img_url").attr('src', emo_url);
                $('#emo_img_url').css("display", "block");
            },
            error: function (result) {
                alert(result.responseJSON.message)
            }
            
        });
    });
})
