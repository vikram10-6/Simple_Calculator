let numbers = ""
let button = document.querySelectorAll(".buttons");
Array.from(button).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                numbers = eval(numbers);
            document.querySelector(".number-box").value = numbers
            } catch (error) {
                alert("Wrong Expression")
            }
        }
        else if(e.target.innerHTML == "del"){
            let arr = numbers.split("")
            arr[arr.length - 1]=""
            let cis = arr.toString().replaceAll(",","")
            numbers = cis
            // console.log(cis)
            // number = numbers.slice(-1)

            document.querySelector(".number-box").value = cis
        }
        else if(e.target.innerHTML == "CE"){
            numbers =""
            document.querySelector(".number-box").value = numbers
        }
        else {
            numbers = numbers + e.target.innerHTML
            document.querySelector(".number-box").value = numbers
        }

    })
})
