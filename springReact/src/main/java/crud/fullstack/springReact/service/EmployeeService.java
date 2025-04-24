package crud.fullstack.springReact.service;

import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoRequest;
import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoResponse;

import java.util.List;
import java.util.UUID;

public interface EmployeeService {

    EmployeeDtoRequest createEmployee(EmployeeDtoRequest employeeDtoRequest);

    EmployeeDtoResponse getEmployee(UUID id);

    List<EmployeeDtoResponse> getAllEmployees();

    EmployeeDtoRequest updateEmployee(UUID id, EmployeeDtoRequest employeeDtoRequest);

    void deleteEmployee(UUID id);
}
