const Engineer = require('../lib/Engineer');

const testObject= {
    name: "Smith",
    id: 1,
    email: "test@email.com",
    officeNum: 32,
    gitHub: "testName",
    school: "University"
}

describe("Engineer", () => {
    describe("Constructor", () => {
        it("should return an object containing 'name', 'id', 'email', and 'gitHub' properties when called with the 'new keywork ", () => {
            const newEngineer = new Engineer();

            expect("name" in newEngineer && "id" in newEngineer && "email" in newEngineer && "gitHub" in newEngineer).toBe(true);
        })
        it("should set the values of 'name', 'id', 'email', and 'gitHub' when created with parameters", () => {
            const name = "Smith";
            const id = 1;
            const email = "test@email.com";
            const gitHub = "testName";
            const expected = {
                name: "Smith",
                id: 1,
                email: "test@email.com",
                gitHub: "testName"
            }

            let newEngineer = new Engineer(name, id, email, gitHub)

            expect(newEngineer).toEqual(expected)
        } )
    })
    describe("getGitHub", () => {
        it("should set its 'gitHub' property when passed an object containing a 'gitHub' key", () => {
            let newEngineer = new Engineer();
            newEngineer.getGitHub(testObject);

            expect(newEngineer.gitHub).toBe("testName");
        } )
    })
    describe("getRole", () => {
        it("should set its 'name', 'id', 'email', and 'gitHub' properties when passed an object containing keys corresponding to those properties", () => {
            let newEngineer = new Engineer();
            newEngineer.getRole(testObject);

            expect("name" in newEngineer && "id" in newEngineer && "email" in newEngineer&& "gitHub" in newEngineer).toBe(true);
        })
        it("should return the object when called", () => {
            let newEngineer = new Engineer();

            expect(typeof newEngineer.getRole(testObject)).toBe("object")
        })
    })
})