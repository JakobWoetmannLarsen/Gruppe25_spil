window.addEventListener("load", sidenVises);

let life = 0
let timeLeft = 10000;

function sidenVises() {
    console.log("siden vises");

    showStart();

}


function showStart() {
    console.log("showStart");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#hjerte").classList.add("pulse");
    document.querySelector("#snaplogo").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);
    document.querySelector("#settings").classList.add("spin");
    document.querySelector("#settings").addEventListener("click", showMenu);
}


function showMenu() {
    document.querySelector("#menu").classList.remove("hide");
    document.querySelector("#kryds").addEventListener("click", hideMenu);
}


function hideMenu() {
    document.querySelector("#menu").classList.add("hide");
}


function hideStart() {
    console.log("hideStart");
    document.querySelector("#hjerte").classList.remove("pulse");
    document.querySelector("#snaplogo").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#start").addEventListener("animationend", showIntro);
}


function showIntro() {
    console.log("showIntro");
    // document.querySelector("#start").removeEventListener("animationend", showIntro);
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#intro").classList.remove("hide");
    //    document.querySelector("#start").classList.add("show");
    document.querySelector("#next").classList.add("pulse");
    document.querySelector("#next").addEventListener("click", hideIntro);
}


function hideIntro() {
    console.log("hideIntro");
    document.querySelector("#next").classList.remove("pulse");
    document.querySelector("#intro").classList.add("fade_out");
    document.querySelector("#intro").addEventListener("animationend", showDilemma1);
}

function showDilemma1() {
    console.log("showDilemma1");
    // document.querySelector("#start").removeEventListener("animationend", showIntro);
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#dilemma1").classList.remove("hide");
    //    document.querySelector("#start").classList.add("show");
    document.querySelector("#next1").classList.add("pulse");
    document.querySelector("#next1").addEventListener("click", hideDilemma1);
}


function hideDilemma1() {
    console.log("hideDilemma1");
    document.querySelector("#next").classList.remove("pulse");
    document.querySelector("#dilemma1").classList.add("fade_out");
    document.querySelector("#dilemma1").addEventListener("animationend", showDilemma2);
}

function showDilemma2() {
    console.log("showDilemma2");
    // document.querySelector("#start").removeEventListener("animationend", showIntro);
    document.querySelector("#dilemma1").classList.add("hide");
    document.querySelector("#dilemma2").classList.remove("hide");
    //    document.querySelector("#start").classList.add("show");
    document.querySelector("#next2").classList.add("pulse");
    document.querySelector("#next2").addEventListener("click", hideDilemma2);
}


function hideDilemma2() {
    console.log("hideDilemma2");
    document.querySelector("#next").classList.remove("pulse");
    document.querySelector("#dilemma2").classList.add("fade_out");
    document.querySelector("#dilemma2").addEventListener("animationend", showDilemma3);
}

function showDilemma3() {
    console.log("showDilemma3");
    // document.querySelector("#start").removeEventListener("animationend", showIntro);
    document.querySelector("#dilemma2").classList.add("hide");
    document.querySelector("#dilemma3").classList.remove("hide");
    //    document.querySelector("#start").classList.add("show");
    document.querySelector("#next3").classList.add("pulse");
    document.querySelector("#next3").addEventListener("click", hideDilemma3);
}


function hideDilemma3() {
    console.log("hideDilemma3");
    document.querySelector("#next").classList.remove("pulse");
    document.querySelector("#dilemma3").classList.add("fade_out");
    document.querySelector("#dilemma3").addEventListener("animationend", showDilemma3);
}

/*function startGame() {
    console.log("start game");

    document.querySelector("#intro").removeEventListener("animationend", startGame);
    document.querySelector("#intro").classList.add("hide");
    document.querySelector("#fasan_container").classList.add("falling");
    document.querySelector("#fasan_sprite").classList.add("sprite");
    // så er der klasser på ... nu skal vi kunne klikke
    document.querySelector("#svamp").addEventListener("click", clickSvamp);
    document.querySelector("#svamp2").addEventListener("click", clickSvamp2);
    // start tiden
    tidenGaar();
}*/

/*function clickSvamp() {
    console.log("click svamp");
    getPoint();

    this.removeEventListener("click", clickSvamp);
    document.querySelector("#svamp").classList.add("hide");
    svamp_point++;
    console.log("Point")
    getPoint();

}*/

/*function tidenGaar() {
    console.log("tidenGaar");
    timeLeft--;
    console.log(timeLeft);
    if (timeLeft > 0) {
        setTimeout(tidenGaar, 1000);
    } else {
        gameOver()
    }


    document.querySelector("#time").textContent = timeLeft;

}*/

/*function loseLife() {
    console.log("loseLife");

    // Tjek først for game over
    if (life < 0) {
        // der er ikke flere liv tilbage
        gameOver();
    }
}

function gameOver() {
    console.log("Game over");

    // vis game over
    document.querySelector("#gameover").classList.remove("hide");
}*/


/*function getPoint() {
    console.log("getPoint");

    // Tjek først for game over
    if ((fasan_point > 0) && (broccoli_point > 0) && (gulerod_point > 0) && (svamp_point > 0)) {
        // der er ikke flere liv tilbage
        levelComplete();
    }
}

function levelComplete() {
    console.log("level Complete");

    // vis level complete
    document.querySelector("#levelcomplete").classList.remove("hide");
}*/
