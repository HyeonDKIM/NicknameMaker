var GetLetter = []

function GetLetterByUser(data){
    var tempGet = document.getElementById('GetLetter').value;
    if(tempGet==""){
        alert("공백을 입력하셨습니다!");
        return false;
    }
    else if(tempGet.length==1){
        alert("두 글자 이상으로 입력해주세요!");
        return false;
    }
    GetLetter.push(tempGet);
    console.log(GetLetter);
    WriteToFile(tempGet);
}
