
var doctorsFn = function () {
    return [
        {
            name: 'Dr. #1',
            specialityName: 'Neurologie'
        },
        {
            name: 'Dr. #2',
            specialityName: 'Tuse seaca'
        },
        {
            name: 'Dr. #3',
            specialityName: 'Pojar'
        }
    ];
}

var personsFn = function () {
    this.list = [];

    this.add = function (person) {
        this.list.push(person);
    }

    this.remove = function (person) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == person.id) {
                this.list.splice(i, 1);
                break;
            }
        }
    }

    this.update = function (person) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == person.id) {
                this.list.splice(i, 1, person);
                break;
            }
        }
    }

    this.getPersonById = function (id) {
        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].id == id) {
                return this.list[i];
            }
        }
    }

    return this;
}

app
.factory('DoctorsService', [doctorsFn])
.factory('PersonsService', [personsFn])