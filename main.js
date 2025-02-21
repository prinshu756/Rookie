let mental_age = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const suggestion1 = document.getElementById("suggestion1");
const suggestion2 = document.getElementById("suggestion2");
const suggestion3 = document.getElementById("suggestion3");
const score = document.getElementById("score");
const chrono_age = document.getElementById("age");
const show = document.getElementById("show");

function display_IQ() {
    // Get user inputs
    let text = parseInt(score.value);  // IQ score
    let chro_age = parseInt(chrono_age.value);  // Chronological age
    
    // Validate input
    if (isNaN(text) || isNaN(chro_age) || chro_age <= 0 || text <= 0) {
        alert("Please enter valid scores and age.");
        return;
    }

    // Calculate brain age index
    let idx = Math.floor(text / 10);
    let brain_age = parseInt(mental_age[idx]);

    // Calculate IQ (based on your formula)
    let IQ = Math.floor((brain_age / chro_age) * 100) + 20;
    console.log(IQ);

    // Display IQ
    show.innerHTML = "Your IQ is  " + IQ;

    // Provide suggestions based on IQ level
    suggestion1.innerHTML = "";
    suggestion2.innerHTML = "";
    suggestion3.innerHTML = "";

    if (IQ < 100) {
        low_student();
    } else if (IQ >= 120 && IQ < 170) {
        avg_student();
    } else if (IQ >= 170 && IQ < 250) {
       exc_student();
    } else {
        console.log("Enter correct age and score");
    }
}

function low_student() {
    suggestion1.innerHTML = "<div id='low'><p>You are a  low student. Here are some videos to improve yourself</p> <br><h1>for low student</h1><div class='video-grid'><div class='video-card'> <video controls><source src='video1.mp4' type='video/mp4'>Your browser does not support the video tag.</video> <h3></h3><p></p> </div><div class='video-card'><video controls> <source src='video2.mp4' type='video/mp4'>  Your browser does not support the video tag. </video><h3></h3><p></p> </div> <div class='video-card'> <video controls><source src='video3.mp4' type='video/mp4'>  Your browser does not support the video tag.</video> <h3></h3> <p></p></div> <div class='video-card'> <video controls> <source src='video4.mp4' type='video/mp4'>Your browser does not support the video tag.</video><h3></h3><p></p></div> </div></div>";
}
function avg_student() {
    suggestion2.innerHTML = "<div id='avg'><p>You are an average student. Here are some videos to improve yourself</p><br><h1>for mid student</h1><div class='video-grid'><div class='video-card'> <video controls><source src='video1.mp4' type='video/mp4'>Your browser does not support the video tag.</video> <h3></h3><p></p> </div><div class='video-card'><video controls> <source src='video2.mp4' type='video/mp4'>  Your browser does not support the video tag. </video><h3></h3><p></p> </div> <div class='video-card'> <video controls><source src='video3.mp4' type='video/mp4'>  Your browser does not support the video tag.</video> <h3></h3> <p></p></div> <div class='video-card'> <video controls> <source src='video4.mp4' type='video/mp4'>Your browser does not support the video tag.</video><h3></h3><p></p></div> </div></div>";
}
function exc_student() {
    suggestion3.innerHTML = "<div id='exc'><p>You are an excellent student. Here are some videos to improve yourself</p><br><h1>for excellent student</h1><div class='video-grid'><div class='video-card'> <video controls><source src='video1.mp4' type='video/mp4'>Your browser does not support the video tag.</video> <h3></h3><p></p> </div><div class='video-card'><video controls> <source src='video2.mp4' type='video/mp4'>  Your browser does not support the video tag. </video><h3></h3><p></p> </div> <div class='video-card'> <video controls><source src='video3.mp4' type='video/mp4'>  Your browser does not support the video tag.</video> <h3></h3> <p></p></div> <div class='video-card'> <video controls> <source src='video4.mp4' type='video/mp4'>Your browser does not support the video tag.</video><h3></h3><p></p></div> </div></div>";
}
// Adding an event listener to ensure the display_IQ function is called only once
document.getElementById("submitBtn").addEventListener("click", function() {
    display_IQ();
});

function playVideo(){
    const video=document.getElementById("video");
    video.play();
    video.setAttribute("controls","true");
}
