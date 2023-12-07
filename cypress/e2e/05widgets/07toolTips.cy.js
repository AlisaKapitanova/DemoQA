import HomePage from "../../pageObjects/HomePage.js";
import widgetsToolTipsData from "../../fixtures/widgetsToolTips.json";

const homepage = new HomePage();

describe("Widgets > Tool Tips", () => {
  it('AT_05.07.01 | Widgets > Tool Tips > Verify the tooltip on the button "Hover me to see"', () => {
    homepage
      .chooseWidgetsCard()
      .chooseToolTipsWidget()
      .verifyColorHoverMeToSeeButton()
      .hoverHoverMeToSeeButton()
      .getHoverMeToSeeButtonToolTip()
      .should("have.text", widgetsToolTipsData.HoverMeToSeeButtonToolTip);
  });
});
