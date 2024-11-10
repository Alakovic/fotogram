let myImgs= [
    {src:"images/balloon-2944217_1920.png", title: "Ballon"},
    {src:"images/bicycle-6979441_1920.png", title: "Bicycle"},
    {src:"images/cologne-3742546_1280.png", title: "Cologne Cathedral"},
    {src:"images/cologne-4866182_1280.png", title: "Cologne"},
    {src:"images/cologne-5300430_1280.png", title: "Cologne-Winter"},
    {src:"images/cologne-6624212_1280.png", title: "Hohenzollernbrücke"},
    {src:"images/emperor-wilhelm-i-2299284_1280.png", title: "Emperor Wilhelm I"},
    {src:"images/football-2845838_1280.png", title: "Rhein Energy Stadion"},
    {src:"images/seagull-5481165_1280.png", title: "Seagull"},
    {src:"images/train-619082_1280.png", title: "Main Trainstation"}
];


let currentIndex=0;


function render() {
    let contentRef=document.getElementById('content');
    contentRef.innerHTML = '';

    for(let index=0;index<myImgs.length;index++){
        contentRef.innerHTML += getNotesHtml(index);
    }

    document.getElementById('closeBtn').onclick = hideOverlay;
}


function getNotesHtml(index) {
    return ` <div>
                <img onclick="showOverlay(${index})"  src="${myImgs[index].src}" alt="Image ${index+1}" >
            </div>` ;                          
}


function showOverlay(index) {
    currentIndex = index; 
    updateOverlay(); 
    setupNavigation();
    document.getElementById('overlay').style.display = 'flex'; 
}


function setupNavigation(){
    document.getElementById('prevBtn').onclick = showPrevious;
    document.getElementById('nextBtn').onclick = showNext;
}


function updateOverlay() {
    let overlayImg = document.getElementById('overlayImg');
    let overlayTitle = document.getElementById('overlayTitle');
    let imageCounter = document.getElementById('imageCounter');
    
    overlayImg.src = myImgs[currentIndex].src; 
    overlayTitle.textContent = myImgs[currentIndex].title; 
    imageCounter.textContent = `${currentIndex + 1}/${myImgs.length}`; 
}


function showPrevious() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : myImgs.length - 1; 
    updateOverlay();
}


function showNext() {
    currentIndex = (currentIndex < myImgs.length - 1) ? currentIndex + 1 : 0; 
    updateOverlay();
}


function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
}





