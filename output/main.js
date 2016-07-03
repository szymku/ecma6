var TaskCollection = function TaskCollection(tasks) {
    if ( tasks === void 0 ) tasks = [];

    this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
    console.log(this.tasks);
};

var foo = 'bar';

new TaskCollection([
    'Go to store',
    'Finish tutorial',
    'Sleep well'
]).dump();

console.log(foo);