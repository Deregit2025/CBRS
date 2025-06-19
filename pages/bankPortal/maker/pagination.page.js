import {test} from "@playwright/test"
export class pagination {
    constructor(page){
        this.page =page;
        this.agentMenu = page.getByRole("link", { name: "Agents" });
        this.pageSizeButton = page.locator('xpath=/html/body/main/div[3]/div/div[2]/div/div/div/button');
        this.option = page.getByRole('option', { name: '10' });
    }
      async navigate() {
    await this.agentMenu.click();
    // await expect(this.page).toHaveURL(/.*agents/);
    }
    async agentPaginationbutton(){
    await this.pageSizeButton.click();
    }
    async paginationOption(){
    await this.option.click();
}



}