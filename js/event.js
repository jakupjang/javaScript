//상세 설명 보기 클릭 - 텍스트 보기
function showText(){
    //var text = document.getElementById("desc");
    //text.style.display = "block"; //수직으로 보이기

    document.getElementById("desc").style.display = "block";

    //var button = document.getElementById("open");
    //button.style.display = "none";

    document.getElementById("open").style.display = "none";
}
//상세 설명 닫기 클릭 - 텍스트 숨기기
function hideText(){
    var text = document.getElementById("desc");
    text.style.display = "none"; //텍스트 숨기기

    var button = document.getElementById("open");
    button.style.display = "block";
}