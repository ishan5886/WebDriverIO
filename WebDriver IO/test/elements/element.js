describe("interaction with web element", () =>
{
    it("enter value in a field", async () =>{
        await browser.url('/');
        await browser.maximizeWindow();
        const search =await $('#twotabsearchtextbox');
        await search.setValue('Apple Mac Book');
        browser.pause(5000);

        let title = await browser.getTitle();
        console.log(title);

        const label = await $('span.a-size-base.a-color-base');
        let text = await label.getText();
        console.log(text);
    })

}
);

// npm run test