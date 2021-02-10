var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
//to show two columns, pass as an array
orm.selectAndOrder(["animal_name", "price"], "pets", "price");

// Find a pet in the pets table by an animal_name of Rachel.
orm.selectWhere("pets", "animal_name", "Rachel");

// Find the buyer with the most pets.
orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");