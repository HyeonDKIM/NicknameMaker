var GetLetter = []

function WriteToFile(LetterData) {
    var fso = CreateObject("Scripting.FileSystemObject"); 
    var s   = fso.CreateTextFile("letters.txt", True);
 
    var toWrite = LetterData;
 
    s.writeline(toWrite);
    s.Close();
 }

function GetLetterByUser(data){
    var tempGet = document.getElementById('GetLetter').value;
    if(tempGet==""){
        alert("공백을 입력하셨습니다!");
        return false;
    }
    GetLetter.push(tempGet);
    console.log(GetLetter);
    WriteToFile(tempGet);
}
