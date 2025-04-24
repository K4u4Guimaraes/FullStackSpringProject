package crud.fullstack.springReact.dto.employeeDTO;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record EmployeeDtoResponse(@NotNull UUID id,
                                  @NotBlank @NotNull String firstName,
                                  @NotBlank @NotNull String lastName,
                                  @NotBlank @NotNull String email ) {
}

