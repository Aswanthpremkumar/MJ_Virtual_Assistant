$(document).ready(function () {
    $('.text').textillate({
        loop:true,
        sync: true,
        in:{
            effect: "bouncein",
        },
        out:
        {
            effect: "bounceout",
        }
    });
});