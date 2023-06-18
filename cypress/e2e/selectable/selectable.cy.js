import { clickGrid, selectItems } from "../../pageObjects/selectable.page";

describe("Selectable scenario", () => {
  it("should highlight selected items", () => {
    cy.visit("https://demoqa.com/selectable");

    clickGrid();

    selectItems(["Two", "Four", "Six", "Eight"]);

    cy.wait(2000);

    cy.get(".ui-selected").should("be.visible").should(($elements) => {
      expect($elements).to.have.length(4);
    });

    cy.contains("One").should("not.have.class", "ui-selected");
    cy.contains("Three").should("not.have.class", "ui-selected");
    cy.contains("Five").should("not.have.class", "ui-selected");
    cy.contains("Seven").should("not.have.class", "ui-selected");
    cy.contains("Nine").should("not.have.class", "ui-selected");
  });
});