// WITHOUT BEFORE EACH (notice how many times we repeat let arr = [1,3,5])

describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
        let arr = [1,3,5];
        arr.push(7);
        expect(arr).toEqual([1,3,5,7]);
    });
    it("returns the new length of the array", function(){
        var arr = [1,3,5];
        expect(arr.push(7)).toBe(4);
    });
    it("adds anything into the array", function(){
        var arr = [1,3,5];
        expect(arr.push({})).toBe(4);
    });
  });
});