const form = document.querySelector('#formeme');
let topInput = document.querySelector('input[name="firstln"]');
let bottomInput = document.querySelector('input[name="secondln"]');
const section = document.querySelector('section');


document.addEventListener('click', function(e) {
    //delete on img click
    if(hasClass(e.target, 'delete')) {
        
        e.target.parentElement.remove();
    };
}, false);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let firstLine = createFirstLine();
    let lowerText = createSecondLine();
    let newMeme = createMeme();
    let delBtn = makeDeleteButton();
    let newContainer = makeContainer();

    newContainer.append(firstLine, newMeme, lowerText, delBtn);
    results.append(newContainer);
    form.reset();
});

function createFirstLine() {
    let topMsg = document.getElementById('toptext').value;
    let top = document.createElement('div');

    top.innerText = topMsg;
    if(top.classList.contains("top") !== true ) {
        top.classList.add("top")
    };
    return top;
};
function createSecondLine() {
    let bottomMsg = document.getElementById('bottomtext').value;
    let bottom = document.createElement('div');

    bottom.innerText = bottomMsg;
    if(bottom.classList.contains("bottom") !== true ) {
        bottom.classList.add("bottom")
    };
    return bottom;
};
function createMeme() {
    let meme = document.createElement('img');
    let imgInput = document.querySelector('input[name="memeimage"]');
    
    meme.setAttribute("src", imgInput.value);

    return meme;
};
function makeDeleteButton() {
    let removeBtn = document.createElement('button');
    
    removeBtn.innerText = 'X';
    removeBtn.classList.add("delete");

    return removeBtn;
};

function makeContainer() {
    let deleteContainer = document.createElement('div');
    deleteContainer.classList.add("remove");
    
    return deleteContainer;
}

function hasClass(elem, className) {
    return elem.classList.contains(className);
};