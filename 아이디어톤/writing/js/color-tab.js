var beforeColor; //이전에 선택된 컬러 저장 할 변수

//HTML 로딩이 끝난 후
window.onload = function () {
    init();
    };

    function init() {

    var pallet = [
        [
        "#fffdc7",
        "#ffedab",
        "#fffa7b",
        "#fff6aa",
        "#fff27e",
        "#fff48d",
        "#ffea3a",
        "#ffdf6b",
        "#f7e125",
        "#faff00",
        "#ffe500",
        ],
    ];

    //팔레트 개별 색상을 div로 묶어서 줄지어놓음
    //class=colorBox
    var tag = "";
    for (i = 0; i < pallet.length; i++) {
        for (j = 0; j < pallet[i].length; j++) {
        tag +=
            "<div id=" +
            pallet[i][j] +
            " class='colorBox' onclick='colorSet(this)'></div>";
        }
    }

    //팔레트 파싱
    document.getElementById("palletBox").innerHTML = tag;

    //색상 입히기
    var colorBox = document.getElementsByClassName("colorBox");
    for (i = 0; i < colorBox.length; i++) {
        colorBox[i].style.background = colorBox[i].id;
    }
    }

    // onclick event
    function colorSet(target) {
    document.querySelector(".space-left").style.background = target.id;

    if (beforeColor != undefined && beforeColor != null) {
        document.getElementById(beforeColor).className = document
        .getElementById(beforeColor)
        .className.replace(" active", "");
    }
    document.getElementById(target.id).className += " active";
    beforeColor = target.id;
}