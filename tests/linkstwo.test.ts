import { expect,selectors, test } from "@playwright/test";

test('links', async ({ page }) => {
await page.goto("https://demoqa.com");
await page.waitForLoadState('load')
await page.click("//h5[text()='Elements']");
await page.click("li#item-5");
await page.click ("#simpleLink");
await page.waitForTimeout(5000);
await page.isVisible(`div#app>header>a>img`)
await page.waitForTimeout(3000);
await page.click ("#dynamicLink");
await page.isVisible(`img.banner-image`);
});
test('linktwo', async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.waitForLoadState('load')
    await page.click("//h5[text()='Elements']");
    await page.click("li#item-5");
await page.locator("#created").click();
const link=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 201 and status text Created");
await page.click("#no-content");
await page.waitForTimeout(3000);
const link1=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link1);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 204 and status text No Content");
await page.click("#moved");
await page.waitForTimeout(3000);
const link2=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link2);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 301 and status text Moved Permanently");
await page.click("#bad-request")
await page.waitForTimeout(3000);
const link3=await page.locator("#linkResponse").textContent();
await page.waitForLoadState('load');
console.log('link is clicked successfully and response is==', link3);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 400 and status text Bad Request");
 });
test('linksthree', async ({ page }) => {
    await page.goto("https://demoqa.com");
    await page.waitForLoadState('load')
    await page.click("//h5[text()='Elements']");
    await page.click("li#item-5");
await page.click("#unauthorized");
await page.waitForTimeout(3000);
const link4=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link4);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 401 and status text Unauthorized");
await page.click("#forbidden");
await page.waitForTimeout(3000);
const link5=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link5);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 403 and status text Forbidden");
await page.locator("#invalid-url").click();
await page.waitForTimeout(3000);
const link6=await page.locator("#linkResponse").textContent();
console.log('link is clicked successfully and response is==', link6);
expect(await page.locator("#linkResponse")).toHaveText("Link has responded with staus 404 and status text Not Found");
});