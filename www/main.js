$(document).ready(function () {
    $('.text').textillate({
        loop:true,
        sync: true,
        in:{
            effect: "bounceIn",
        },
        out:
        {
            effect: "bounceOut",
        }
    });

        //siriwave
        var siriWave = new SiriWave({
        container: document.getElementById("siri-container"),
        width: 800,
        height: 200,
        style: "ios9",
        amplitude: "1",
        speed: "0.30",
        autostart: true,
    });
    //sirimessage
    $('.siri-message').textillate({
        loop:true,
        sync: true,
        in:{
            effect: "fadeInUp",
            sync: true,
        },
        out:
        {
            effect: "fadeOutUp",
            sync: true,
        }
    });

    //mic click
    $("#Micbtn").click(function () { 
        eel.playassistantsound()
        $("#Oval").attr("hidden",true);
        $("#SiriWave").attr("hidden",false);
        eel.allcommands()()
        
    });

    function doc_keyUp(e) {
        // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
        
        if (e.key === 'j' && e.metaKey) {
            eel.playassistantsound()
            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden",false);
            eel.allcommands()()
        }
    }
    document.addEventListener('keyup', doc_keyUp, false);

    function PlayAssistant(message) {

        if (message != "") {

            $("#Oval").attr("hidden", true);
            $("#SiriWave").attr("hidden", false);
            eel.allcommands(message);
            $("#chatbox").val("")
            $("#Micbtn").attr('hidden', false);
            $("#Sendbtn").attr('hidden', true);

        }

    }

        // toogle fucntion to hide and display mic and send button 
    function ShowHideButton(message) {
        if (message.length == 0) {
            $("#Micbtn").attr('hidden', false);
            $("#Sendbtn").attr('hidden', true);
        }
        else {
            $("#Micbtn").attr('hidden', true);
            $("#Sendbtn").attr('hidden', false);
        }
    }

    // key up event handler on text box
    $("#chatbox").keyup(function () {

        let message = $("#chatbox").val();
        ShowHideButton(message)
    
    });
    
    // send button event handler
    $("#Sendbtn").click(function () {
    
        let message = $("#chatbox").val()
        PlayAssistant(message)
    
    });
    

    // enter press event handler on chat box
    $("#chatbox").keypress(function (e) {
        key = e.which;
        if (key == 13) {
            let message = $("#chatbox").val()
            PlayAssistant(message)
        }
    });

    
});