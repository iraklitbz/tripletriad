require('./index.scss');


function draggCards(){
    const fill = document.querySelector('.card');
    const empties = document.querySelectorAll('.empty-boxes');

    // Fill listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);

    // Loop through empty boxes and add listeners
    for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
    }

    // Drag Functions

    function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
    this.className = 'card';
    }

    function dragOver(e) {
    e.preventDefault();
    }

    function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
    }

    function dragLeave() {
    this.className = 'empty-boxes';
    }

    function dragDrop() {
    this.className = 'empty-boxes';
    this.append(fill);
    }

}


document.addEventListener('DOMContentLoaded', draggCards);


