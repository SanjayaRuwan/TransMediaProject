export class ListPage {
  constructor(page) {
    this.page = page;
    this.clickBoard = page.locator('#board-1');
    this.addAList=page.locator('//*[@id="app"]/div/div/div/div[3]/div');
    this.listInput = page.locator("//input[@placeholder='Enter list title...']");
    this.addListBtn=page.locator("//button[normalize-space()='Add list']");
    this.svgPoint=page.locator("//button[@data-cy='list-options']//*[name()='svg']");
    this.deleteList1=page.locator('//*[@id="app"]/div/div/div/div[2]/div[1]/div/div[1]/div/div[3]');
    this.lists = page.locator('.list'); // Adjust selector if needed
  }

  async addList1(name) {
    await this.clickBoard.click();
    await this.page.waitForTimeout(3000);
    await this.addAList.click();
    await this.page.waitForTimeout(3000);
    await this.listInput.type(name);
    await this.addListBtn.click();
    await this.page.waitForTimeout(5000); // Adjust if delay in UI update
  }
  async addList2(name) {
    await this.listInput.type(name);
    await this.addListBtn.click();
    await this.page.waitForTimeout(5000); // Adjust if delay in UI update
  }
  getListLocator(name) {
    //return this.page.locator(`.list:has-text("${name}")`);
    return this.page.locator(`input.list-title[value="${name}"]`);
  }

  async deleteList(name) {
    //const list = this.getListLocator(name);
    await this.svgPoint.click();
    await this.deleteList1.click();
    //const deleteButton = list.locator('//*[@id="app"]/div/div/div/div[2]/div[1]/div/div[1]/div/div[3]'); // Update based on your HTML
    //await deleteButton.click();
    await this.page.waitForTimeout(5000);
  }
}
