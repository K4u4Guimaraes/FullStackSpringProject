package crud.fullstack.springReact.mapper;

import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoRequest;
import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoResponse;
import crud.fullstack.springReact.entity.Employee;


public class EmployeeMapper {
    public static EmployeeDtoRequest mapToEmployeeDtoRequest(Employee employee){
        return new EmployeeDtoRequest(
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployeeRequest(EmployeeDtoRequest employeeDtoRequest){
        return new Employee(
                employeeDtoRequest.firstName(),
                employeeDtoRequest.lastName(),
                employeeDtoRequest.email()
        );
    }

    public static EmployeeDtoResponse mapToEmployeeDtoResponse(Employee employee){
        return new EmployeeDtoResponse(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployeeResponse(EmployeeDtoResponse employeeDtoResponse){
        return new Employee(
                employeeDtoResponse.id(),
                employeeDtoResponse.firstName(),
                employeeDtoResponse.lastName(),
                employeeDtoResponse.email()
        );
    }
}
