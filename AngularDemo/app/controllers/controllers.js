//This controller retrieves data from the customersService and associates it with the $scope
//The $scope is ultimately bound to the view

demoApp.controller( 'schoolController', ['$scope', function($scope) { 
  $scope.schools = [
    {id:1,schoolname:'PS 50',city:'Jamaica',state:'NY'},
    {id:789,schoolname:'Saint Pius V',city:'Jamaica',state:'NY'},
    {id:13984,schoolname:'Aviation High School',city:'Long Island City',state:'NY'},
    {id:500,schoolname:'Embry-Riddle Aeronautical University',city:'Daytona Beach',state:'FL'},      
  ];
  
  $scope.showAlert = function( id ){
    var schoolinfo = [];
    for (var i = 0, l = $scope.schools.length; i < l; i++) {
      if ($scope.schools[i]['id'] === id) 
        schoolinfo = $scope.schools[i];
    }

    alert( 'school: '  + schoolinfo.schoolname + '\ncity: ' + schoolinfo.city + '\nstate: ' + schoolinfo.state ); 
  };

  $scope.newSchool = function(){
    var newSchool = {
      id: $scope.newschool.schoolid ,
      schoolname: $scope.newschool.schoolname ,
      city:'Bergen',
      state:'NJ'
    }
        
    $scope.schools.push ( newSchool )    
  }
  
}]);

/*
demoApp.controller( 'peopleController', ['$scope', function($scope) {
  $scope.school = 'John Jay';

  $scope.people = [
    {name:'Dave',dob:'08/18/1970'},
    {name:'Napur',dob:'01/15/1980'},
    {name:'Heedy',dob:'12/03/1987'},
    {name:'Jose',dob:'12/03/1987'},  
    {name:'Shriva',dob:'04/03/1978'},  
    {name:'Brian',dob:'12/14/1965'},  
    {name:'Ana',dob:'06/25/1968'}        
  ];
                
  $scope.currentAge = function( dob ){      
    var today = new Date();
    var birthDate = new Date( dob );
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
        
    return age;      
  };//close CurrentAge 

}]); //close peopleController
*/