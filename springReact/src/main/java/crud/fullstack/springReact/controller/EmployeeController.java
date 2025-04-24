package crud.fullstack.springReact.controller;


import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoRequest;
import crud.fullstack.springReact.dto.employeeDTO.EmployeeDtoResponse;
import crud.fullstack.springReact.service.EmployeeService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/base/employee")
public class EmployeeController {

    private EmployeeService employeeService;


    @PostMapping
    public ResponseEntity<EmployeeDtoRequest> createEmployee(@RequestBody @Valid EmployeeDtoRequest employeeDto){
        EmployeeDtoRequest savedEmployee = employeeService.createEmployee(employeeDto);
         return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDtoResponse> selectEmployee(@PathVariable(value = "id") UUID id){
       EmployeeDtoResponse employeeDtoResponse = employeeService.getEmployee(id);
       return ResponseEntity.ok(employeeDtoResponse);
    }

    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeDtoResponse>> getAllEmployeesC(){
        List<EmployeeDtoResponse> employeeDto = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDto);
    }


    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDtoRequest> updEmployee(@PathVariable(value = "id") UUID id, @RequestBody @Valid EmployeeDtoRequest employeeDtoRequest){
        EmployeeDtoRequest updEmployeeDto = employeeService.updateEmployee(id, employeeDtoRequest);
        return ResponseEntity.ok(updEmployeeDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> dellEmployee(@PathVariable(value = "id") UUID id){
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("successfully deleted Employee ");
    }

}
