
window.onload = function(){
    var url = window.ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats;

    console.log("Our extension loaded", url);

    var container = document.getElementById("top-level-buttons-computed");
    while(container==null){
        container = document.getElementById("top-level-buttons-computed");
    }
    
    var btn = document.createElement("button");
    btn.className = "style-scope ytd-menu-renderer force-icon-button style-default size-default";
    btn.setAttribute("role", "button");
    btn.innerText = "Download";

    container.appendChild(btn);

    console.log(container, btn);
}
