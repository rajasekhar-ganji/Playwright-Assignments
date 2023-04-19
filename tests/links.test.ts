import { selectors, test } from "@playwright/test";

test('links', async ({ page }) => {
    await page.goto("https://demoqa.com");
  await page.waitForLoadState('networkidle')
    await page.click("//h5[text()='Elements']");
    await page.click("li#item-5");
   await page.click ("#simpleLink");
   await page.waitForTimeout(2000);
   await page.click ("#dynamicLink") ;
   await page.waitForTimeout(2000);
});
   test('links extra', async ({ page }) => {
    await page.goto("https://demoqa.com");
  await page.waitForLoadState('load')
    await page.click("//h5[text()='Elements']");
    await page.click("li#item-5>span");
    await page.waitForLoadState('load')
   await page.click("#created");
   await page.waitForLoadState('load')
   await page.click("#no-content")
   await page.waitForLoadState('load')
   await page.click("#moved");
   await page.waitForLoadState('load')
   await page.click("#bad-request")
   });


   test('links extr', async ({ page }) => {
    await page.goto("https://demoqa.com");
  await page.waitForLoadState('load')
    await page.click("//h5[text()='Elements']");
    await page.click("li#item-5>span");
   await page.click("#unauthorized");
   await page.waitForLoadState('load')
   await page.click("#forbidden");
   await page.waitForLoadState('load')
   await page.click("#invalid-url");
   await page.waitForTimeout(2000);
});