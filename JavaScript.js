$(document).ready(function(){

var reading = 65;
var listening = 65;
var speaking = 65;
var writing = 65;
var q3 = 90;
var q4 = 90;
setUp();

$('#reading .Up').click( function () {
    reading = reading + 10;
    displayInputs("rScore", reading);
    calculate();
}
);

$('#writing .Up').click( function () {
    writing = writing + 10;
    displayInputs("wScore", writing);
    calculate();
}
);

$('#listening .Up').click( function () {
    listening = listening + 10;
    displayInputs("lScore", listening);
    calculate();
}
);

$('#speaking .Up').click( function () {
    speaking = speaking + 10;
    displayInputs("sScore", speaking);
    calculate();
}
);


$('#reading .Down').click( function () {
    reading = reading - 10;
    displayInputs("rScore", reading);
    calculate();
}
);

$('#writing .Down').click( function () {
    writing = writing - 10;
    displayInputs("wScore", writing);
    calculate();
}
);

$('#listening .Down').click( function () {
    listening = listening - 10;
    displayInputs("lScore", listening);
    calculate();
}
);

$('#speaking .Down').click( function () {
    speaking = speaking - 10;
    displayInputs("sScore", speaking);
    calculate();
}
);

$('#q3 .Up').click( function () {
    q3 = q3 + 1;
    displayInputs("q3Score", q3);
    calculate();
}
);

$('#q3 .Down').click( function () {
    q3 = q3 - 1;
    displayInputs("q3Score", q3);
    calculate();
}
);

$('#q4 .Up').click( function () {
    q4 = q4 + 1;
    displayInputs("q4Score", q4);
    calculate();
}
);

$('#q4 .Down').click( function () {
    q4 = q4 - 1;
    displayInputs("q4Score", q4);
    calculate();
}
);


function setUp() {
    displayInputs("rScore",reading);
    displayInputs("wScore",writing);
    displayInputs("sScore",speaking);
    displayInputs("lScore",listening);
    displayInputs("q3Score", q3);
    displayInputs("q4Score", q4);
}

function displayInputs(whereID, what) {
    document.getElementById(whereID).innerHTML = what + "%";
};



function clickUp(test) {
    test =+ 10;
    var id = test.substr(0,1)+"Score";
    displayInputs(id, test);
    calculate();
};

function clickDown(test) {
    test =- 10;
    var id = test.substr(0,1)+"Score";
    displayInputs(id,test);
};

function calculate() {
    sumPerf = (writing + speaking)/2;
    exam = (listening + reading)/2;
    //q4formal = q4 * .7;
    //q4informal = q4 * .3;
    //q4final = q4formal * .45 + q4informal * .3 + sumPerf * .25;
    q4final = q4*.75 + sumPerf*.25;
    final = exam * .2 + q3*.4 + q4final*.4;
    final = Math.round(final)
    displayInputs("Grade", final)
};
});