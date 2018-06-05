let inputs = document.getElementsByTagName('input');
let checkedInputs = [];

function initSelector(){
    [...inputs].forEach(item => {
        item.onchange = triggered;
    });
}

function triggered(event){
    buildCheckedInputs();
    checkInterval();
}

function buildCheckedInputs(){
    checkedInputs = [];
    [...inputs].forEach((item,index) => {
        if (item.checked){
            checkedInputs.push(parseInt(index))
        }
    });
}

function checkInterval(){
    let maxIndex = Math.max(...checkedInputs);
    let minIndex = Math.min(...checkedInputs);
    let toBeChecked = [];
    for(let i=minIndex; i<=maxIndex;i++){
        toBeChecked.push(i);
    }
    toBeChecked.forEach(index => {
        inputs[index].checked = true;
    });
    decorateLabels(minIndex,maxIndex);
}

function decorateLabels(minIndex,maxIndex){
    [...inputs].forEach(item => {
        item.className = '';
    });
    if (minIndex<=inputs.length && maxIndex<=inputs.length){
        document.querySelector('#'+inputs[minIndex].id).className = 'boundary';
        document.querySelector('#'+inputs[maxIndex].id).className = 'boundary';
    }
}

initSelector();
