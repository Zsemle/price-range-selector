let inputs = document.getElementsByTagName('input');
let checkedInputs = [];

function initSelector(){
    [...inputs].forEach((item,index) => {
        item.onchange = triggered;
        item.dataset.index = index;
    });
}

function triggered(event){
    buildCheckedInputs();
    checkInterval();
}

function buildCheckedInputs(){
    checkedInputs = [];
    [...inputs].forEach(item => {
        if (item.checked){
            checkedInputs.push(parseInt(item.dataset.index))
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
