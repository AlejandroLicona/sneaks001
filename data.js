// npm run json

module.exports = function () {
    return { 
        products: [
            { id: 1, name: "THQL1120", category: "Breakers", 
                description: "THQL 1 POLE 120/240V 10K IC 20 AMP", price: 21 },

            { id: 2, name: "TEY330", category: "Breakers", 
                description: "CIRCUIT BREAKER THREE POLE", price: 484 },

            { id: 3, name: "SFHA24AT0250", category: "Breakers", 
                description: "SFH 2P 480V 250A", price: 1736 },

            { id: 4, name: "TLM1212CCU", category: "Loadcenter", 
                description: "12 CIR. 125 A CONVERTIBLE L/C", 
                price: 168 },

            { id: 5, name: "TL12412C", category: "Loadcenter", 
                description: "MAIN LUG 125A 12CRT COMBO LD CENTER", price: 250 },

            { id: 6, name: "TL18415C", category: "Loadcenter", 
                description: "MAIN LUG 150A 18CRT COMBO LD CENTER", price: 325 },

            { id: 7, name: "TLK300", category: "Extras", 
                description: "PM GOLD 6-300 CU/AL NEUTRAL/GROUND", 
                price: 24 },

            { id: 8, name: "TNIA225", category: "Extras", 
                description: "225A-INSULATD GROUNDBL NEUTRAL ONLY", price: 147.75 },

            { id: 9, name: "TGL20", category: "Extras", 
                description: "EQUIPMENT GROUND KIT", price: 14 }
        ],
        orders: []
    }
}


