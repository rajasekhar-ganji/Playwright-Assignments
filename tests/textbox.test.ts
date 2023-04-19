import { test } from "@playwright/test";
test('testbox', async ({ page }) => {
await page.goto("https://demoqa.com/text-box");
await page.waitForLoadState('networkidle')
await page.locator("input#userName").type("rajasekhar")
await page.fill("input#userEmail","raja@gmail.com")
await page.locator("textarea#currentAddress").type("hyd")
await page.fill("textarea#permanentAddress","guntur")
await page.click("button#submit")
await page.waitForTimeout(5000);
});