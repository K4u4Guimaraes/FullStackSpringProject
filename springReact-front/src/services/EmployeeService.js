import axios from 'axios';

const REST_API_BASE_URL = ' http://localhost:8080/base/employee';

const API_ENDPOINTS ={
    employees: '/employees',
    employeeById: (id) => `/${id}` 
}

const buildUrl = (endpoint) => `${REST_API_BASE_URL}${endpoint}`;

export const listEmployees = () =>  axios.get(buildUrl(API_ENDPOINTS.employees));
export const createEmployee = (employee) => axios.post(buildUrl(''), employee);
export const getEmployee = (employeeId) => axios.get(buildUrl(API_ENDPOINTS.employeeById(employeeId)));
export const updateEmployee = (employeeId,employee) => axios.put(buildUrl(API_ENDPOINTS.employeeById(employeeId)),employee);
export const deleteEmployee = (employeeId) => axios.delete(buildUrl(API_ENDPOINTS.employeeById(employeeId)));



//another way, for example:



// const api = axios.create({
//     baseURL: 'http://localhost:8080/base/employee',
//   });
  
//   export const listEmployees = () => api.get('/employees');
//   export const createEmployee = (employee) => api.post('', employee);
//   export const getEmployeeById = (id) => api.get(`/${id}`);
//   export const updateEmployee = (id, employee) => api.put(`/${id}`, employee);
//   export const deleteEmployee = (id) => api.delete(`/${id}`);
