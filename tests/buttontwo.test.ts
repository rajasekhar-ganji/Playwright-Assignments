import {expect, selectors, test } from "@playwright/test";
 test.only('testbox', async ({ page }) => {
 await page.goto("https://demoqa.com");
     await page.waitForLoadState('load')
     await page.click("//h5[text()='Elements']");
     await page.click("li#item-4>span");
   await page.click("#doubleClickBtn");
   await page.waitForLoadState('load')
    await page.dblclick("#doubleClickBtn");
    await page.waitForLoadState('load')
    const doublelink=await page.locator("#doubleClickMessage").textContent();
console.log("double link clicked and display message is=",doublelink);
    await expect(page.locator("#doubleClickMessage")).toHaveText("You have done a double click");
    await page.click("#rightClickBtn",{ button: 'right' });
 await page.waitForLoadState('load')
 const rightclick=await page.locator("#rightClickMessage").textContent();
console.log("double link clicked and display message is=",rightclick);
 await expect(page.locator("#rightClickMessage")).toHaveText("You have done a right click");
   await page.click("//button[text()='Click Me']");
   await page.waitForLoadState('load')
   const click=await page.locator("#dynamicClickMessage").textContent();
console.log("double link clicked and display message is=",click);
   await expect(page.locator("#dynamicClickMessage")).toHaveText("You have done a dynamic click");
await page.waitForTimeout(5000);
 });