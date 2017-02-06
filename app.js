var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.filterByData = function (student) {
        if (!student.websiteUrl || !student.codeSourceUrl) {
            return false;
        }
        return true;
    }

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Maryana Svitlyk",
            "websiteUrl": "https://albamontis.github.io/Design-studio/",
            "codeSourceUrl": "https://github.com/AlbaMontis/Design-studio",
            "cvUrl": "https://drive.google.com/file/d/0B8HqQCni7S6LUkZ0dWFDYkhQUlE/view?usp=sharing",
            "photo": "images/students/svitlyk.jpg"
        },
        {
            "name": "Oleg Konovaliuk",
            "websiteUrl": "https://konooleh.github.io/PrivateConsultantWebsite/",
            "codeSourceUrl": "https://github.com/konooleh/PrivateConsultantWebsite",
            "cvUrl": "https://www.upwork.com/o/profiles/users/_~01d32bdb368ca8e39e/",
            "photo": "images/students/konovaliuk.jpg"
        },
        {
            "name": "Yaroslav Hlukhovetskyi",
            "websiteUrl": "https://r3dmar.github.io/newstoryportfolio/",
            "codeSourceUrl": "https://github.com/r3dmar/newstoryportfolio",
            "cvUrl": "https://drive.google.com/file/d/0ByHPOnG2shJIRUVEMHMyanJJQ3c/view?usp=sharing",
            "photo": "images/students/hlukhovetskyi.jpg"
        },
        {
            "name": "Semen Havrylenko",
            "websiteUrl": "https://siemion73.github.io/course_work_final/",
            "codeSourceUrl": "https://github.com/siemion73/course_work_final/blob/gh-pages/index.html",
            "cvUrl": "",
            "photo": "images/students/havrylenko.jpg"
        },
        {
            "name": "Roman Shumylo",
            "websiteUrl": "https://kym404.github.io/bmw-club-2/",
            "codeSourceUrl": "https://github.com/kym404/bmw-club-2",
            "cvUrl": "",
            "photo": "images/students/shumylo.jpg"
        },
        {
            "name": "Volodymyr Serebrianskyi",
            "websiteUrl": "https://volodymyrcv.github.io/FPMS/",
            "codeSourceUrl": "https://github.com/volodymyrcv/FPMS",
            "cvUrl": "",
            "photo": "images/students/serebrianskyi.jpg"
        },
        {
            "name": "Andrii Panchenko",
            "websiteUrl": "https://andriypanchenko.github.io/Personal-Website/",
            "codeSourceUrl": "https://github.com/andriypanchenko/Personal-Website",
            "cvUrl": "",
            "photo": "images/students/panchenko.jpg"
        },
        {
            "name": "Oleksandra Seletska",
            "websiteUrl": "https://sandysel.github.io/oleksandra-website/",
            "codeSourceUrl": "https://github.com/sandysel/oleksandra-website",
            "cvUrl": "",
            "photo": "images/students/seletska.png"
        },
        {
            "name": "Nataliya Rokytska",
            "websiteUrl": "https://nrokicka.github.io/LUPGtest/",
            "codeSourceUrl": "https://github.com/NRokicka/LUPGtest",
            "cvUrl": "https://drive.google.com/file/d/0B7BoG12UqR0pYUlzUDFJSktNbzQ/view?usp=sharing",
            "photo": "images/students/rokytska.jpg"
        },
        {
            "name": "Vasyl Petrushka",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/petrushka.jpg"
        },
        {
            "name": "Vitaliy Shmyhelskyy",
            "websiteUrl": "https://vitaliy93.github.io/skilfulbeavers/",
            "codeSourceUrl": "https://github.com/Vitaliy93/skilfulbeavers",
            "cvUrl": "https://www.linkedin.com/in/vitaliy-shmyhelskyy-097b36b1/",
            "photo": "images/students/shmyhelskyy.jpg"
        },
        {
            "name": "Daryna Klymenko",
            "websiteUrl": "https://darynak.github.io/personalwebsite/",
            "codeSourceUrl": "https://github.com/DarynaK/personalwebsite",
            "cvUrl": "",
            "photo": "images/students/klymenko.jpg"
        },
        {
            "name": "Bohdan Chornyi",
            "websiteUrl": "https://xrunerman.github.io/finalproject",
            "codeSourceUrl": "https://github.com/Xrunerman/finalproject",
            "cvUrl": "https://www.work.ua/resumes/3839323/",
            "photo": "images/students/chorniy.jpg"
        },
        {
            "name": "Myroslava Pryadun",
            "websiteUrl": "https://mosya1pr.github.io/personal-page/",
            "codeSourceUrl": "https://github.com/mosya1pr/personal-page",
            "cvUrl": "https://github.com/mosya1pr/CV-MP/blob/master/MyroslavaPryadun.docx",
            "photo": "images/students/pryadun.jpg"
        },
        {
            "name": "Bohdan Novakivskyi",
            "websiteUrl": "https://body773.github.io/SweetSwaddle/",
            "codeSourceUrl": "https://github.com/body773/SweetSwaddle",
            "cvUrl": "https://www.linkedin.com/in/bohdan-novakivskyy-5262808a",
            "photo": "images/students/novakivskyi.jpg"
        },
        {
            "name": "Iryna Prytula",
            "websiteUrl": "https://irzya.github.io/site/",
            "codeSourceUrl": "https://github.com/irzya/site",
            "cvUrl": "",
            "photo": "images/students/prytula.jpg"
        },
        {
            "name": "Mykhailo Stasiuk",
            "websiteUrl": "https://staskopernik.github.io/cv-project/",
            "codeSourceUrl": "https://github.com/staskopernik/cv-project/blob/gh-pages/index.html",
            "cvUrl": "https://www.work.ua/ua/resumes/3609972/",
            "photo": "images/students/stasiuk.jpg"
        },
        {
            "name": "Oleh Tsap",
            "websiteUrl": "https://olegtsap82.github.io/lvivtennisclub100/",
            "codeSourceUrl": "https://github.com/olegtsap82/lvivtennisclub100",
            "cvUrl": "",
            "photo": "images/students/tsap.jpg"
        },
        {
            "name": "Oleksandr Kulbachynskyi",
            "websiteUrl": "",
            "codeSourceUrl": "",
            "cvUrl": "",
            "photo": "images/students/kulbachynskyi.jpg"
        },
        {
            "name": "Oresta Danyliak",
            "websiteUrl": "https://oresteja.github.io/beanboozled/",
            "codeSourceUrl": "https://github.com/oresteja/beanboozled",
            "cvUrl": "",
            "photo": "images/students/danyliak.jpg"
        },
        {
            "name": "Roman Rubizhnyi",
            "websiteUrl": "https://quantalian.github.io/responsive_site/",
            "codeSourceUrl": "https://github.com/Quantalian?tab=repositories",
            "cvUrl": "https://www.linkedin.com/in/roman-rubizhnyi-b9b684123/",
            "photo": "images/students/rubizhnyi.jpg"
        },
        {
            "name": "Yurii Kondrashov",
            "websiteUrl": "https://yurakon3.github.io/myproject/",
            "codeSourceUrl": "https://github.com/yurakon3/myproject",
            "cvUrl": "",
            "photo": "images/students/kondrashov.jpg"
        },
        {
            "name": "Yaroslav Petryk",
            "websiteUrl": "https://yar-petryk87.github.io/myproject/",
            "codeSourceUrl": "https://github.com/yar-petryk87/myproject",
            "cvUrl": "https://drive.google.com/open?id=0B4TeEDye1s33ZjlOczFwMm1EVFE",
            "photo": "images/students/petryk.jpg"
        },
        {
            "name": "Mykhaylo Plyuta",
            "websiteUrl": "https://mykhailopl.github.io/Cruise-Super/",
            "codeSourceUrl": "https://github.com/MykhailoPl/Cruise-Super",
            "cvUrl": "",
            "photo": "images/students/pliuta.jpg"
        },
        {
            "name": "Oleksandra Rubin",
            "websiteUrl": "https://rubin0803.github.io/kartograf2/",
            "codeSourceUrl": "https://github.com/Rubin0803/kartograf2",
            "cvUrl": "",
            "photo": "images/students/rubin.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
