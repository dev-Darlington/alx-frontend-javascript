interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

function printTeacher(firstName:string, lastName:string): string {
    this.firstName = firstName.charAt(0).toUpperCase()
    this.lastName = lastName;
    console.log({ firstName, lastName })
    return `${firstName}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName;
    }
}



// class StudentClass implements StudentClass {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     workOnHomework(): string {
//         return 'Currently working';
//     }
//     displayName(): string {
//         return this.firstName;
//     }
// }