//chrome links js page

// Listeners

 document.addEventListener('DOMContentLoaded', function() {
    var linkchrome = document.getElementById('chromeSettings');
    // onClick's logic below:
    linkchrome.addEventListener('click', function() {
        openChromePage();
    });
});



//listens for button click for flags
document.addEventListener('DOMContentLoaded', function() {
    var linkflags = document.getElementById('flags');
    // onClick's logic below:
    linkflags.addEventListener('click', function() {
        openFlagsPage();
    });
});

document.addEventListener('DOMContentLoaded', () => {
  var linkflags = document.getElementById('ext');
  linkflags.addEventListener('click', () => {
    openExt()
  })
})





// flags
function openFlagsPage() {
  //opens chrome flags Page
  chrome.tabs.create({url: "chrome://flags"});

}

// chrome settings page (open)
function openChromePage() {
  chrome.tabs.create({url: "chrome://settings"})
}

function openExt() {
  chrome.tabs.create({url: "chrome://extensions"})
}