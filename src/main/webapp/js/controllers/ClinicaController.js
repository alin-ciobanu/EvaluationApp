
app.controller('ClinicaController', [
'$scope', 'DoctorsService', '$location', 'PersonsService', '$routeParams',
function ($scope, DoctorsService, $location, PersonsService, $routeParams) {

    $scope.persons = PersonsService.list;
    $scope.doctors = DoctorsService;

    $scope.person = PersonsService.getPersonById($routeParams.id);

    $scope.createAppointment = function (person) {
        PersonsService.add(person);
        $location.path('list');
    }

    $scope.editAppointment = function (person) {
        PersonsService.update(person);
        $location.path('list');
    }

    $scope.deletePerson = function (person) {
        PersonsService.remove(person);
    }

    $scope.formatDoctor = function (doctor) {
        return doctor.name + " -- " + doctor.specialityName;
    }

    console.log('controller');

    $scope.dateOptions = {
        yearRange: '1900:-0'
    };

}
]);