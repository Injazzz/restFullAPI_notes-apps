class PageHeader extends HTMLElement {
    constructor() {
        super(); 
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            .page-header {
                display: flex;
                background: #f3d426;
                padding: 5px;
                top: 0;
                color: black;
            }
            
            .page-header img {
                width: 50px;
                height: 50px;
                margin: 15px;
            }
            </style>

            <div class="page-header">
                <img src="./src/icon/sticky-notes.png">
                <h1>Notes app</h1>
            </div>  
        `;
    }
}

customElements.define('page-header', PageHeader);