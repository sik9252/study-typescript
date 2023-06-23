"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    // 메소드 추가
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("employees count:", this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
// employees는 private라서 접근 불가
// 고로 employees 리스트에 직원을 추가하려면 addEmployee 메소드를 사용해야함
// 하지만 자바스크립트에서는 구축한 버전에 따라 해당 구문이 작동할 수도 있음
// accounting.employees[2] = "Anna";
accounting.addEmployee("Max");
accounting.addEmployee("Maa");
accounting.printEmployeeInformation(); // 2, ["Max", "Maa"]
