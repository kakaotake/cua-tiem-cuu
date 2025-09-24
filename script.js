
// ********************
//THIS IS FOR DEMO PURPOSE
document.addEventListener("DOMContentLoaded", function(){
    /// for demo purpose download link
    var body_el = document.querySelector("body");
    var get_link = document.createElement("div");
    get_link.innerHTML = `
        <div class="d-flex rounded-full fixed d-inline-block" style="z-index:100; position: fixed; bottom:10px; right:10px;">
            <a class="btn btn-dark rounded-right-0 border-right border-color-neutral-600" href="https://ecommerce-ui.com/#pages" class=""> Pages 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style="width:16px; height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            </a> 
            <a class="btn btn-dark rounded-left-0" href="https://ecommerce-ui.com/#download"> Download </a>
        </div>
    `
    body_el.appendChild(get_link);
    // end for demo 

}); 
// end DOMContentLoaded 
// ********************
