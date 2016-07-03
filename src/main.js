import { TaskCollection, foo } from "./TaskCollection";

new TaskCollection([
    'Go to store',
    'Finish tutorial',
    'Sleep well'
]).dump();

console.log(foo);
