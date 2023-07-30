// switch case
 /*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

let type ='88'

switch (type) {
    case 'A':console.log("tiltel is Matching");
        break;
    default:console.log("Invalid Title");
        break;
}

let grade = 'A'

switch (grade) {
    case 'A':console.log("Grade is A");
        break;
    case 'B':console.log("Grade is B");
        break;
    case 'C':console.log("Grade is C");
        break;
    case 'D':console.log("Grade is D");
        break;
    case 'E':console.log("Grade is E");
        break;
    case 'F':console.log("Grade is F");
        break;
    default:console.log("Invalid Grade");
        break;
}

// another way to put multiple conditions

let role = "CEO";
let salary = 10000;

switch (role) {
    case "employee":
    case "hr":
    case "manager":
        salary += 0.05*salary;
    break;
    case "CEO":
    case "CIO":
    case "CTO":
        salary += 0.1*salary;
        break;
        default:console.log("Unknown Role");
}
console.log(salary);