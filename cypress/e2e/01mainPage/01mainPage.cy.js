import HomePage from "../../pageObjects/HomePage";
import homePageData from "../../fixtures/homePage.json"

describe ("HomePage", () => {

    const homePage = new HomePage();

it ("TC_01.01.01 | HomePage > Verify categories name", () => {
   homePage
   .chooseElementsCard()
   .each(($el, ind) =>{
    expect($el.text()).to.be.eq(homePageData["category-cards"][ind])
   })

})

})