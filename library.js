// getting data from localstorage
let bookname = localStorage.getItem("bookname");
let auther = localStorage.getItem("auther");
let typed = localStorage.getItem("type");
if (bookname == null) {
    data = [];
    writer = [];
    tybook = [];
}
else {
    data = JSON.parse(bookname);
    writer = JSON.parse(auther);
    tybook = JSON.parse(typed);
}
show1()


// creating book class
class Book {
    constructor(bookname, auther, typed) {
        this.bookname = bookname;
        this.auther = auther;
        this.type = typed;
    }
}
class Display {
    // defining validate method to get eligible Bookname and Auther name.
    validate(bookname, auther) {
        if (bookname.length < 2 || auther.length < 2) {
            return false
        }
        else {
            return true;
        }
    }
    // method to show success or error msg on output screen of addbook page
    showmsg(types, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if (types === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${types} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                               
                            </div>`;
        // function for atomaticaly disapper msg
        setTimeout(function () {
            message.innerHTML = ''
        }, 10000);
    }
    // fun display msg whether book is given to you or not
    showmsged(types, displayMessage) {
        let message = document.getElementById('messaged');
        let boldText;
        if (types === 'success') {
            boldText = 'Success';
        }
        else {
            boldText = 'Error!';
        }
        message.innerHTML = `<div class="alert alert-${types} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                               
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 10000);
    }
    // fun to clear the input of form
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    };
};
function show1() {
    var elem1, elem2, elem3, index;
    var array1 = [];
    var array2 = [];
    var array3 = [];
    var cardBody = document.getElementById("card-body");

    data.forEach(function (element1, index1) {
        index = index1
        elem1 = element1
        array1.push(elem1)

    });
    writer.forEach(function (element2) {
        elem2 = element2
        array2.push(elem2)

    });
    tybook.forEach(function (element3) {
        elem3 = element3
        array3.push(elem3)

    });
    // fun display data in table
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] == null) {
            continue;
        }
        else {
            let uiString = `<tr><th scope="row">${i + 1}</th>
         <td>${array1[i]}</td>
         <td>${array2[i]}</td>
         <td>${array3[i]}</td> </tr>`
            cardBody.innerHTML += uiString
        }
    }
};
function show() {
    let cardBody = document.getElementById("card-body");
    var index

    data.forEach(function (element1, index1) {
        index = index1
        elem1 = element1


    });
    writer.forEach(function (element2) {
        elem2 = element2

    });
    tybook.forEach(function (element3) {
        elem3 = element3

    });
    let uiString = `<tr><th scope="row">${index + 1}</th>
        <td>${elem1}</td>
        <td>${elem2}</td>
        <td>${elem3}</td> </tr>`

    cardBody.innerHTML += uiString
};
var addbook = document.getElementById("addbook")
addbook.addEventListener("click", function () {
    console.log(" Book added sucessfully.......")
    let bookname = document.getElementById('bookname').value
    let auther = document.getElementById("auther").value

    let book = new Book(bookname, auther, typed);

    let display = new Display();
    if (display.validate(bookname, auther)) {
        data.push(bookname)
        localStorage.setItem("bookname", JSON.stringify(data))
        writer.push(auther)
        localStorage.setItem("auther", JSON.stringify(writer))
        tybook.push(typed)
        localStorage.setItem("type", JSON.stringify(tybook))
        show();
        display.clear();
        display.showmsg('success', 'Your book has been added sucessfully. For more Information please check Our Library section')
    }
    else {
        display.showmsg('danger', 'Sorry you cannot add this book');
    }
})





// js for getbook.html
// function GETBOOK(){
if (bookname == null) {
    data = [];
    tybook = [];
}
else {
    data = JSON.parse(bookname);
    writer = JSON.parse(auther);
    tybook = JSON.parse(typed);
}

let getbook = document.getElementById("getbook")
getbook.addEventListener("click", getbookfun)
function getbookfun() {
    var getbookname = document.getElementById("getbookname").value
    var mm = false
    var nn = false
    var ind1 = -1
    var ind2 = -2

    data.forEach(mine1)
    function mine1(element1, index1) {
        if (element1 == getbookname) {
            mm = true
            ind1 = index1
        }
    }
    tybook.forEach(mine2)
    function mine2(element2, index2) {

        if (element2 == typed) {
            nn = true
            ind2 = index2
        }
    }

    let display = new Display();
    if (mm && nn && ind1 == ind2) {
        display.showmsged('success', "Book is given to you")
        deletebook(ind1)
        display.clear()
        // data.splice(ind1,1)
        // writer.splice(ind1,1)
        // tybook.splice(ind1,1)
        // show()
    }
    else {
        display.showmsged('danger', " This Book is not avilable please visit Our Library Section for more information")
    }
    // function to delet book when it is assign to someone
    function deletebook(ind1) {
        let bookname = localStorage.getItem("bookname");
        let auther = localStorage.getItem("auther");
        let typed = localStorage.getItem("type");
        if (bookname == null) {
            data = [];
            writer = [];
            tybook = [];
        }
        else {
            data = JSON.parse(bookname);
            writer = JSON.parse(auther);
            tybook = JSON.parse(typed);
        }
        data.splice(ind1, 1)
        writer.splice(ind1, 1)
        tybook.splice(ind1, 1)
        localStorage.setItem("bookname", JSON.stringify(data))
        localStorage.setItem("auther", JSON.stringify(writer))
        localStorage.setItem("type", JSON.stringify(tybook))
        show();
    }
}
