describe("onlyStrings", function(){
  it("returns an array", function(){
    expect(onlyStrings([1,2,3])).toEqual(jasmine.any(Array));
  });
  it("does not change arrays of strings", function(){
    expect(onlyStrings(["a","b","c"])).toEqual(["a","b","c"]);
  });
  it("removes non-string primitives from an array", function(){
    expect(onlyStrings([1,"hi",null,"cool",undefined,"woah",false,"ok"])).toEqual(["hi","cool","woah","ok"]);
  });
  it("removes reference types from an array", function(){
    expect(onlyStrings([{},"a",[],"b",function(){},"c"])).toEqual(["a","b","c"]);
  });
});