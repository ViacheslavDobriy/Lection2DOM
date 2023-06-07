const studentsGroup1PracticeTime = [{
    firstName: "Slava",
    practiceTime: 56
},
{
    firstName: "Oleg",
    practiceTime: 120
},
{
    firstName: "Olga",
    practiceTime: 148
},
{
    firstName: "Sergey",
    practiceTime: 20
},
{
    firstName: "Vitaliy",
    practiceTime: 160
}
];

const studentsGroup2PracticeTime = [{
    firstName: "Ksusha",
    practiceTime: 87
},
{
    firstName: "Nikita",
    practiceTime: 133
},
{
    firstName: "Katya",
    practiceTime: 140
},
{
    firstName: "Daniel",
    practiceTime: 10
}
];

function findMax() {
    const values = arguments;
    let maxValue = -Infinity;
    for (let i = 0; i < values.length; i++) {
        if (values[i] > maxValue) maxValue = values[i];
    }
    return maxValue;
}

const group1PracticeTime = studentsGroup1PracticeTime.map((student) => student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) => student.practiceTime);

const maxTimeFromGroup1 = findMax(...group1PracticeTime); // вытянет из массива все элементы и передаст их в функцию как отдельные переменные

console.log(maxTimeFromGroup1);

const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2);

const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups);