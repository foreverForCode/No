import core from './../app/core';

describe('core测试套件',function(){
    it('core.extends',function(){
        var targe={
            a:1
        },
        source={
            a:2,
            b:1
        };

        var result = core.extend(targe,source);
        expect(source).toEqual(source);
    })
})