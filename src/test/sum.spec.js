import sum from './../sum';

describe('第一个测试套件',function(){
    it('第一个测试用例:1+1 === 2',function(){
        var result = sum(1,2)
        expect(result).toBe(3);
    })
})