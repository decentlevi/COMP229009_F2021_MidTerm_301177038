
/*File name- app.js
Author's Name - Thankgod Nnaji
StudentID - 301177038
Web App Name - Bookstore inventory
04/12/2021
*/




console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}