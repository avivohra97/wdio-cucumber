import { Given,When,Then } from "@wdio/cucumber-framework";
import chai from "chai"

Given(/^Google page is opened$/,async function(){
    await browser.url("https://www.google.com")
    await browser.pause(3)
})

When(/^I search (.*)$/, async function(searchItem){
console.log(`>> item : ${searchItem}`)
let ele = await $(`[name=q]`)
await ele.click();
await ele.setValue(searchItem);
await browser.keys("Enter")
})

Then(/^I click on the first search result$/,async () => {
    // find element by tag
    let ele = await $(`<h3>`)
    await ele.click()
})

Then(/^url should match (.*)$/,async (expected:string) => {
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expected)
})