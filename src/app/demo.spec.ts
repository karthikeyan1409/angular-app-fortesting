import { fakeAsync, flush, tick } from "@angular/core/testing";

describe("fakeAsyncDemo", () => {
    let x: boolean;

    beforeEach(() => {
        x = false;
    });

    // it("should be true without fakeAsync()", (done: DoneFn) => {
    //     setTimeout(() => {
    //         x = true;
    //         expect(x).toBe(true);
    //         done();
    //     }, 2000);
    // });

    // it("should be true without fakeAsync()", fakeAsync(() => {
    //     setTimeout(() => {
    //         x = true;
    //     }, 2000);

    //     setTimeout(()=> {},6000);
    //     setTimeout(()=> {},8000);
        
    //     flush();
        
    //     expect(x).toBe(true);
    // }));
});