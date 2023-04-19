import { test } from "@playwright/test";
test('webtable', async ({ page }) => {
await page.goto("https://demoqa.com");
await page.waitForLoadState('networkidle')
await page.click("//h5[text()='Elements']")
await page.waitForLoadState('networkidle')
await page.click("li#item-3>span")
await page.waitForLoadState('networkidle')
await page.click("#addNewRecordButton")
await page.fill("#firstName","mahesh")
await page.fill("#lastName","gattamaneni")
await page.fill("#userEmail","mahesh@gmail.com")
await page.fill("#age","30")
await page.fill("#salary","25000")
await page.fill("#department","it")
await page.waitForLoadState('networkidle')
await page.click("#submit")
await page.waitForTimeout(2000);
const result=await page.locator("//*[@class='rt-tbody']").innerText();
console.log("data is enrolled successfully", result);

})