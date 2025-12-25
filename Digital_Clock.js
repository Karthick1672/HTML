function clearBoardsec() {
  // 0 digit
  document.getElementById("secondsNum02").style.background = "#003300";
  document.getElementById("secondsNum03").style.background = "#003300";
  document.getElementById("secondsNum01").style.background = "#003300";
  document.getElementById("secondsNum06").style.background = "#003300";
  document.getElementById("secondsNum07").style.background = "#003300";
  document.getElementById("secondsNum05").style.background = "#003300";
  document.getElementById("secondsNum04").style.background = "#003300";
  // 10 digit
  document.getElementById("secondsNum20").style.background = "#003300";
  document.getElementById("secondsNum30").style.background = "#003300";
  document.getElementById("secondsNum10").style.background = "#003300";
  document.getElementById("secondsNum60").style.background = "#003300";
  document.getElementById("secondsNum70").style.background = "#003300";
  document.getElementById("secondsNum50").style.background = "#003300";
  document.getElementById("secondsNum40").style.background = "#003300";
}
function clearBoardmin()
{
  // 0 digit
  document.getElementById("minutesNum2").style.background = "#003300";
  document.getElementById("minutesNum3").style.background = "#003300";
  document.getElementById("minutesNum1").style.background = "#003300";
  document.getElementById("minutesNum6").style.background = "#003300";
  document.getElementById("minutesNum7").style.background = "#003300";
  document.getElementById("minutesNum5").style.background = "#003300";
  document.getElementById("minutesNum4").style.background = "#003300";
  // 10 digit
  document.getElementById("minutesNum20").style.background = "#003300";
  document.getElementById("minutesNum30").style.background = "#003300";
  document.getElementById("minutesNum10").style.background = "#003300";
  document.getElementById("minutesNum60").style.background = "#003300";
  document.getElementById("minutesNum70").style.background = "#003300";
  document.getElementById("minutesNum50").style.background = "#003300";
  document.getElementById("minutesNum40").style.background = "#003300";
}
function clearBoardhour()
{
  document.getElementById("hoursNum2").style.background = "#003300";
  document.getElementById("hoursNum3").style.background = "#003300";
  document.getElementById("hoursNum1").style.background = "#003300";
  document.getElementById("hoursNum6").style.background = "#003300";
  document.getElementById("hoursNum7").style.background = "#003300";
  document.getElementById("hoursNum5").style.background = "#003300";
  document.getElementById("hoursNum4").style.background = "#003300";
  // 10 digit
  document.getElementById("hoursNum20").style.background = "#003300";
  document.getElementById("hoursNum30").style.background = "#003300";
  document.getElementById("hoursNum10").style.background = "#003300";
  document.getElementById("hoursNum60").style.background = "#003300";
  document.getElementById("hoursNum70").style.background = "#003300";
  document.getElementById("hoursNum50").style.background = "#003300";
  document.getElementById("hoursNum40").style.background = "#003300";
}

