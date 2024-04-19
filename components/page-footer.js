class PageFooter extends HTMLElement {
    constructor() {
        super(); 
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
            .page-footer {
                display: block;
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                text-align: center;
                padding: 10px;
            
                background-color: rgb(243, 212, 38);
            }
            
            .page-footer h1 {
                font-size: 1rem;
                text-align: center;
            }

            </style>

            <div class="page-footer">
                <h1>Notes app &copy Kamal Akbar 2024</h1>
            </div> 
        `;
    }
}

customElements.define('page-footer', PageFooter);