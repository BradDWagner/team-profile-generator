const Manager = require('../lib/Manager');

const testObject= {
    name: "Smith",
    id: 1,
    email: "test@email.com",
    officeNum: 32,
    gitHub: "testName",
    school: "University"
}

describe("Manager", () => {
    describe("Constructor", () => {
        it("should return an object containing 'name', 'id', 'email', and 'officeNum' properties when called with the 'new keywork ", () => {
            const newManager = new Manager();

            expect("name" in newManager && "id" in newManager && "email" in newManager && "officeNum" in newManager).toBe(true);
        })
        it("should set the values of 'name', 'id', 'email', and 'officeNum' when created with parameters", () => {
            const name = "Smith";
            const id = 1;
            const email = "test@email.com";
            const officeNum = 32;
            const expected = {
                name: "Smith",
                id: 1,
                email: "test@email.com",
                officeNum: 32
            }

            let newManager = new Manager(name, id, email, officeNum)

            expect(newManager).toEqual(expected)
        } )
    })
    describe("getOfficeNum", () => {
        it("should set its 'officeNum' property when passed an object containing an 'officeNum' key", () => {
            let newManager = new Manager();
            newManager.getOfficeNum(testObject);

            expect(newManager.officeNum).toBe(32);
        } )
    })
    describe("getRole", () => {
        it("should set its 'name', 'id', 'email', and 'officeNum' properties when passed an object containing keys corresponding to those properties", () => {
            let newManager = new Manager();
            newManager.getRole(testObject);

            expect("name" in newManager && "id" in newManager && "email" in newManager&& "officeNum" in newManager).toBe(true);
        })
        it("should return the object when called", () => {
            let newManager = new Manager();

            expect(typeof newManager.getRole(testObject)).toBe("object")
        })
    })
})