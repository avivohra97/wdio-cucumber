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

Given(/^web page is opened$/,async function () {
    await browser.url("/")
})

Then(/^I click on Inputs$/, async function() {
    let ele = await $(`a=Inputs`)
    await ele.click()
})

Then(/^I see heading (.*)$/, async function (heading:string) {
    let actualHeading = await $(`h3=${heading}`)
    chai.expect(heading).to.equal(actualHeading)
})

Then(/^I check if input is enabled$/,async function(){
    let numInput = await $(`input[type=number]`)
    let isEnabled = await numInput.isEnabled();
    console.log(isEnabled); 
    await numInput.setValue(123)
    await browser.pause(2)
    console.log(await numInput.getValue())
    await numInput.clearValue()
    await numInput.setValue("avi")
    console.log(await numInput.getValue())
    await numInput.clearValue()
    let val:string = "123"
    for(let i=0;i<val.length;i++){
        await browser.pause(1000)
        await browser.keys(val.charAt(i))
    }

})