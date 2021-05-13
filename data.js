// npm run json

module.exports = function () {
    return { 
        products: [
            { id: 1, name: "Michs", category: "BEER", 
                description: "Michs description", price: 21 },

            { id: 2, name: "Corona", category: "BEER", 
                description: "Corona description", price: 484 },

            { id: 3, name: "Bud Light", category: "BEER", 
                description: "Bud Light description", price: 1736 },

            { id: 4, name: "Vodka Soda", category: "MIXED DRINK", 
                description: "Vokda Soda desciption", 
                price: 168 },

            { id: 5, name: "Gin and Tonic", category: "MIXED DRINK", 
                description: "Gin and Tonic description", price: 250 },

            { id: 6, name: "Mojito", category: "MIXED DRINK", 
                description: "Mojito description", price: 325 },

            { id: 7, name: "Tequila", category: "SHOTS", 
                description: "Tequila description", 
                price: 24 },

            { id: 8, name: "Vodka", category: "SHOTS", 
                description: "Vodka description", price: 147.75 },

            { id: 9, name: "Water Bottle", category: "EXTRAS", 
                description: "sober up", price: 14 }
        ],
        orders: []
    }
}


