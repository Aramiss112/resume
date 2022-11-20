// modal

let modalCall   =   $("[data-modal]");
let modalClose  =   $("[data-close]");

modalCall.on("click",function(event){
    event.preventDefault();
    let $this = $(this);
    let modalId =   $this.data('modal'); 
    $(modalId).addClass('show');

});

modalClose.on("click",function(event){
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.about_me'); 

    modalParent.removeClass('show');

});
