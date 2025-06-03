import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage.js';
import { config } from '../../config/config.js';

test('Create board and verify', async ({ page }) => {
  await page.goto(config.baseUrl);
  const boardPage = new BoardPage(page);

  const boardName = 'QA Board';
  await boardPage.createBoard(boardName);

  const boardLocator = boardPage.getBoardLocator(boardName);
  await expect(boardLocator).toBeVisible(); 
});
