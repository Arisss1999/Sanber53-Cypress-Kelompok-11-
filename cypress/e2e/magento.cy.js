describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://magento.softwaretestingboard.com/customer/account/login/"
    );

    //cy.contains("Sign In").click();

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

    //find product and click
    cy.get("div ol li a")
      .should("have.attr", "href")
      .then((href) => {
        cy.visit(href);
      });

    // choose size and color
    cy.get("#option-label-size-143-item-167").click();
    cy.get("#option-label-color-93-item-50").click();

    // add to cart
    cy.contains("Add to Cart").click();

    // whishlist
    cy.contains("Add to Wish List").click();

    cy.get(".minicart-wrapper").click();
  });
});
