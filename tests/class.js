function Person(name, job) {
        this.name = name;
        this.job = job;
        this.queryJob = function() {
            alert(this.job);
        };
}
 
var person = new Person("Jollen", "Software Developer");
person.queryJob();

