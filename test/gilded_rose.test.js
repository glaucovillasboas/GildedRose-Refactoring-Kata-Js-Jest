const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should decrease sellIn and quality by 1 for ordinary items with sellIn and quality greater than 0", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Mysterious Powder", 1, 1),
      new Item("Unknown Seed", 50, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("+5 Dexterity Vest", 9, 19),
      new Item("Elixir of the Mongoose", 4, 6),
      new Item("Mysterious Powder", 0, 0),
      new Item("Unknown Seed", 49, 49),
    ]);
  });

  it("should keep quality at 0 for ordinary items with quality equals to 0 ", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 0),
      new Item("Elixir of the Mongoose", 5, 0),
      new Item("Mysterious Powder", 1, 0),
      new Item("Unknown Seed", 50, 0),
    ]);

    const items = gildedRose.updateQuality();
    
    expect(items).toEqual([
        new Item("+5 Dexterity Vest", 9, 0),
        new Item("Elixir of the Mongoose", 4, 0),
        new Item("Mysterious Powder", 0, 0),
        new Item("Unknown Seed", 49, 0),
    ]);
  });

  it("should decrease quality by 2 for ordinary items with sellIn less than or equals to 0", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 0, 20),
      new Item("Elixir of the Mongoose", -1, 7),
      new Item("Mysterious Powder", -3, 2),
      new Item("Unknown Seed", -5, 50),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("+5 Dexterity Vest", -1, 18),
      new Item("Elixir of the Mongoose", -2, 5),
      new Item("Mysterious Powder", -4, 0),
      new Item("Unknown Seed", -6, 48),
    ]);
  });

  it("should increase quality by 1 for Aged Brie with sellIn greater than 0 and quality less than 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 10, 20),
      new Item("Aged Brie", 1, 0),
      new Item("Aged Brie", 4, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Aged Brie", 9, 21),
      new Item("Aged Brie", 0, 1),
      new Item("Aged Brie", 3, 50),
    ]);
  });

  it("should increase quality by 2 for Aged Brie with sellIn less than or equals to 0 and quality less than 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 0, 20),
      new Item("Aged Brie", -1, 0),
      new Item("Aged Brie", -50, 49),
    ]);

    const items = gildedRose.updateQuality();

    expect(items).toEqual([
      new Item("Aged Brie", -1, 22),
      new Item("Aged Brie", -2, 2),
      new Item("Aged Brie", -51, 50),
    ]);
  });
  
});