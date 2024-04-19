class AddBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <li class="add-box">
                <div class="icon"><i class="fa-solid fa-plus"></i></div>
                <p>Add new note</p>
            </li>
        `;
    }
}

class Notes extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
            <li class="note">
                <div class="details"></div>
            </li>
        `;
    }
}


// Define the custom elements
customElements.define('add-box', AddBox);
customElements.define('notes-box', Notes);
