class ToolTipsPage {
  getHoverMeToSeeButton = () => cy.get("#toolTipButton");
  getHoverMeToSeeButtonToolTip = () => cy.get("div.tooltip-inner");

  verifyColorHoverMeToSeeButton() {
    this.getHoverMeToSeeButton().should(
      "have.css",
      "background-color",
      "rgb(40, 167, 69)"
    );
    return this;
  }

  hoverHoverMeToSeeButton() {
    this.getHoverMeToSeeButton().trigger("mouseover");
    return this;
  }
}
export default ToolTipsPage;
