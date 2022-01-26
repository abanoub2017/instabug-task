angular.module('appModule').controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.currentPage = 1;
  homePageVm.totalPages = null;
  homePageVm.clicked = false;
  activate();

  function activate() {
    Employees.getEmployees().then(({ data }) => {
      homePageVm.employees = homePageVm.employees.concat(data.employees);
    });
  }
  homePageVm.loader = () => {
    if (homePageVm.totalPages && homePageVm.totalPages === homePageVm.currentPage) {
      console.log('no more data');
    } else {
      homePageVm.clicked = true;
      homePageVm.currentPage++;
      Employees.loadMoreEmployees(homePageVm.currentPage).then(({ data }) => {
        homePageVm.clicked = false;
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.totalPages = data.pages;
      });
    }
  };
}
