export const testAPI = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

        }, 15000);
    });
};

let tasks = [
    {
        taskNumber: 1,
        taskName: "Task 1",
        taskDescription: "This is task 1",
    },

    {
        taskNumber: 2,
        taskName: "Task 1",
        taskDescription: "This is task 1",
    },
    {
        taskNumber: 3,
        taskName: "Task 1",
        taskDescription: "This is task 1",
    },
    {
        taskNumber: 4,
        taskName: "Task 1",
        taskDescription: "This is task 1",
    },  
];
export const getAllTasks = () =>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(tasks);
        }, 3000);
    });