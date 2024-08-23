// They think of something you could store in a TypeScript object.
//write a program that creates objects containing these items.

interface itCourse {
    name: string;
    location: string;
    onsiteStudent: number;
}

let itCourse = {
    name: "TypeScript and Javascript",
    location: "Governor House Sindh",
    onsiteStudent: 50000
};

console.log(itCourse);