function seconds() {
    clearBoardsec();
    const time = new Date();
    let seconds = time.getSeconds(); // to get current seconds
    seconds = 0;
    let secLen = seconds.toString(); // convert to string, if the seconds are 1 digit / 2 digit
    if (secLen[0] == '1' && secLen.length == 2) {
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
    }
    if (secLen[0] == '2' && secLen.length == 2) {
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum40").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
    }
    if (secLen[0] == '3' && secLen.length == 2) {
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum40").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
    }
    if (secLen[0] == '4' && secLen.length == 2) {
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum40").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
    }
    if (secLen[0] == '5' && secLen.length == 2) {
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum40").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
    }
    if (secLen[1] == '1' && secLen.length == 2) {
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
    }
    if (secLen[1] == '2' && secLen.length == 2) {
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
    }
    if (secLen[1] == '3' && secLen.length == 2) {
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
    }
    if (secLen[1] == '4' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
    }
    if (secLen[1] == '5' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
    }
    if (secLen[1] == '6' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
    }
    if (secLen[1] == '7' && secLen.length == 2) {
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      // document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      // document.getElementById("secondsNum07").style.background = "lime";
      // document.getElementById("secondsNum05").style.background = "lime";
    }
    if (secLen[1] == '8' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
    }
    if (secLen[1] == '9' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
    }
    if (secLen[1] == '0' && secLen.length == 2) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      // document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
    }

    if (seconds == 1 && secLen.length == 1) {
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 2 && secLen.length == 1) {
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 3 && secLen.length == 1) {
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 4 && secLen.length == 1) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 5 && secLen.length == 1) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 6 && secLen.length == 1) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 7 && secLen.length == 1) {
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 8 && secLen.length == 1) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 9 && secLen.length == 1) {
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum04").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      // zero
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
    }
    if (seconds == 0 && secLen.length == 1) {
      document.getElementById("secondsNum20").style.background = "lime";
      document.getElementById("secondsNum10").style.background = "lime";
      document.getElementById("secondsNum30").style.background = "lime";
      document.getElementById("secondsNum60").style.background = "lime";
      document.getElementById("secondsNum70").style.background = "lime";
      document.getElementById("secondsNum50").style.background = "lime";
      // zero
      document.getElementById("secondsNum02").style.background = "lime";
      document.getElementById("secondsNum03").style.background = "lime";
      document.getElementById("secondsNum01").style.background = "lime";
      document.getElementById("secondsNum06").style.background = "lime";
      document.getElementById("secondsNum07").style.background = "lime";
      document.getElementById("secondsNum05").style.background = "lime";
    }
}
function minutes(){
  clearBoardmin();
  const time = new Date();
  let minutes = time.getMinutes(); // to get current minutes
  minutes = 0;
  let minLen = minutes.toString(); // convert to string, if the minutes are 1 digit / 2 digit
  if (minLen[0] == '1' && minLen.length == 2) {
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
  }
  if (minLen[0] == '2' && minLen.length == 2) {
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum40").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
  }
  if (minLen[0] == '3' && minLen.length == 2) {
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum40").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
  }
  if (minLen[0] == '4' && minLen.length == 2) {
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum40").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
  }
  if (minLen[0] == '5' && minLen.length == 2) {
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum40").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
  }
  if (minLen[1] == '1' && minLen.length == 2) {
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
  }
  if (minLen[1] == '2' && minLen.length == 2) {
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
  }
  if (minLen[1] == '3' && minLen.length == 2) {
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
  }
  if (minLen[1] == '4' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
  }
  if (minLen[1] == '5' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
  }
  if (minLen[1] == '6' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
  }
  if (minLen[1] == '7' && minLen.length == 2) {
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
  }
  if (minLen[1] == '8' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
  }
  if (minLen[1] == '9' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
  }
  if (minLen[1] == '0' && minLen.length == 2) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
  }

  if (minutes == 1 && minLen.length == 1) {
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 2 && minLen.length == 1) {
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 3 && minLen.length == 1) {
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 4 && minLen.length == 1) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 5 && minLen.length == 1) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 6 && minLen.length == 1) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 7 && minLen.length == 1) {
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 8 && minLen.length == 1) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 9 && minLen.length == 1) {
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum4").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    // zero
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
  }
  if (minutes == 0 && minLen.length == 1) {
    document.getElementById("minutesNum20").style.background = "lime";
    document.getElementById("minutesNum10").style.background = "lime";
    document.getElementById("minutesNum30").style.background = "lime";
    document.getElementById("minutesNum60").style.background = "lime";
    document.getElementById("minutesNum70").style.background = "lime";
    document.getElementById("minutesNum50").style.background = "lime";
    // zero
    document.getElementById("minutesNum2").style.background = "lime";
    document.getElementById("minutesNum3").style.background = "lime";
    document.getElementById("minutesNum1").style.background = "lime";
    document.getElementById("minutesNum6").style.background = "lime";
    document.getElementById("minutesNum7").style.background = "lime";
    document.getElementById("minutesNum5").style.background = "lime";
  }
}
function hours(){
  clearBoardhour();
  const time = new Date();
  // console.log(time);
  let hours = time.getHours(); // to get current hours
  hours = 0;
  let hourLen = hours.toString(); // convert to string, if the hours are 1 digit / 2 digit
  if (hourLen[0] == '1' && hourLen.length == 2) {
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
  }
  if (hourLen[0] == '2' && hourLen.length == 2) {
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum40").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
  }
  if (hourLen[0] == '3' && hourLen.length == 2) {
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum40").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
  }
  if (hourLen[0] == '4' && hourLen.length == 2) {
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum40").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
  }
  if (hourLen[0] == '5' && hourLen.length == 2) {
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum40").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
  }
  if (hourLen[1] == '1' && hourLen.length == 2) {
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
  }
  if (hourLen[1] == '2' && hourLen.length == 2) {
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
  }
  if (hourLen[1] == '3' && hourLen.length == 2) {
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
  }
  if (hourLen[1] == '4' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
  }
  if (hourLen[1] == '5' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
  }
  if (hourLen[1] == '6' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
  }
  if (hourLen[1] == '7' && hourLen.length == 2) {
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
  }
  if (hourLen[1] == '8' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
  }
  if (hourLen[1] == '9' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
  }
  if (hourLen[1] == '0' && hourLen.length == 2) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
  }

  if (hours == 1 && hourLen.length == 1) {
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 2 && hourLen.length == 1) {
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 3 && hourLen.length == 1) {
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 4 && hourLen.length == 1) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 5 && hourLen.length == 1) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 6 && hourLen.length == 1) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 7 && hourLen.length == 1) {
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 8 && hourLen.length == 1) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 9 && hourLen.length == 1) {
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum4").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    // zero
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
  }
  if (hours == 0 && hourLen.length == 1) {
    document.getElementById("hoursNum20").style.background = "lime";
    document.getElementById("hoursNum10").style.background = "lime";
    document.getElementById("hoursNum30").style.background = "lime";
    document.getElementById("hoursNum60").style.background = "lime";
    document.getElementById("hoursNum70").style.background = "lime";
    document.getElementById("hoursNum50").style.background = "lime";
    // zero
    document.getElementById("hoursNum2").style.background = "lime";
    document.getElementById("hoursNum3").style.background = "lime";
    document.getElementById("hoursNum1").style.background = "lime";
    document.getElementById("hoursNum6").style.background = "lime";
    document.getElementById("hoursNum7").style.background = "lime";
    document.getElementById("hoursNum5").style.background = "lime";
  }
}
function displayTime()
{
  seconds();
  minutes();
  hours();
}

setInterval(displayTime, 1000);