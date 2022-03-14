function showPhrase(value) {
    var rangeInput = document.getElementById("q1in");
    var value = rangeInput.value;

    if (value == 0) {
        document.getElementById("phrase").innerHTML="zero";
    }
    if (value == 1) {
        document.getElementById("phrase").innerHTML="one";
    }

    if (value == 2) {
        document.getElementById("phrase").innerHTML="two";
    }

    if (value == 3) {
        document.getElementById("phrase").innerHTML="three";
    }

    if (value == 4) {
        document.getElementById("phrase").innerHTML="four";
    }

    if (value == 5) {
        document.getElementById("phrase").innerHTML="five";
    }
    if (value == 6) {
        document.getElementById("phrase").innerHTML="six";
    }

}
