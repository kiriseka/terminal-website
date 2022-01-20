document.addEventListener("DOMContentLoaded", function () {
  document.getElementsByTagName("form")[0].onsubmit = function (evt) {
    evt.preventDefault(); // Preventing the form from submitting
    checkWord(); // Do your magic and check the entered word/sentence
    window.scrollTo(0, 150);
  };

  // Get the focus to the text input to enter a word right away.
  document.getElementById("terminalTextInput").focus();

  // Getting the text from the input
  var textInputValue = document.getElementById("terminalTextInput").value.trim();

  //Getting the text from the results div
  var textResultsValue = document.getElementById("terminalReslutsCont").innerHTML;

  // Clear text input
  var clearInput = function () {
    document.getElementById("terminalTextInput").value = "";
  };

  // Scrtoll to the bottom of the results div
  var scrollToBottomOfResults = function () {
    var terminalResultsDiv = document.getElementById("terminalReslutsCont");
    terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  };

  // Create WinBox
  function createContactBox (){
    contact = new WinBox({
      // modal : true,
      title: "Contact Me",
      width: "600px",
      height: "500px",
      background: "#f2f2f2",
      top: 90,
      right: 50,
      bottom: 50,
      left: 80,
      class: ["contact"],
      mount: document.getElementById("contact-form"),
    });
  }

  // Scroll to the bottom of the results
  scrollToBottomOfResults();

  // Add text to the results div
  var addTextToResults = function (textToAdd) {
    document.getElementById("terminalReslutsCont").innerHTML += "<p>" + textToAdd + "</p>";
    scrollToBottomOfResults();
  };

  // Getting the list of keywords for help & posting it to the screen
  var postHelpList = function () {
    // Array of all the help keywords
    var helpKeyWords = [
      "These are some commands you can use:",
      "- '!education' will display the education that i have taken.",
      "- '!skill' will display the skill that i have learned.",
      "- '!project' will display some projects that i have created.",
      "- '!about' will display the description about myself.",
      "- '!github' will redirect you to my github page.",
      "- '!instagram' will redirect you to my instagram account.",
      "- '!contact' if you want to contact me.",
      "- '!time' will display the current time.",
      "- '!date' will display the current date.",
      "- '!google' + keyword to search directly in Google.",
      "=> And many more easter eggs you can find !",
    ].join("<br>");
    addTextToResults(helpKeyWords);
  };

  // Getting the time and date and post it depending on what you request for
  var getTimeAndDate = function (postTimeDay) {
    var timeAndDate = new Date();
    var timeHours = timeAndDate.getHours();
    var timeMinutes = timeAndDate.getMinutes();
    var dateDay = timeAndDate.getDate();
    console.log(dateDay);
    var dateMonth = timeAndDate.getMonth() + 1; 
    var dateYear = timeAndDate.getFullYear();

    if (timeHours < 10) {
      // if 1 number display 0 before it.
      timeHours = "0" + timeHours;
    }

    if (timeMinutes < 10) {
      // if 1 number display 0 before it.
      timeMinutes = "0" + timeMinutes;
    }

    var currentTime = timeHours + ":" + timeMinutes;
    var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

    if (postTimeDay == "time") {
      addTextToResults(currentTime);
    }
    if (postTimeDay == "date") {
      addTextToResults(currentDate);
    }
  };

  // Opening links in a new window
  var openLinkInNewWindow = function (linkToOpen) {
    window.open(linkToOpen, "_blank");
    clearInput();
  };

  // Having a specific text reply to specific strings
  var textReplies = function () {
    switch (textInputValueLowerCase) {
      // replies

      case "i love you":
      case "love you":
      case "love":
        clearInput();
        addTextToResults("Aww! Love you too ❤");
        break;

      case "informatika":
      case "informatika!":
      case "informatika?":
      case "informatika ?":
      case "!informatika":
        clearInput();
        addTextToResults("SAKTI !!!");
        break;

      case "!name":
      case "!fullname":
      case "!nama":
      case "who are you?":
        clearInput();
        addTextToResults("My name is Maulana Hamdani.");
        break;

      case "hello":
      case "hi":
      case "hola":
        clearInput();
        addTextToResults("Hello, how can I help you out ?");
        break;

      case "what the":
      case "wtf":
        clearInput();
        addTextToResults("F***.");
        break;

      case "shit":
      case "poop":
      case "💩":
        clearInput();
        addTextToResults("💩");
        break;

      case "!contact":
      case "contact":
      case "!contactme":
        clearInput();
        createContactBox();
        addTextToResults("💩");
        break;

      case "!tentang":
      case "!aboutme":
      case "!about":
        clearInput();
        addTextToResults("Hello, my name is Maulana and Im a web programmer especially front end programming. With more than 1 year experience in web programming, i have found something that makes me passionate about.");
        break;

      case "!education":
        clearInput();
        addTextToResults("- Islamic State University Sunan Gunung Djati (Bandung, Indonesia) <br>" + "&ensp;&ensp;Informatics Engineering (2019 - now) <br>" + "- Senior Highschool 1 Sumber (2016 - 2019) <br>");
        break;

      case "!skill":
      case "!skills":
        clearInput();
        addTextToResults("- HTML <br>" + "- CSS <br>" + "- Laravel <br>" + "- Bootstrap <br>" + "- Java <br>" + "- Android Studio <br>");
        break;

      // case "github":
      //   clearInput();
      //   addTextToResults("Github")
      //   break;

      // replies

      // case "youtube":
      //   clearInput();
      //   addTextToResults("Type youtube + something to search for.");
      //   break;

      case "!google":
        clearInput();
        addTextToResults('Type "!google" + your things.');
        break;

      case "!time":
      case "what time is it?":
      case "what time is it ?":
        clearInput();
        getTimeAndDate("time");
        break;

      case "!date":
        clearInput();
        getTimeAndDate("date");
        break;

      case "!help":
      case "help":
      case "?":
        clearInput();
        postHelpList();
        break;

      default:
        clearInput();
        addTextToResults("<p><i>The command " + '"<b>' + textInputValue + '</b>"' + ' was not found. <br>Try: "<b>!help</b>" to see all commands available.</i></p>');
        break;
    }
  };

  // Main function to check the entered text and assign it to the correct function
  var checkWord = function () {
    textInputValue = document.getElementById("terminalTextInput").value.trim(); //get the text from the text input to a variable
    textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

    if (textInputValue != "") {
      //checking if text was entered
      addTextToResults("<p class='userEnteredText'><span class='maulana'>maulana@hamdani</span>:<span class='garis'>~</span>$ " + textInputValue + "</p>");
      if (textInputValueLowerCase.substr(0, 8) == "!google ") {
        openLinkInNewWindow("https://www.google.com/search?q=" + textInputValueLowerCase.substr(7));
        addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
      } else if (textInputValueLowerCase == "!github") {
        openLinkInNewWindow("https://github.com/kiriseka");
        addTextToResults("<i>My github should be opened on the new tab now.</i>");
      } else if (textInputValueLowerCase == "!instagram" || textInputValueLowerCase == "!ig") {
        openLinkInNewWindow("https://www.instagram.com/maulananjay/");
        addTextToResults("<i>My instagram should be opened on the new tab now.</i>");
      } else {
        textReplies();
      }
    }
  };
});

const header = document.getElementById("header");
header.addEventListener("click", createBox);

function createBox() {
  var isWinbox = document.getElementsByClassName("winbox");
  console.log(isWinbox);

  if (isWinbox.length > 0) {
    winbox.minimize();
  } else {
    winbox = new WinBox({
      // modal : true,
      title: "maulana@hamdani:~",
      width: "600px",
      height: "500px",
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      class: ["terminal-window"],
      mount: document.getElementById("terminalCont"),
    });
  }
}
