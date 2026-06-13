import axios from "axios";

//const BASE_URL = "http://veera.narni.co.in/employee";    //For  deployment on kubernetes
const BASE_URL = "http://38.06.37.4:8080/employee";      // For  deployment on aws  ec2  and docker 
// const BASE_URL = process.env.REACT_APP_BASE_URL ; // Fallback URL
class EmployeeService{

    //**Method to get all employee from our api or database */
    getAllEmployee(){
        return axios.get(BASE_URL);
    }
    /**MEthod to save employee */
    saveEmployee(employeeData){
        return axios.post(BASE_URL, employeeData);
    }
    updateEmployee(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }
    getEmployeeById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteEmployee(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new EmployeeService();
