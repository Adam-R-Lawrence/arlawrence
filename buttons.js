


var darkMode = (function () {
    var isDarkMode = false;

    return function () {
        if (isDarkMode){
            isDarkMode = false
            return isDarkMode;
        }
        if (!isDarkMode){
            isDarkMode = true
            return isDarkMode;
        }
    }
})();

document.getElementById("viewingMode").addEventListener ("click", function1)

// 3. Add event handler
function function1(){
    myFunction();
    /*
    if(darkMode()) {
        document.getElementById("test").style.background = 'white';
        document.getElementById("viewingMode").textContent = "Light Mode";

    } else {
        document.getElementById("test").style.background = '#1d2228';
        document.getElementById("viewingMode").textContent = "Dark Mode";

    }

     */
}

function myFunction() {
    var element = document.getElementById("theme");
    element.classList.toggle("mystyle");
}



var language = (function () {
    var Chinese = false;

    return function () {
        if (Chinese){
            Chinese = false
            return Chinese;
        }
        if (!Chinese){
            Chinese = true
            return Chinese;
        }
    }
})();

document.getElementById("languageMode").addEventListener ("click", languageSwitch)


// 3. Add event handler
function languageSwitch(){
    if(language()) {
        document.getElementById("languageMode").textContent = "English";

        const engDivList = [...document.getElementsByName('en')];
        engDivList.forEach((engDiv) => {
            engDiv.style.visibility = "hidden";
            engDiv.style.display = "none";
        });
        const cnDivList = [...document.getElementsByName('cn')];
        cnDivList.forEach((cnDiv) => {
            cnDiv.style.visibility = "visible";
            cnDiv.style.display = "inline";
        });
    } else {
        document.getElementById("languageMode").textContent = "中文";

        const engDivList = [...document.getElementsByName('en')];
        engDivList.forEach((engDiv) => {
            engDiv.style.visibility = "visible";
            engDiv.style.display = "inline";
        });
        const cnDivList = [...document.getElementsByName('cn')];
        cnDivList.forEach((cnDiv) => {
            cnDiv.style.visibility = "hidden";
            cnDiv.style.display = "none";
        });

        }
}

$(function(){
    const cnDivList = [...document.getElementsByName('cn')];
    cnDivList.forEach((cnDiv) => {
        cnDiv.style.visibility = "hidden";
        cnDiv.style.display = "none";
    });
});
