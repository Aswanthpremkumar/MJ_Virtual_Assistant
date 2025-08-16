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
    
});