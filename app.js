var student={
    name: "",
    type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
    document.getElementById('name').addEventListener("keyup",keyUp);
}

function keyUp(event){
    calculateNumericOutput();
}

function calculateNumericOutput(){
    student.name= document.getElementById('name').value;

    var totalValueName=0;
    for(var i=0;i<student.name.length;i++){
        totalValueName+=student.name.charCodeAt(i);
    }
        var output="The numeric value of persons name is:" +totalValueName;
        document.getElementById('output').innerText=output;
}