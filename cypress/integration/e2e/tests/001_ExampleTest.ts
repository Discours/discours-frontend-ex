describe("Example Test", () => {
  it("visit home page", () => {
    cy.visit("/");
    cy.queryByText("404!").should("exist");
  });
});
