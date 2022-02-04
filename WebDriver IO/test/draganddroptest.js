describe("drag and drop functionality", function()
{
    it("drag and drop", function(){
        browser.url('https://jqueryui.com/droppable');
        browser.maximizeWindow();
        browser.pause(2000);
        browser.switchToFrame($("//iframe[@class='demo-frame']"));
        browser.pause(3000);

        const sourceele = $('#draggable');
        const targetele = $('#droppable');

        // console.log("in view port", sourceele.isDisplayedInViewport());
        // sourceele.scrollIntoView();
        // console.log("in view port", sourceele.isDisplayedInViewport());
        sourceele.dragAndDrop(targetele);

        browser.pause(5000);


    })

}
);