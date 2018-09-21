const table = "descriptions";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(table)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(table).insert([
        { id: 1, description: "Arachic oil" },
        { id: 2, description: "Arachis" },
        { id: 3, description: "Arachis hypogaea" },
        { id: 4, description: "Artificial nuts" },
        { id: 5, description: "Beer nuts" },
        { id: 6, description: "Boiled peanuts" },
        { id: 7, description: "Peanut oil" },
        { id: 8, description: "Cold pressed peanut oil" },
        { id: 9, description: "extruded peanut oil" },
        { id: 10, description: "expelled peanut oil" },
        { id: 11, description: "Crushed nuts" },
        { id: 12, description: "crushed peanuts" },
        { id: 13, description: "Earth nuts" },
        { id: 14, description: "Goober peas" },
        { id: 15, description: "Ground nuts" },
        { id: 16, description: "Ground peanuts" },
        { id: 17, description: "Hydrolyzed peanut protein" },
        { id: 18, description: "Mandelonas" },
        { id: 19, description: "Mixed nuts" },
        { id: 20, description: "Monkey nuts" },
        { id: 21, description: "Nu nuts flavored nuts" },
        { id: 22, description: "Nut pieces" },
        { id: 23, description: "Nutmeat" },
        { id: 24, description: "Peanuts" },
        { id: 25, description: "peanut butter" },
        { id: 26, description: "peanut butter chips" },
        { id: 27, description: "peanut butter morsels" },
        { id: 28, description: "Peanut flour" },
        { id: 29, description: "Peanut paste" },
        { id: 30, description: "Peanut sauce" },
        { id: 31, description: "peanut syrup" },
        { id: 32, description: "Spanish peanuts" },
        { id: 33, description: "Virginia peanuts" },
        { id: 34, description: "Almond" },
        { id: 35, description: "Beechnut" },
        { id: 36, description: "Brazil nut" },
        { id: 37, description: "Bush nut" },
        { id: 38, description: "Butternut" },
        { id: 39, description: "Cashew" },
        { id: 40, description: "Chestnut" },
        { id: 41, description: "Coconut" },
        { id: 42, description: "Filbert" },
        { id: 43, description: "Ginko nut" },
        { id: 44, description: "Hazelnut" },
        { id: 45, description: "Hickory nut" },
        { id: 46, description: "Lichee nut" },
        { id: 47, description: "Macadamia nut" },
        { id: 48, description: "Nangai nut" },
        { id: 49, description: "Pecan" },
        { id: 50, description: "Pine nut" },
        { id: 51, description: "Pistachio" },
        { id: 52, description: "Shea nut" },
        { id: 53, description: "Walnut" },
        { id: 54, description: "acidophilus milk" },
        { id: 55, description: "buttermilk" },
        { id: 56, description: "buttermilk blend" },
        { id: 57, description: "buttermilk solids" },
        { id: 58, description: "cultured milk" },
        { id: 59, description: "condensed milk" },
        { id: 60, description: "dried milk" },
        { id: 61, description: "dry milk solids" },
        { id: 62, description: "DMS" },
        { id: 63, description: "evaporated milk" },
        { id: 64, description: "fat‐free milk" },
        { id: 65, description: "fully cream milk powder" },
        { id: 66, description: "goat’s milk" },
        { id: 67, description: "Lactaid milk" },
        { id: 68, description: "lactose free milk" },
        { id: 69, description: "low fat milk" },
        { id: 70, description: "malted milk" },
        { id: 71, description: "milk derivative" },
        { id: 72, description: "milk powder" },
        { id: 73, description: "milk protein" },
        { id: 74, description: "milk solids" },
        { id: 75, description: "milk solid pastes" },
        { id: 76, description: "nonfat dry milk" },
        { id: 77, description: "nonfat milk" },
        { id: 78, description: "nonfat milk solids" },
        { id: 79, description: "pasteurized milk" },
        { id: 80, description: "powdered milk" },
        { id: 81, description: "sheep’s milk" },
        { id: 82, description: "skim milk" },
        { id: 83, description: "skim milk powder" },
        { id: 84, description: "sour milk" },
        { id: 85, description: "sour milk solids" },
        { id: 86, description: "sweet cream buttermilk powder" },
        { id: 87, description: "sweetened condensed milk" },
        { id: 88, description: "sweetened condensed skim milk" },
        { id: 89, description: "whole milk" },
        { id: 90, description: "1% milk" },
        { id: 91, description: "2% milk" },
        { id: 92, description: "artificial butter" },
        { id: 93, description: "artificial butter flavor" },
        { id: 94, description: "butter" },
        { id: 95, description: "butter extract" },
        { id: 96, description: "butter fat" },
        { id: 97, description: "butter flavored oil" },
        { id: 98, description: "butter solids" },
        { id: 99, description: "dairy butter" },
        { id: 100, description: "natural butter" },
        { id: 101, description: "natural butter flavor" },
        { id: 102, description: "whipped butter" },
        { id: 103, description: "casein" },
        { id: 104, description: "caseinate" },
        { id: 105, description: "ammonium caseinate" },
        { id: 106, description: "calcium caseinate" },
        { id: 107, description: "hydrolyzed casein" },
        { id: 108, description: "iron caseinate magnesium caseinate" },
        { id: 109, description: "potassium caseinate" },
        { id: 110, description: "sodium caseinate" },
        { id: 111, description: "zinc caseinate" },
        { id: 112, description: "cheese" },
        { id: 113, description: "cheese flavor" },
        { id: 114, description: "artificial cheese flavor" },
        { id: 115, description: "natural cheese flavor" },
        { id: 116, description: "cheese food" },
        { id: 117, description: "cottage cheese" },
        { id: 118, description: "cream cheese" },
        { id: 119, description: "imitation cheese" },
        { id: 120, description: "vegetarian cheeses with casein" },
        { id: 121, description: "Cream" },
        { id: 122, description: "Whipped cream" },
        { id: 123, description: "Curds" },
        { id: 124, description: "Custard" },
        { id: 125, description: "Dairy product solids" },
        { id: 126, description: "Galactose" },
        { id: 127, description: "Ghee" },
        { id: 128, description: "Half & Half" },
        { id: 129, description: "hydrolysate" },
        { id: 130, description: "casein hydrolysate" },
        { id: 131, description: "milk protein hydrolysate" },
        { id: 132, description: "protein hydrolysate" },
        { id: 133, description: "whey hydrolysate" },
        { id: 134, description: "whey protein hydrolysate" },
        { id: 135, description: "ice cream" },
        { id: 136, description: "ice milk" },
        { id: 137, description: "sherbet" },
        { id: 138, description: "Lactalbumin" },
        { id: 139, description: "lactalbumin phosphate" },
        { id: 140, description: "Lactate solids" },
        { id: 141, description: "Lactyc yeast" },
        { id: 142, description: "Lactitol monohydrate" },
        { id: 143, description: "Lactoglobulin" },
        { id: 144, description: "Lactose" },
        { id: 145, description: "Lactulose" },
        { id: 146, description: "Milk fat" },
        { id: 147, description: "anhydrous milk fat" },
        { id: 148, description: "Nisin preparation" },
        { id: 149, description: "Nougat" },
        { id: 150, description: "Pudding" },
        { id: 151, description: "Quark" },
        { id: 152, description: "Recaldent" },
        { id: 153, description: "Rennet" },
        { id: 154, description: "rennet casein" },
        { id: 155, description: "Simplesse" },
        { id: 156, description: "Sour cream" },
        { id: 157, description: "sour cream solids" },
        { id: 158, description: "imitation sour cream" },
        { id: 159, description: "whey" },
        { id: 160, description: "acid whey" },
        { id: 161, description: "cured whey" },
        { id: 162, description: "delactosed whey" },
        { id: 163, description: "demineralized whey" },
        { id: 164, description: "hydrolyzed whey" },
        { id: 165, description: "powdered whey" },
        { id: 166, description: "reduced mineral whey" },
        { id: 167, description: "sweet dairy whey" },
        { id: 168, description: "whey" },
        { id: 169, description: "whey protein" },
        { id: 170, description: "whey protein concentrate" },
        { id: 171, description: "whey powder" },
        { id: 172, description: "whey solids" },
        { id: 173, description: "Yogurt" },
        { id: 174, description: "regular yogurt" },
        { id: 175, description: "frozen yogurt" },
        { id: 176, description: "yogurt powder" },
        { id: 177, description: "Albumin" },
        { id: 178, description: "Apovitellin" },
        { id: 179, description: "Cholesterol free egg substitute" },
        { id: 180, description: "Eggbeaters" },
        { id: 181, description: "Dried egg solids" },
        { id: 182, description: "dried egg" },
        { id: 183, description: "Egg" },
        { id: 184, description: "egg white" },
        { id: 185, description: "egg yolk" },
        { id: 186, description: "Egg wash" },
        { id: 187, description: "Eggnog" },
        { id: 188, description: "Fat substitutes" },
        { id: 189, description: "Globulin" },
        { id: 190, description: "Livetin" },
        { id: 191, description: "Lysozyme" },
        { id: 192, description: "Mayonnaise" },
        { id: 193, description: "Meringue" },
        { id: 194, description: "meringue powder" },
        { id: 195, description: "Ovalbumin" },
        { id: 196, description: "Ovoglobulin" },
        { id: 197, description: "Ovomucin" },
        { id: 198, description: "Ovomucoid" },
        { id: 199, description: "Ovotransferrin" },
        { id: 200, description: "Ovovitelia" },
        { id: 201, description: "Ovovitellin" },
        { id: 202, description: "Powdered eggs" },
        { id: 203, description: "Silici albuminate" },
        { id: 204, description: "Simplesse" },
        { id: 205, description: "Surimi" },
        { id: 206, description: "Trailblazer" },
        { id: 207, description: "Vitellin" },
        { id: 208, description: "Whole egg" },
        { id: 209, description: "Bean curd" },
        { id: 210, description: "Edamame" },
        { id: 211, description: "soybeans in pods" },
        { id: 212, description: "Hydrolyzed soy protein" },
        { id: 213, description: "Kinako" },
        { id: 214, description: "roasted soybean flour" },
        { id: 215, description: "Koya dofu" },
        { id: 216, description: "freeze dried tofu" },
        { id: 217, description: "Miso" },
        { id: 218, description: "Natto" },
        { id: 219, description: "Okara" },
        { id: 220, description: "soy pulp" },
        { id: 221, description: "Shoyu" },
        { id: 222, description: "Soy albumin" },
        { id: 223, description: "Soy concentrate" },
        { id: 224, description: "Soy fiber" },
        { id: 225, description: "Soy formula" },
        { id: 226, description: "Soy grits" },
        { id: 227, description: "Soy milk" },
        { id: 228, description: "Soy miso" },
        { id: 229, description: "Soy nuts" },
        { id: 230, description: "Soy nut butter" },
        { id: 231, description: "Soy protein " },
        { id: 232, description: "soy protein concentrate" },
        { id: 233, description: "soy protein isolate" },
        { id: 234, description: "Soy sauce" },
        { id: 235, description: "Soy sprouts" },
        { id: 236, description: "Soya" },
        { id: 237, description: "Soya flour" },
        { id: 238, description: "Soybeans" },
        { id: 239, description: "Soybean granules" },
        { id: 240, description: "Soybean curd" },
        { id: 241, description: "Soybean flour" },
        { id: 242, description: "Soy lecithin" },
        { id: 243, description: "Soybean paste" },
        { id: 244, description: "Supro" },
        { id: 245, description: "Tamari" },
        { id: 246, description: "Tempeh" },
        { id: 247, description: "Teriyaki sauce" },
        { id: 248, description: "Textured soy flour" },
        { id: 249, description: "TSF" },
        { id: 250, description: "Textured soy protein" },
        { id: 251, description: "TSP" },
        { id: 252, description: "Textured vegetable protein" },
        { id: 253, description: "TVP" },
        { id: 254, description: "Tofu" },
        { id: 255, description: "Yaki-dofu" },
        { id: 256, description: "Grilled tofu" },
        { id: 257, description: "Yuba" },
        { id: 258, description: "bean curd" },
        { id: 259, description: "All purpose flour" },
        { id: 260, description: "bread" },
        { id: 261, description: "white flour" },
        { id: 262, description: "wheat flour" },
        { id: 263, description: "bread crumbs" },
        { id: 264, description: "Bulgur" },
        { id: 265, description: "Cereal extract" },
        { id: 266, description: "Couscous" },
        { id: 267, description: "Cracker meal" },
        { id: 268, description: "Einkorn" },
        { id: 269, description: "Emmer " },
        { id: 270, description: "farro" },
        { id: 271, description: "Farina" },
        { id: 272, description: "atta flour" },
        { id: 273, description: "club flour" },
        { id: 274, description: "common flour" },
        { id: 275, description: "durum flour" },
        { id: 276, description: "einkorn flour" },
        { id: 277, description: "emmer flour" },
        { id: 278, description: "farina flour" },
        { id: 279, description: "graham flour" },
        { id: 280, description: "kamut flour" },
        { id: 281, description: "maida flour" },
        { id: 282, description: "semolina flour" },
        { id: 283, description: "spelt flour" },
        { id: 284, description: "triticale flour" },
        { id: 285, description: "triticum flour" },
        { id: 286, description: "all purpose flour" },
        { id: 287, description: "bread flour" },
        { id: 288, description: "bromated flour" },
        { id: 289, description: "cake flour" },
        { id: 290, description: "enriched flour" },
        { id: 291, description: "high gluten flour" },
        { id: 292, description: "high protein flour" },
        { id: 293, description: "instant pastry flour" },
        { id: 294, description: "phosphated flour" },
        { id: 295, description: "plain flour" },
        { id: 296, description: "soft wheat flour" },
        { id: 297, description: "steel ground flour" },
        { id: 298, description: "stone flour" },
        { id: 299, description: "ground flour" },
        { id: 300, description: "self-rising flour" },
        { id: 301, description: "unbleached flour" },
        { id: 302, description: "white flour" },
        { id: 303, description: "whole wheat flour" },
        { id: 304, description: "Fu" },
        { id: 305, description: "wheat gluten" },
        { id: 306, description: "vital gluten" },
        { id: 307, description: "vital wheat gluten" },
        { id: 308, description: "fu gluten" },
        { id: 309, description: "Kamut" },
        { id: 310, description: "khorasan wheat" },
        { id: 311, description: "Malt" },
        { id: 312, description: "malt extract" },
        { id: 313, description: "Matzo" },
        { id: 314, description: "Matzoh" },
        { id: 315, description: "Matzah" },
        { id: 316, description: "Matzah" },
        { id: 317, description: "Matzo meal" },
        { id: 318, description: "Matzoh meal" },
        { id: 319, description: "Matzah meal" },
        { id: 320, description: "Matzah meal" },
        { id: 321, description: "Noodles, pasta" },
        { id: 322, description: "Pasta noodles" },
        { id: 323, description: "Seitan" },
        { id: 324, description: "Semolina" },
        { id: 325, description: "Spelt" },
        { id: 326, description: "Tabbouleh" },
        { id: 327, description: "Triticale" },
        { id: 328, description: "Triticum" },
        { id: 329, description: "whole wheat" },
        { id: 330, description: "Wheat" },
        { id: 331, description: "whole wheat" },
        { id: 332, description: "wheat berries" },
        { id: 333, description: "wheat bran" },
        { id: 334, description: "whole wheat bread" },
        { id: 335, description: "whole wheat flour" },
        { id: 336, description: "wheat germ" },
        { id: 337, description: "wheat germ oil" },
        { id: 338, description: "wheat protein isolate" },
        { id: 339, description: "wheat starch" },
        { id: 340, description: "wheat sprouts" },
        { id: 341, description: "sprouted wheat" },
        { id: 342, description: "Wheatgrass" }
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`
      );
    });
};