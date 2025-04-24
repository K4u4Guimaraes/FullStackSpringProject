package crud.fullstack.springReact.service.impl;

import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoRequest;
import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoResponse;
import crud.fullstack.springReact.entity.Employee;
import crud.fullstack.springReact.exception.ResourceNotFoundException;
import crud.fullstack.springReact.mapper.EmployeeMapper;
import crud.fullstack.springReact.repository.EmployeeRepository;
import crud.fullstack.springReact.service.EmployeeService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    @Override
    public EmployeeDtoRequest createEmployee(EmployeeDtoRequest employeeDtoRequest) {
        Employee employee = EmployeeMapper.mapToEmployeeRequest(employeeDtoRequest);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDtoRequest(savedEmployee);

    }

    @Override
    public EmployeeDtoResponse getEmployee(UUID id) {
      Employee employee =  employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee doesn't exists with id: "+id));
        return EmployeeMapper.mapToEmployeeDtoResponse(employee);
    }

    @Override
    public List<EmployeeDtoResponse> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee -> EmployeeMapper.mapToEmployeeDtoResponse(employee)))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDtoRequest updateEmployee(UUID id, EmployeeDtoRequest employeeDtoRequest) {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Sorry, Employee not found")
        );
        employee.setFirstName(employeeDtoRequest.firstName());
        employee.setLastName(employeeDtoRequest.lastName());
        employee.setEmail(employeeDtoRequest.email());

        Employee updEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDtoRequest(updEmployee);
    }

    @Override
    public void deleteEmployee(UUID id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Sorry, employee not found")
        );
        employeeRepository.deleteById(id);
    }
}
