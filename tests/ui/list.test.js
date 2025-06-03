import { test, expect } from '@playwright/test';
import { ListPage } from '../../pages/ListPage.js';
import { BoardPage } from '../../pages/BoardPage.js';
import { config } from '../../config/config.js';

test('Add two lists and verify, then delete one', async ({ page }) => {
  await page.goto(config.baseUrl);

  const boardPage = new BoardPage(page);
  const listPage = new ListPage(page);
/*
  const boardName = 'Automation Board';
  await boardPage.createBoard(boardName);
  await expect(boardPage.getBoardLocator(boardName)).toBeVisible();

  await boardPage.openBoard(boardName); // Assumes this navigates into board
*/
  // Add lists
  const list1 = 'To Do';
  const list2 = 'In Progress';

  await listPage.addList1(list1);
  await listPage.addList2(list2);

    // Debug
  //await page.screenshot({ path: 'before-check-lists.png' });
  //await page.pause();

  await expect(listPage.getListLocator(list1)).toBeVisible();
  await expect(listPage.getListLocator(list2)).toBeVisible();

  // Delete one list
  await listPage.deleteList(list1);

  // Validate deletion
  await expect(listPage.getListLocator(list1)).not.toBeVisible();
  await expect(listPage.getListLocator(list2)).toBeVisible();
});
