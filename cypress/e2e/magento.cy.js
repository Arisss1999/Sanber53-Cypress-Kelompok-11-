describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.contains("Sign In").click();

    //Login
    cy.get("#email").type("tivewo6152@bitofee.com");
    cy.get("#pass").type("tivewo6152#");

    //klik send
    cy.get("#send2").click();

    //pilih category men
    cy.get("#ui-id-5").click();
    cy.url().should("include", "/men.html");

    //pilih tops
    // cy.get("#narrow-by-list2 > .items > .item").contains("Tops").click();

    cy.get("#narrow-by-list2").find("ol").contains("Tops").click();
  });
});
