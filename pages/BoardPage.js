export class BoardPage {
  constructor(page) {
    this.page = page;
    this.clickBoard= page.locator("//h1[text()=' Create new board ']");
    this.boardInput = page.locator('input[placeholder="Add board title"]');
    this.boardList = page.locator('//input[@data-cy="board-title"]');
  }

  async createBoard(name) {
    await this.clickBoard.click();
    await this.boardInput.fill(name);
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);
  }

  async isBoardCreated(name) {
    await this.page.waitForTimeout(2000);
    return this.boardList.locator(`text=${name}`).isVisible();
  }

   getBoardLocator(name) {
   return this.page.locator(`input.board-title[value="${name}"]`);

}
}
