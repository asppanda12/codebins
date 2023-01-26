function myfunc()
{

  var userImageLink = 
  "";
                var time_start, end_time;
              
              // The size in bytes
              var downloadSize = 5616998;
              var downloadImgSrc = new Image();
    
              downloadImgSrc.onload = function () {
                  end_time = new Date().getTime();
                  displaySpeed();
              };
              time_start = new Date().getTime();
              downloadImgSrc.src = userImageLink;
              document.write("time start: " + time_start);
              document.write("<br>");
    
              function displaySpeed() {
                  var timeDuration = (end_time - time_start) / 1000;
                  var loadedBits = downloadSize * 8;
                  
                  /* Converts a number into string
                     using toFixed(2) rounding to 2 */
                  var bps = (loadedBits / timeDuration).toFixed(2);
                  var speedInKbps = (bps / 1024).toFixed(2);
                  var speedInMbps = (speedInKbps / 1024).toFixed(2);
                  if(speedInMbps>=2)
                  document.getElementById("internet").innerHTML = "YOUR INTERNET IS OK";
                  else
                  document.getElementById("internet").innerHTML = "YOUR INTERNET IS RUNNING SLOW";
                };
}
