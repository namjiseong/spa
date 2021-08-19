class teachable_machine_init{
    $teachable_machine_init = null;
    $time = null;
    constructor($target){
        const $teachable_machine_init = document.createElement("div");
      $teachable_machine_init.className = "teachable_machine_init";
      $teachable_machine_init.innerHTML = `
      <h1>this is main</h1>
        <div id="today"></div>
        <div id="sec"></div>
        <div id="count"></div>
        
        <div>Teachable Machine Pose Model</div>
    <button type="button" onclick="init()">Start</button>
    <section class="picture">
        <div><canvas id="canvas"></canvas></div>
        <img id="pose" src="images/posture.png" width="400" height="400">
    </section>
    <section class="labels">
    <div id="label-container"></div>
    <div id="progress"></div>
    </section>
    
    
      `;
      this.$teachable_machine_init = $teachable_machine_init;
      $target.appendChild(this.$teachable_machine_init);

      const $time = document.createElement("script");
      $time.className = "timecount";
      $time.innerHTML = `
      var audio = new Audio('/sound/alarm.wav');
      
      var today = new Date();
            var timerId = null;
            
            function check() {
                
                
                var now = new Date();
                document.getElementById("today").innerHTML=now;
                var sec = Math.round((now - today) / 1000);
                document.getElementById("sec").innerHTML=sec + "초";
                if (sec > 20){
                    
                    if (webcam_status == true){
                        if (sound_check == false){
                            audio.play();
                            sound_check = true;
                            window.open("/alert", "_blank", "width=200, height=200, top=300, left=500")
                        }
                        
                        webcam.play();
                        canvas.style.display="block";
                    }
                    
                }
                    
                
            }
            
            timerId = setInterval(check, 1000);
            
      `;

      this.$time = $time;
      $target.appendChild(this.$time);
    }
}