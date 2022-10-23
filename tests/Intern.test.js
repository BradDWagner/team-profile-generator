const Intern = require('../lib/Intern');

const testObject= {
    name: "Smith",
    id: 1,
    email: "test@email.com",
    officeNum: 32,
    gitHub: "testName",
    school: "University"
}

describe("Intern", () => {
    describe("Constructor", () => {
        it("should return an object containing 'name', 'id', 'email', and 'school' properties when called with the 'new keywork ", () => {
            const newIntern = new Intern();

            expect("name" in newIntern && "id" in newIntern && "email" in newIntern && "school" in newIntern).toBe(true);
        })
        it("should set the values of 'name', 'id', 'email', and 'school' when created with parameters", () => {
            const name = "Smith";
            const id = 1;
            const email = "test@email.com";
            const school = "University";
            const expected = {
                name: "Smith",
                id: 1,
                email: "test@email.com",
                school: "University"
            }

            let newIntern = new Intern(name, id, email, school)

            expect(newIntern).toEqual(expected)
        } )
    })
    describe("getschool", () => {
        it("should set its 'school' property when passed an object containing a 'school' key", () => {
            let newIntern = new Intern();
            newIntern.getSchool(testObject);

            expect(newIntern.school).toBe("University");
        } )
    })
    describe("getRole", () => {
        it("should set its 'name', 'id', 'email', and 'school' properties when passed an object containing keys corresponding to those properties", () => {
            let newIntern = new Intern();
            newIntern.getRole(testObject);

            expect("name" in newIntern && "id" in newIntern && "email" in newIntern && "school" in newIntern).toBe(true);
        })
        it("should return the object when called", () => {
            let newIntern = new Intern();

            expect(typeof newIntern.getRole(testObject)).toBe("object")
        })
    })
})