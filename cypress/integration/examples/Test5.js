describe('My Fifth Test Suite', function () {

    it('My FifthTest case', function () {


        // find dynamically a specific column I'm looking for
        // I will scan the existing table with that specific column I will find the text
        // find the specific column where you wanna work
        // iterate with each method
        // when you find the text, move to the sibling (number for example) using next method


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr th:nth-child(2)').each(($e1, index, $list) => {
            const text = $e1.text()
            if (text.includes("Phyton")) {
                cy.get("tr th:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).toEqual('25')
                })
            }

        })
    })
})