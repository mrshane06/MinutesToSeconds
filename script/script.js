function convertToSeconds() {
    const minutes = document.getElementById('minutes').value;
    const seconds = (minutes * 60);
    document.getElementById('answer').innerHTML =  seconds ;
}