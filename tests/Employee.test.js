const Employee = require('../lib/Employee');

const testObject= {
    name: "Smith",
    id: 1,
    email: "test@email.com",
    officeNub: 32,
    gitHub: "testName",
    school: "University"
}

describe("Employee", () => {
    describe("Constructor", () => {
        it("should return an object containing 'name', 'id', and 'email' properties when called with the 'new keywork ", () => {
            let newHire = new Employee();

            expect("name" in newHire && "id" in newHire && "email" in newHire).toBe(true);
        });

        it("should set the values of 'name', 'id', and 'email' when created with parameters", () => {
            const name = "Smith";
            const id = 1;
            const email = "test@email.com";
            const expected = {
                name: "Smith",
                id: 1,
                email: "test@email.com"
            }

            let newHire = new Employee(name, id, email)

            expect(newHire).toEqual(expected)
        } )
    })
    describe("getName", () => {
        it("should set its 'name' property when passed an object containing a 'name' key", () => {
            let newHire = new Employee();
            newHire.getName(testObject);

            expect(newHire.name).toBe("Smith");
        })

    })
    describe("getId", () => {
        it("should set its 'id' proberty when passed an object containing an 'id' key", () => {
            let newHire = new Employee();
            newHire.getId(testObject);

            expect(newHire.id).toBe(1)
        })
    })
    describe("getEmail", () => {
        it("should set its 'email' proberty when passed an object containing an 'email' key", () => {
            let newHire = new Employee();
            newHire.getEmail(testObject);

            expect(newHire.email).toBe("test@email.com")
        })
    })
    describe("getRole", () => {
        it("should set its 'name', 'id', and 'email' properties when passed an object containing keys corresponding to those properties", () => {
            let newHire = new Employee();
            newHire.getRole(testObject);

            expect("name" in newHire && "id" in newHire && "email" in newHire).toBe(true);
        })
        it("should return the object when called", () => {
            let newHire = new Employee();

            expect(typeof newHire.getRole(testObject)).toBe("object")
        })
    })

})

