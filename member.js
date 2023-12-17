function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        hobbies: ['music', 'movies', 'sports'],
        getBirthYear: function() {
            return 2017 - this.age;
        }
    }
    return member;
}