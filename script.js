"use strict"; 
let submissions = [
        {
          name: "Jane",
          score: 95,
          date: "2020-01-24",
          passed: true,
        },
        {
          name: "Joe",
          score: 77,
          date: "2018-05-14",
          passed: true,
        },
        {
          name: "Jack",
          score: 59,
          date: "2019-07-05",
          passed: false,
        },
        {
            name: "Jill",
            score: 88,
            date: "2020-04-22",
            passed: true,
          }
];
console.log(submissions); 
// 2
const addSubmission = (array,newName,newScore,newDate) => {
    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,
    };
    array.push(newSubmission); 
};
addSubmission(submissions,"hulk", 30,"2020-04-21");
console.log(submissions); 

//3
const deleteSubmissionByIndex = (array,index) => {
    array.splice(index,1); 
};
deleteSubmissionByIndex(submissions,1); 
console.log(submissions); 
//4
const deleteSubmissionByName = (array,name) => {
    let destroy = array.findIndex((student) => {
        return student.name === name; 
    });
    array.splice(destroy,1); 
}
deleteSubmissionByName(submissions,"hulk");
console.log(submissions); 
//5
const editSubmission = (array,index,score) => {
    array[index].score = score; 
    array[index].passed = score >= 60;
};
editSubmission(submissions,0,120);
console.log(submissions); 
//6
const findSubmissionByName = (array,name) => {
    return array.find((studentName) => {
        return studentName.name === name; 
    });
}
console.log(findSubmissionByName(submissions,"Jane")); 
//7
const findLowestScore = (array) => {
    let currentLowestScore = array[0]; 
    array.forEach((items) => {
        if (currentLowestScore.score > items.score) {
            currentLowestScore = items;
        };
    });
    return currentLowestScore; 
}
console.log(findLowestScore(submissions)); 
//8
const findAverageScore = () => {
    // for (let human of gcClass) {
    //     sum+=human.excitementLevel;
    // }
    let sum = 0; 
    for (let studentScore of submissions) {
        sum+=studentScore.score; 
    }
    return sum / submissions.length;
}
console.log(findAverageScore()); 
//9 
const filterPassing = (array) => {
    return array.filter((passers) => {
        return passers.passed === true; 
    });
}
console.log(filterPassing(submissions)); 
//10
const filter90AndAbove = (array) => {
    return array.filter((aboveAvg) => {
        return aboveAvg.score >= 90; 
    });
}
console.log(filter90AndAbove(submissions)); 