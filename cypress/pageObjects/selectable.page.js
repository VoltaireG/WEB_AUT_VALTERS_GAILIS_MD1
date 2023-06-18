export const selectableGridElement = () => cy.contains("Grid");
export const selectableItems = () => cy.get(".ui-selected");

export const clickGrid = () => selectableGridElement().click();

export const selectItems = (items) => {
  items.forEach((item) => {
    cy.contains(item).click();
  });
};
