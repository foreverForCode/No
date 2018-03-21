describe('第一个测试套件',function(){
    it('1第一个测试用例:1+1 === 2',function(){
        expect(1+1).toBe(2);
    });
    it('2复杂数据进行比对',function(){
        var obj1 = {
            a:{
                b:1
            },
            c:[
                1,2,3
            ]
        },obj2={
            a:{
                b:1
            },
            c:[
                1,2,3
            ]
        };
        expect(obj1).toEqual(obj2)
    })
})