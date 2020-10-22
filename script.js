"use strict"; 
const submissions = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2020-01-24",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-01-24",
        passed: true,
    }
];
console.log(submissions); 
console.log("---------add submission--------");
const addSubmission = (array,newName,newScore,newDate) => {
    let newStudent = {
        name : newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60
    }
    array.push(newStudent);
};
addSubmission(submissions,"Jimi Nuetron",40,"2020-04-18");
console.log(submissions); 
console.log("---------delete by index--------");
const deleteSubmissionByIndex = (array,index) => {
    array.splice(index, 1); 
};
deleteSubmissionByIndex(submissions,4);
console.log(submissions); 
console.log("---------delete by name--------");
const deleteSubmissionByName = (array,name) => {
    let destroy = array.findIndex((remove) => {
        return remove.name === name; 
    });
    array.splice(destroy,1); 
};
deleteSubmissionByName(submissions,"Jill"); 
console.log(submissions); 
console.log("---------edit submission--------");
const editSubmission = (array,index,score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
};
editSubmission(submissions,1,130); 
console.log(submissions); 
console.log("---------find submission by name--------");
const findSubmissionByName = (array,name) => {
    return array.find((student) => {
        return student.name === name;
    });
};
console.log(findSubmissionByName(submissions,"Jane"));
console.log("---------find lowest score--------"); 
const findLowestScore = (array) => {
    let initialLowestScore = array[0];
    array.forEach((currentLowest) => {
        if (initialLowestScore.score > currentLowest.score) {
            initialLowestScore = currentLowest;
        };
    });
    return initialLowestScore;
};
console.log(findLowestScore(submissions)); 
console.log("---------find average score--------");
const findAverageScore = (array) => {
    let sum = 0;
    for(let totalAvg of submissions) {
        sum += totalAvg.score;
    }
    return sum / submissions.length; 
};
console.log(findAverageScore(submissions)); 
console.log("---------filter passing--------");
const filterPassing = (array) => {
    return array.filter((success) => {
        return success.passed === true;
    });
};
console.log(filterPassing(submissions)); 
console.log("---------filter 90 above--------");
const filter90AndAbove = (array) => {
    return array.filter((aboveAvg) => {
        return aboveAvg.score >= 90; 
    });
};
console.log(filter90AndAbove(submissions)); 
